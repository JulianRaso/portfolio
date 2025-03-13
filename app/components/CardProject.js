import Image from "next/image";
import Language from "./Language";

function CardProject({ project }) {
  const { name, description, languages } = project;

  return (
    <div className="border-2 rounded-md p-2 m-4">
      <h1 className="text-center border-b-2 p-2">{name}</h1>
      <div className="flex flex-col justify-center mt-2">
        <p>{!description ? "Working on a description..." : description}</p>
        <div className="flex gap-4">
          {languages.map((language, index) => (
            <Language key={index}>{language}</Language>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
