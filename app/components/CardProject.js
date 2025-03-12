import Image from "next/image";
import Language from "./Language";
import Link from "next/link";

function CardProject({ project }) {
  const { name, description, html_url, language } = project;
  console.log(html_url);

  return (
    <div className="border-2 rounded-md p-2 m-4">
      <h1 className="text-center border-b-2 p-2">{name}</h1>
      <div className="flex flex-col justify-center mt-2">
        <p>{!description ? "Working on a description..." : description}</p>
        <Language>{language}</Language>
        <Link href={html_url} className="text-center w-auto">
          Open
        </Link>
      </div>
    </div>
  );
}

export default CardProject;
