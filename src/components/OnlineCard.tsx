import axios from "axios";
import { useMemo } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import ToggleCard from "./ToggleCard";

const OnlineCard = ({ section }) => {
  const { data, isLoading } = useSWR(`/api/online`, (url) =>
    axios.get(url).then((res) => res.data)
  );

  console.log(data);
  const [status, bgClass] = useMemo(() => {
    if (!data) return ["loading", "bg-gray-400"];
    switch (data?.data?.discord_status) {
      case "idle":
      case "dnd":
      case "online":
        return ["online", "bg-[#6DD2B7] dark:bg-[#35AC8C]"];
      case "offline":
        return ["offline", "bg-[#FFADC6] dark:bg-[#FF477E]"];
    }
  }, [data]);

  return (
    // <div className="flex flex-col">
      <motion.div
        animate={{
          opacity: section && ["all", "about"].includes(section) ? 1 : 0.3,
          height: '110px',
          // height: '20vh',
          width: '100%'
        }}
        className={`text-white rounded-2xl flex relative overflow-hidden aspect-square shadow-sm ${bgClass}`}
      >
        <div className="absolute inset-0 flex items-center justify-center text-base md:text-2xl xl:text-3xl font-bold">
          <div className="flex items-center gap-3">
            {/* Loading Dot Animation */}
            <span className="w-2 h-2 md:h-5 md:w-5">
              <span className="absolute w-2 h-2 md:w-5 md:h-5 bg-white rounded-full" />
            </span>
            <p>{status}</p>
          </div>
        </div>
      </motion.div>
    //   <ToggleCard section={section} />
    // </div>
  );
};

export default OnlineCard;
