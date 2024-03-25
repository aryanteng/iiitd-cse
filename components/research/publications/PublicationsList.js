'use client';
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';
import PubCard from '@/components/research/publications/PubCard';
import { Professors } from '@/components/research/publications/ProfessorIds';

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
    };
    parsedData.push(parsedEntry);
  });
  return parsedData.slice(0, 20);
};

export default function PublicationsList({ dblpIds }) {
  const [publications, setPublications] = useState([]);
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString(),
  );

  useEffect(() => {
    const parser = require('xml-js');

    const requests = Professors.map((prof) => {
      if (prof['DBLP'] === '') return Promise.resolve([]);

      return axios
        .get('https://dblp.org/pid/' + prof['DBLP'] + '.xml')
        .then((response) => {
          const parsedData = parser.xml2js(response.data, parserOptions);
          return ParsePublicationData(parsedData.dblpperson.r);
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
    });

    Promise.all(requests).then((results) => {
      const allPublications = [...new Set(results.flat())];
      setPublications(allPublications);
    });
  }, []);

  const years = [
    ...new Set(publications.map((pub) => pub.date.slice(0, 4))),
  ].sort((a, b) => b - a);

  const handleYearChange = (event, newValue) => {
    setSelectedYear(newValue);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  console.log('publications', publications);

  return (
    <main className="padding-layout-2 px-2 md:px-10">
      <h1 className="heading-1">Publications</h1>
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
        {publications
          .filter(
            (pub) => selectedYear === '' || pub.date.startsWith(selectedYear),
          )
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((pub) => (
            <PubCard
              key={pub.title}
              title={pub.title}
              date={formatDate(pub.date)}
              authors={pub.authors}
              link={pub.link}
            />
          ))}
      </div>
    </main>
  );
}
