'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';
import PubCard from '@/components/research/publications/PubCard';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

const parserOptions = {
  compact: true,
  spaces: 4,
  ignoreComment: true,
  ignoreDeclaration: true,
  ignoreInstruction: true,
};

const ParsePublicationData = (pubData) => {
  let pubType;
  const parsedData = [];
  pubData.forEach((item) => {
    if ('article' in item) {
      pubType = item.article;
    } else if ('inproceedings' in item) {
      pubType = item.inproceedings;
    }
    if (pubType === undefined || pubType.author === undefined) return;
    let parsedEntry = {
      title: pubType.title._text,
      authors: pubType.author?.map((author) => author._text),
      date: pubType._attributes.mdate,
      link: pubType.ee._text,
      uuid: uuidv4(),
    };
    parsedData.push(parsedEntry);
  });
  return parsedData.slice(0, 40);
};

export default function PublicationsList({ dblpIds }) {
  const [publications, setPublications] = useState([]);
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString(),
  );
  const parser = require('xml-js');

  const fetchPubs = useCallback(() => {
    const safeDblpIds = Array.isArray(dblpIds) ? dblpIds : [];

    const requests = safeDblpIds.map(async (dplpId) => {
      return axios
        .get('https://dblp.org/pid/' + dplpId + '.xml')
        .then((response) => {
          const parsedData = parser.xml2js(response.data, parserOptions);
          console.log(parsedData);
          return ParsePublicationData(parsedData.dblpperson.r);
        })
        .catch((error) => {
          return [];
        });
    });
    if (requests.length > 0) {
      Promise.all(requests).then((results) => {
        const allPublications = [...new Set(results.flat())];
        setPublications(allPublications);
      });
    } else {
      setPublications([]);
    }
  }, [dblpIds, parser]);

  useEffect(() => {
    fetchPubs();
  }, [fetchPubs]);

  const years = [
    ...new Set(publications.map((pub) => pub.date.slice(0, 4))),
  ].sort((a, b) => b - a);

  const handleYearChange = useCallback((_, newValue) => {
    setSelectedYear(newValue);
  }, []);

  const filteredPublications = useMemo(() => {
    return publications.filter(
      (pub) =>
        selectedYear === '' ||
        format(new Date(pub.date), 'yyyy') === selectedYear,
    );
  }, [publications, selectedYear]);

  const optimizedPublications = filteredPublications
    .toSorted((a, b) => new Date(b.date) - new Date(a.date))
    .map((pub) => {
      const formattedDate = format(new Date(pub.date), 'dd MMMM yyyy');
      return (
        <PubCard
          key={pub.uuid}
          title={pub.title}
          date={formattedDate}
          authors={pub.authors}
          link={pub.link}
        />
      );
    });

  return (
    <>
      <Box className="w-full overflow-x-auto">
        <Box className="flex justify-center items-center overflow-x-auto min-w-max">
          <Tabs
            value={selectedYear}
            onChange={handleYearChange}
            className="border-b border-gray-300">
            {years.map((year) => (
              <Tab key={year} label={year} value={year} />
            ))}
          </Tabs>
        </Box>
      </Box>
      <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
        {optimizedPublications}
      </div>
    </>
  );
}
