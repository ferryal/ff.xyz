import { motion } from "framer-motion";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";
const LinkedinCard = ({ section }) => {
  return (
    <motion.a
      href="https://www.linkedin.com/in/ferryalfajar"
      target="_blank"
      rel="noreferrer"
      animate={{
        opacity: ["all", "about", "contact"].includes(section) ? 1 : 0.3,
      }}
      className="flex justify-center items-center bg-white relative dark:bg-black rounded-2xl col-span-1"
      whileHover="groupHover"
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
      {/* <div className="w-10 md:w-10 lg:w-22"> */}
			<div className="text-center">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
        ></path>
      </svg>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 30 30"
        >
          <path 
						d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
						className="fill-current text-black dark:text-white"
					></path>
        </svg> */}
      </div>
      <ArrowCircleUpIcon className="absolute stroke-black dark:stroke-white bottom-0 right-0 m-2 md:m-5 md:mb-5 xl:m-5 rotate-45 mb-2 mr-2 w-8 h-8" />
    </motion.a>
  );
};

export default LinkedinCard;
