import {
	SiAmazonaws,
	SiBabel,
	SiDocker,
	SiGit,
	SiBitbucket,
	SiRedux,
	SiJavascript,
	SiEslint,
	SiNextdotjs,
	SiNodedotjs,
	SiCsswizardry,
	SiReact,
	SiRedis,
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiWebpack,
	SiWebstorm,
	SiJest,
  SiGraphql
} from 'react-icons/si';
const StackCard = () => {
  return (
    <div className="col-span-3 flex items-center justify-center rounded-2xl bg-fuchsia-700 p-3 text-fuchsia-100 md:col-span-2">
      <div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
        <SiTypescript size={20} />
        <SiDocker size={20} />
        <SiNextdotjs size={20} />
        <SiRedis size={20} />
        <SiCsswizardry size={20} />
        <SiReact size={20} />
        <SiTailwindcss size={20} />
        <SiNodedotjs size={20} />
        <SiRedux size={20} />
        <SiJavascript size={20} />
        <SiAmazonaws size={20} />
        <SiGraphql size={20} />
        <SiWebpack size={20} />
        <SiBabel size={20} />
        <SiJest size={20} />
        <SiGit size={20} />
        <SiStyledcomponents size={20} />
        <SiEslint size={20} />
        <SiVisualstudiocode size={20} />
        <SiBitbucket size={20} />
      </div>
    </div>
  );
};

export default StackCard;
