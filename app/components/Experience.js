import CardExperience from "./CardExperience";

function Experience({ experiences }) {
  return (
    <div className="w-full text-start">
      <h1 className="text-xl font-bold sm:text-2xl">Experiencia Laboral</h1>
      <div className="flex flex-col gap-8 mt-2 pr-3">
        {experiences.map((experience) => (
          <CardExperience key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
