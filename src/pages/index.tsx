import NavBar from "@/components/NavBar";
import IntroCard from "@/components/IntroCard";
import TwitterCard from "@/components/TwitterCard";
import ToggleCard from "@/components/ToggleCard";
import MeowyCard from "@/components/MeowyCard";
import ArticleCard from "@/components/ArticleCard";
import DiscordCard from "@/components/DiscordCard";
import MailCard from "@/components/MailCard";
import SpotifyCard from "@/components/SpotifyCard";
import { useState } from "react";
import MapCard from "@/components/MapCard";
import OnlineCard from "@/components/OnlineCard";
import TimeCard from "@/components/TimeCard";
import StackCard from "@/components/StackCard";
import WorkCard from "@/components/WorkCard";

function Home() {
  const [section, setSection] = useState("all");
  return (
    <div className="flex flex-col m-5 font-nunito">
      <NavBar setSection={setSection} />
      <div
        className="grid grid-cols-3 gap-2 md:grid-cols-4 
			md:gap-4 mt-5 container mx-auto xl:px-20 md:max-w-5xl"
      >
      {/* <div className="mx-auto grid max-w-3xl grid-cols-4 gap-6 px-6 pb-40 pt-16"> */}
        <IntroCard section={section} />
        <TwitterCard section={section} />
        <ToggleCard section={section} />
        <DiscordCard section={section} />
        <MailCard section={section} />
        <SpotifyCard section={section} />
        {/* <MeowyCard section={section} /> */}
        <OnlineCard section={section} />
        <ArticleCard section={section} />
        <WorkCard />
        <StackCard />
        <MapCard section={section} />
        <TimeCard section={section} />
      </div>
      <div className="flex justify-center items-center mt-10">
        <a href="https://anahoward.me/2004.html">
          <img src="https://cyber.dabamos.de/88x31/entranceorexit.gif" />
        </a>
        </div>
    </div>
  );
}

export default Home;
