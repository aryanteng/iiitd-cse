'use client';
import BulletPoints from '@/components/admissions/phd/BulletPoints';
import Carousel from '@/components/admissions/phd/Carousel';
import ResearchCard from '@/components/admissions/phd/ResearchCard';
import OnlineCourseCard from '@/components/approved-online-courses/OnlineCourseCard';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function PhdAdmissions() {
  const [pointsData, setPointsData] = useState([
    {
      heading: 'Eligibility Criteria',
      points: [
        'The applicants need to fulfill at least one of the following criteria to be eligible to apply for the PhD program with a CSE specialization:',
        'BTech/BE/MTech/MSc/M.E. in CSE/IT/ECE/EE and allied areas, with a CGPA of at least 7.5 on a 10 (or equivalent) scale or 70%',
        'MCA/MSc(CSE/IT/ECE/EE and allied areas) is considered equivalent to the BTech/BE degree. Such students are eligible to apply if they have a BSc in Computer Science or BSc in any other subject with mathematics. The marks requirement is the same as given above.',
        'MSc in Mathematics with at least 70% marks in both BSc and MSc or 7.5 CGPA and strong inclination towards CSE/ECE.',
      ],
    },
    {
      heading: 'Admission Categories',
      points: [
        'Regular PhD: Students who are not holding regular employment are only engaged in their academic program.',
        'Sponsored PhD: IIIT-Delhi allows highly motivated working professionals to pursue a PhD degree while still employed at the sponsoring organization. Click here for more details.',
      ],
    },
  ]);
  const [pointsDataFinancial, setPointsDataFinancial] = useState([
    {
      heading: 'Additional Financial Aid',
      points: [
        'Support upto Rs 50k is provided towards purchase of laptop/ desktop.',
        'Contingency grant of Rs.10k per annum.',
      ],
    },
    {
      heading: 'Institute Travel Grant',
      points: [
        'Full time Ph.D. students are encouraged to present their research work at International Conferences. Financial support of up to Rs. 2L for the entire duration of the program is available.',
      ],
    },
    {
      heading: 'Overseas Research Fellowship (ORF)',
      points: [
        'Support upto US $6000 may be considered in deserving cases to conduct research collaborations with reputed Universities/Labs abroad for a period of 3 to 6 months.',
      ],
    },
  ]);

  const [researchAreas, setResearchAreas] = useState([
    {
      name: 'Compilers',
      icon: '/images/admissions/phd/icons/Compiler.svg',
    },
    {
      name: 'Computer Vision',
      icon: '/images/admissions/phd/icons/ComputerVision.svg',
    },
    {
      name: 'Deep Learning',
      icon: '/images/admissions/phd/icons/DeepLearning.svg',
    },
    {
      name: 'ML for Speech/audio applications',
      icon: '/images/admissions/phd/icons/MLForSpeechAudioApplications.svg',
    },
    {
      name: 'Computer Graphics',
      icon: '/images/admissions/phd/icons/ComputerGraphics.svg',
    },
    {
      name: 'Computational Geometry',
      icon: '/images/admissions/phd/icons/ComputationalGeometry.svg',
    },
    {
      name: 'AR/VR',
      icon: '/images/admissions/phd/icons/ARVR.svg',
    },
    {
      name: 'High-Performance Computing',
      icon: '/images/admissions/phd/icons/HighPerformanceComputing.svg',
    },
    {
      name: 'Machine Learning for Neuromarketing',
      icon: '/images/admissions/phd/icons/MachineLearningForNEuromarketing.svg',
    },
    {
      name: 'Mobile Systems',
      icon: '/images/admissions/phd/icons/MobileSystems.svg',
    },
    {
      name: 'Network Security',
      icon: '/images/admissions/phd/icons/NetworkSecurity.svg',
    },
    {
      name: 'NLP',
      icon: '/images/admissions/phd/icons/NLP.svg',
    },
    {
      name: 'Social Computing',
      icon: '/images/admissions/phd/icons/SocialComputing.svg',
    },
    {
      name: 'Graph mining',
      icon: '/images/admissions/phd/icons/GraphMining.svg',
    },
    {
      name: 'Wireless Networks',
      icon: '/images/admissions/phd/icons/WirelessNetworks.svg',
    },
    {
      name: 'Mobile Computing',
      icon: '/images/admissions/phd/icons/MobileComputing.svg',
    },
  ]);

  return (
    <div>
      <div className="body-2xlarge font-semibold text-primary-dark text-center mt-4 italic p-4">
        PhD Admissions
      </div>
      <div className="body-small font-semibold text-primary-dark text-center ">
        Explore the possibility of admissions at IIIT Delhi
      </div>
      <div className="page-layout-1">
        <Carousel />
        <div className="body-small py-6 text-center ">
          The goal of the PhD program at IIIT Delhi is to empower students to
          become part of the global research ecosystem and contribute to
          research organizations and top-class universities worldwide. The
          program is based on the best practice models at top universities
          across the world. IIIT Delhi offers PhD programs in Computational
          Biology (CB), Computer Science and Engineering (CSE), Electronics and
          Communications Engineering (ECE), Human-Centered Design (HCD),
          Mathematics (Maths), and Social Sciences and Humanities (SSH).
          <br />
          <br />
          Students qualified for UGC/CSIR JRF, DST INSPIRE, DBT Fellowship and
          fresh B.Tech. Graduates with research aptitude are strongly encouraged
          to apply. GATE score is not mandatory.
        </div>

        {pointsData.map((data, index) => (
          <BulletPoints key={index} data={data} />
        ))}
      </div>

      <div className="body-2xlarge font-semibold text-primary-dark text-center mt-4 italic p-4">
        Financial Aid
      </div>
      <div className="body-small width-layout-1 font-semibold text-primary-dark text-center ">
        Students joining the Ph.D. program as regular student will be considered
        for Institute Fellowship. Presently institute is offering fellowship at
        the rate of Rs.31,000/- per month in the 1st & 2nd year and Rs.35,000/-
        per month in 3rd & 4th year. For 5th year, fellowship is at the reduced
        rate that is, Rs. 30,000/- per month.
      </div>
      <div className="page-layout-1">
        {pointsDataFinancial.map((data, index) => (
          <BulletPoints key={index} data={data} />
        ))}
      </div>
      <div className="body-2xlarge font-semibold text-primary-dark text-center italic pb-10">
        Research Areas
      </div>
      <div className="flex flex-wrap pb-10 justify-center gap-6 md:gap-6 md:flex-row">
        {researchAreas.map((area, index) => (
          <ResearchCard
            key={index}
            icon={area.icon}
            name={area.name}></ResearchCard>
        ))}
      </div>
    </div>
  );
}
