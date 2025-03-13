import CardExperience from "./CardExperience";

function Experties() {
  const data = [
    {
      companyName: "Empresa 1",
      position: "Desarrollador Web",
      date: "2020 - 2021",
      description: "Desarrollo de aplicaciones web con ReactJS y NodeJS",
      language: "Javascript",
    },
    {
      companyName: "Empresa 2",
      position: "Desarrollador Backend",
      date: "2019 - 2020",
      description: "Desarrollo de aplicaciones web con NodeJS y ExpressJS",
      language: "Javascript",
    },
  ];
  return (
    <div className="w-full text-start">
      <h1 className="text-xl font-bold">Experiencia Laboral</h1>
      <div className="flex flex-col gap-4 mt-2">
        {data.map((experience) => (
          <CardExperience
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Experties;
