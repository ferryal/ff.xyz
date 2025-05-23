import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { DocumentTextIcon, ArrowCircleUpIcon } from "@heroicons/react/outline";
import Transparentpfp from "@images/transparentpfp.png";
const IntroCard = ({ section }) => {
  return (
    <motion.div
      className="col-span-3 md:col-span-2 bg-white dark:bg-gray-900
			 rounded-2xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0"
      whileHover="groupHover"
      animate={{ opacity: ["all"].includes(section) ? 1 : 1 }}
      variants={{
        groupHover: {
          scale: 1.01,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="relative overflow-hidden">
        {/* <div className="md:hidden absolute top-8 right-10 rotate-180 -mt-10 w-[100px]">
					<Image className="dark:brightness-75" src={Transparentpfp} />
				</div> */}
        {/* <div className=''>
					<motion.div
						variants={{ groupHover: { y: 220 } }}
						style={{ rotate: 180, zIndex: 20 }}
						className="hidden 2xl:block absolute -top-32 2xl:-top-52 right-10 rotate-180
						-mt-10 w-32 2xl:w-60"
					>
						<Image className="dark:brightness-90" src={Transparentpfp} />{' '}
					</motion.div>
				</div> */}
        <div>
          <motion.div
            variants={{ groupHover: { y: 150 } }}
            style={{ rotate: 180, zIndex: 20 }}
            className="2xl:hidden absolute -top-32 2xl:-top-52 right-10 rotate-180 -mt-10 w-32 2xl:w-60"
          >
            <Image className="dark:brightness-90" src={Transparentpfp} />{" "}
          </motion.div>
          <div className="text-3xl md:text-4xl 2xl:text-4xl 2xl:mt-16 m-6 md:ml-6 ml-5 md:m-8 font-nunito font-bold">
            Hi, I&apos;m Ferryal Fajar!
          </div>
        </div>
        <div className="flex flex-col ml-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6">
          {/* <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito dark:text-gray-300"> */}
          <div className="2xl:mr-20 font-nunito dark:text-gray-300 lg:text-sm">
            {" "}
            {/* I&apos;m an Software Engineer Frontend */}
            Experienced Frontend Engineer with 7+ years in frontend web
            development. Quick learner, adept at crafting intuitive UIs,
            responsive designs, and API integration. Collaborative team player
            committed to high-quality solutions and industry trends.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
