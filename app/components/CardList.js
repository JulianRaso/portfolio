import { CvData, GithubRepo } from "../_data/data-services";
import CardProject from "./CardProject";

async function CardList() {
  const data = await GithubRepo();
  return (
    <div>
      <h1>Projectos</h1>
      <div className="flex align-bottom gap-4">
        {data.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
