import Image from "next/image";
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

function Developer({ developer }) {
  const { name, career, location, profilePicture, contacts } = developer;
  const { linkedin, email, github } = contacts;

  return (
    <div className="flex w-full text-sm sm:text-xl">
      <div className="w-full h-full">
        <p className="font-bold text-2xl sm:text-4xl">{name}</p>
        <p className="text-sm sm:text-lg">{career}</p>
        <p className="flex justify-start items-center gap-1 text-gray-500 sm:text-lg">
          <AiOutlineGlobal /> {location}
        </p>
        <div className="flex items-center gap-2 justify-start text-2xl mt-1">
          <Link href={email}>
            <CiMail />
          </Link>
          <Link href={linkedin}>
            <FaLinkedin />
          </Link>
          <Link href={github}>
            <FaGithub />
          </Link>
          <Link href="">
            <TbFileCv />
          </Link>
        </div>
      </div>
      <div className="w-3xs relative">
        <Image
          src={profilePicture.toString()}
          fill
          alt="profile-picture"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Developer;
