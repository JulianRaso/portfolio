export default function CardExperience({ experience }) {
  const { companyName, position, description, date } = experience;

  return (
    <div className="w-full text-start">
      <div className="flex justify-between">
        <h1 className="font-bold size-lg">{companyName}</h1>
        <p className="font-light">{date}</p>
      </div>
      <p>{position}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
