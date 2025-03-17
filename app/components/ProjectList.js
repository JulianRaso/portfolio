import CardProject from "./CardProject";

async function ProjectList({ projects }) {
  return (
    <div className="w-full mb-15">
      <h1 className="font-bold text-2xl">Projectos</h1>
      <div className="flex flex-col gap-8 mt-2 pr-3">
        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
