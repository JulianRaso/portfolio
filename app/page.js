import About from "./components/AboutMe";
import Configuration from "./components/Configuration";
import Developer from "./components/Developer";
import Experience from "./components/Experience";
import ProjectList from "./components/ProjectList";

function Home() {
  let display = false;
  let language = true;
  const { user, experiences, projects } = require(language
    ? "./_data/cv.json"
    : "./_data/cv-en.json");

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-12 w-10/12 sm:w-6/12 md:w-xl lg:w-3xl overflow-hidden">
        <Developer developer={user} />
        <About userAbout={user.aboutMe} />
        <Experience experiences={experiences} />
        <ProjectList projects={projects} />
        <Configuration display={display} />
      </div>
    </div>
  );
}

export default Home;
