import Image from "next/image";
import Language from "./Language";

function CardProject({ project }) {
  const { name, description, languages, image } = project;

  return (
    <div className="w-full text-start border-1 rounded-2xl p-4 shadow-[10px_8px_5px_0px] shadow-gray-300">
      <h1 className="text-center border-b-1 p-2 text-lg sm:text-xl font-bold">
        {name}
      </h1>
      <div className="flex flex-col justify-center mt-2">
        <div className="flex flex-col">
          <p className="text-justify sm:text-xl border-b-1 pb-2 ">
            {description}
          </p>
        </div>
        <div className="flex gap-12 mt-3 justify-center">
          {languages.map((language, index) => (
            <Language key={index}>{language}</Language>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
