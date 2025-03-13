import CardExperience from "./CardExperience";

function Experience({ experiences }) {
  return (
    <div className="w-full text-start">
      <h1 className="text-xl font-bold">Experiencia Laboral</h1>
      <div className="flex flex-col gap-4 mt-2">
        {experiences.map((experience) => (
          <CardExperience key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
