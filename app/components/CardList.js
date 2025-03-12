import { GithubRepo } from "../_data/data-services";
import CardProject from "./CardProject";

async function CardList() {
  const data = await GithubRepo();

  return (
    <div className="flex align-bottom gap-4">
      {data.map((project) => (
        <CardProject key={project.id} project={project} />
      ))}
    </div>
  );
}

export default CardList;
