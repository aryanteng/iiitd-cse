import { getSheetData } from '@/app/api/sheets';
import ProjectCard from '@/components/research/projects/ProjectCard';
import { normalizeSheetData } from '@/utils/normaliseSheetData';

export default async function Projects() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Projects';

  const data = await getSheetData(spreadsheetId, range);
  const projects = normalizeSheetData(data);
  projects.forEach((entry) => {
    entry.funded_by = entry.funded_by.split(',').map((item) => item.trim());
  });

  return (
    <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
