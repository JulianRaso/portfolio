import CardProject from "./CardProject";

async function ProjectList({ projects }) {
  return (
    <div className="w-full mb-15">
      <h1 className="font-bold text-2xl">Projectos</h1>
      <div className="flex gap-6 overflow-x-auto mt-4">
        {projects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
