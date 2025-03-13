import CardProject from "./CardProject";

async function ProjectList({ projects }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="font-bold text-2xl">Projectos</h1>
      <div className="flex align-bottom gap-4 w-fit">
        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
