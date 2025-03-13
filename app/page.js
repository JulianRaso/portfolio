import About from "./components/AboutMe";
import Configuration from "./components/Configuration";
import Developer from "./components/Developer";
import Experience from "./components/Experience";
import ProjectList from "./components/ProjectList";

function Home() {
  let language = true;
  const { user, experiences, projects } = require(language
    ? "./_data/cv.json"
    : "./_data/cv-en.json");

  function handleLanguage() {
    !language;
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-12 w-3xl text-lg">
        <Configuration />
        <Developer developer={user} />
        <About />
        <Experience experiences={experiences} />
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

export default Home;
