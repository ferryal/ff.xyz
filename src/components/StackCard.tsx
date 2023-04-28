import {
	SiAmazonaws,
	SiBabel,
	SiDocker,
	SiGit,
	SiBitbucket,
	SiGo,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiSpotify,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiWebpack,
	SiWebstorm,
	SiYarn,
} from 'react-icons/si';
const StackCard = () => {
  return (
    <div className="col-span-3 flex items-center justify-center rounded-2xl bg-fuchsia-700 p-3 text-fuchsia-100 md:col-span-2">
      <div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
        <SiTypescript size={20} />
        <SiDocker size={20} />
        <SiNextdotjs size={20} />
        <SiRedis size={20} />
        <SiPostgresql size={20} />
        <SiReact size={20} />
        <SiTailwindcss size={20} />
        <SiNodedotjs size={20} />
        <SiGo size={20} />
        <SiJavascript size={20} />
        <SiAmazonaws size={20} />
        <SiWebstorm size={20} />
        <SiWebpack size={20} />
        <SiBabel size={20} />
        <SiYarn size={20} />
        <SiGit size={20} />
        <SiSpotify size={20} />
        <SiMongodb size={20} />
        <SiVisualstudiocode size={20} />
        <SiBitbucket size={20} />
      </div>
    </div>
  );
};

export default StackCard;
