export default function CardExperience({ experience }) {
  const { company, position, period, description } = experience;

  return (
    <div className="w-full text-start">
      <div className="flex justify-between">
        <h1 className="font-bold size-lg">{company}</h1>
        <p className="font-light">{period}</p>
      </div>
      <p>{position}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
