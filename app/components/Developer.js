import Image from "next/image";
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

function Developer() {
  return (
    <div className="text-xl flex w-full">
      <div className="w-full h-full">
        <p>Julian Raso</p>
        <p>Ingeniero en Sistemas de Información</p>
        <p className="flex justify-start items-center gap-1 text-lg text-gray-500">
          <AiOutlineGlobal /> Corrientes, Argentina
        </p>
        <div className="flex items-center gap-2 justify-start text-2xl mt-1">
          <Link href="https://www.linkedin.com/in/julian-raso/">
            <CiMail />
          </Link>
          <Link href="https://www.linkedin.com/in/julian-raso/">
            <FaLinkedin />
          </Link>
          <Link href="https://www.linkedin.com/in/julian-raso/">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/julian-raso/">
            <TbFileCv />
          </Link>
        </div>
      </div>
      <div className="w-3xs relative">
        <Image
          src="/profilepic.png"
          fill
          alt="profile-picture"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Developer;
