import About from "./components/AboutMe";
import CardList from "./components/CardList";
import Developer from "./components/Developer";
import Experties from "./components/Experties";

function Home() {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col items-center gap-20 w-3xl">
        <Developer />
        <About />
        <Experties />
        <CardList />
      </div>
    </div>
  );
}

export default Home;
