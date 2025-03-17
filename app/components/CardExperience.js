export default function CardExperience({ experience }) {
  const { company, position, period, description } = experience;

  return (
    <div className="w-full text-start border-1 rounded-2xl p-4 shadow-[10px_8px_5px_0px] shadow-gray-300">
      <div className="flex justify-between items-center border-b-1">
        <h1 className="font-bold sm:text-2xl">{company}</h1>
        <p className="font-light text-xs sm:text-lg">{period}</p>
      </div>
      <p className="sm:text-lg">{position}</p>
      <p className="mt-3 text-justify sm:text-xl">{description}</p>
    </div>
  );
}
