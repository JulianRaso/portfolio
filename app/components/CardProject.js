import Image from "next/image";
import Language from "./Language";

function CardProject({ project }) {
  const { name, description, languages } = project;

  return (
    <div className="border-2 rounded-md p-2">
      <h1 className="text-center border-b-2 p-2 text-lg sm:text-xl font-bold">
        {name}
      </h1>
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg text-justify">{description}</p>
        <div className="flex gap-4 mt-2">
          {languages.map((language, index) => (
            <Language key={index}>{language}</Language>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
