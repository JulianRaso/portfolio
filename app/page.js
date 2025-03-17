import About from "./components/AboutMe";
import Developer from "./components/Developer";
import Experience from "./components/Experience";
import ProjectList from "./components/ProjectList";

function Home() {
  const { user, experiences, projects } = require("./_data/cv.json");

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-12 w-10/12 sm:w-6/12 md:w-xl lg:w-2xl overflow-hidden">
        <Developer developer={user} />
        <About userAbout={user.aboutMe} />
        <Experience experiences={experiences} />
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

export default Home;
