'use client';
import DataTable from '@/components/common/DataTable';
import Chip from '@mui/material/Chip';

const colors = [
  '#B8D0EA',
  '#D4BACD',
  '#EEEECD',
  '#9CD1CE',
  '#E1BEBE',
  '#BFB3D7',
];
let clr = 0;

let columns = [
  {
    name: 'Code',
    options: {
      customBodyRender: (value) => {
        if (clr === 6) clr = 0;
        return (
          <Chip
            label={value}
            className="body-xsmall"
            style={{ backgroundColor: colors[clr++] }}
          />
        );
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
  {
    name: 'Name',
    options: {
      customBodyRender: (value) => {
        return <span className="body-xsmall">{value}</span>;
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
  {
    name: 'Acronym',
    options: {
      customBodyRender: (value) => {
        return <span className="body-xsmall">{value}</span>;
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
  {
    name: 'Credits',
    options: {
      customBodyRender: (value) => {
        return <span className="body-xsmall">{value}</span>;
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
  {
    name: 'Semester',
    options: {
      customBodyRender: (value) => {
        return <span className="body-xsmall">{value}</span>;
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
  {
    name: 'Pre-requisites',
    options: {
      customBodyRender: (value) => {
        if (value.length === 0) {
          return <span className="body-xsmall">None</span>;
        } else {
          return value.map((val, index) => {
            if (clr === 6) clr = 0;
            return (
              <Chip
                key={index}
                label={val}
                className="body-xsmall mb-2"
                style={{ backgroundColor: colors[clr++] }}
              />
            );
          });
        }
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
  {
    name: 'Anti-requisites',
    options: {
      customBodyRender: (value) => {
        if (value.length === 0) {
          return <span className="body-xsmall">None</span>;
        } else {
          return value.map((val, index) => {
            if (clr === 6) clr = 0;
            return (
              <Chip
                key={index}
                label={val}
                className="body-xsmall mb-2"
                style={{ backgroundColor: colors[clr++] }}
              />
            );
          });
        }
      },
      customHeadLabelRender: (value) => {
        return <span className="body-small">{value.name}</span>;
      },
    },
  },
];

const rows = [
  ['CSE320', 'Advanced Algorithms', 'AA', 4, 'Monsoon', ['CSE102'], []],
  ['CSE520', 'Advanced Biometrics', 'BIOM', 4, 'Winter', ['CSE441'], []],
  [
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    ['CSE344'],
    ['CSE555'],
  ],
  [
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    [],
    ['CSE555'],
  ],
  [
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    ['MTH201', 'CSE343'],
    [],
  ],
  ['CSE320', 'Advanced Algorithms', 'AA', 4, 'Monsoon', ['CSE102'], []],
  ['CSE520', 'Advanced Biometrics', 'BIOM', 4, 'Winter', ['CSE441'], []],
  [
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    ['CSE344'],
    ['CSE555'],
  ],
  [
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    [],
    ['CSE555'],
  ],
  [
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    ['MTH201', 'CSE343'],
    [],
  ],
  ['CSE320', 'Advanced Algorithms', 'AA', 4, 'Monsoon', ['CSE102'], []],
  ['CSE520', 'Advanced Biometrics', 'BIOM', 4, 'Winter', ['CSE441'], []],
  [
    'CSE562',
    'Advanced Computer Vision',
    'ACV',
    4,
    'Monsoon',
    ['CSE344'],
    ['CSE555'],
  ],
  [
    'CSE577',
    'Advanced Internet of Things',
    'AIOT',
    4,
    'Winter',
    [],
    ['CSE555'],
  ],
  [
    'CSE642',
    'Advanced Machine Learning',
    'AML',
    4,
    'Winter',
    ['MTH201', 'CSE343'],
    [],
  ],
];

export default function CourseCatalog() {
  return (
    <div className="page-layout-2">
      <h1 className="body-2xlarge font-semibold text-primary-dark text-center p-4">
        Course Catalog
      </h1>
      <DataTable columns={columns} data={rows} initialRows={10} />
    </div>
  );
}
