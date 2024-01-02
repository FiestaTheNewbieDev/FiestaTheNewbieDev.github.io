import ITechnology from "../interfaces/ITechnology";

export default function TechnologyCard(props: ITechnology) {
  const svg = require(`../assets/svg/${props.svg}`);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg p-4 w-48 hover:bg-gray-500 hover:bg-opacity-20 hover:transition-all hover:duration-500">
      <div className="h-24 w-full">
        <img
          className="mx-auto h-full object-cover"
          src={svg}
          alt={props.name}
        />
      </div>
      <div className="pt-4">
        <p className="text-center text-md font-semibold">{props.name}</p>
      </div>
    </div>
  );
}
