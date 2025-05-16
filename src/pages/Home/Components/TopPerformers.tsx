import Heading from "./Heading"
import {t1,t2,tp1,tp2,tpPatternBg } from "../../../assets/images"

// Player data for top performers
const TopPerformersData = [
    {
        PlayerName: "Aditya tare",
        Team: "Team A",
        PerformanceIn:"Top Run Getter",
        Type:"Runs",
        Value: 500,
        Image: tp1
    },
    {
        PlayerName : "Aditya tare",
        Team: "Team B",
        PerformanceIn:"Top Run Getter",
        Type:"Runs",
        Value: 450,
        Image: tp2
    }
]

// Gradient and logo based on the teams
const teamStyles: Record<string,{ logo: string; gradient: string; patternGradient: string }> = {
  "Team A": {
    logo: t1,
    gradient: "bg-gradient-to-b from-[#000000a6] to-[#2721CF]",
    patternGradient: "bg-gradient-to-r from-[#2A0091] to-[#734BFD]",
  },
  "Team B": {
    logo: t2,
    gradient: "bg-gradient-to-b from-[#000000a6] to-[#E35C16]",
    patternGradient: "bg-gradient-to-r from-[#E07E27] to-[#E93301]",
  },
};

const TopPerformers = () => {
  return (
    <div className="py-8">
      <Heading text1="Top" text2="performers" showIcon={true} />
      <div className="flex overflow-x-auto whitespace-nowrap gap-5 p-4 scroll-smooth cursor-grab">
        {TopPerformersData.map((player, index) => {
          const teamStyle = teamStyles[player.Team];

          return (
            <div key={index} className="relative min-w-[280px] rounded-xl  text-white overflow-hidden">
                
                {/* Pattern Image */}
                <img
                    src={tpPatternBg}
                    alt="Pattern"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-100 z-10"
                />

                {/* Pattern Gradient Overlay (left-to-right) */}
                <div className={`absolute top-0 left-0 w-full h-full z-20 ${teamStyle.patternGradient} mix-blend-overlay opacity-100`} />

                {/* Team Color Overlay */}
                <div className={`absolute top-0 left-0 w-full h-full z-30 ${teamStyle.gradient}`}/>
              
              {/* Content */}
              <div className="relative z-40 flex flex-col justify-between h-[180px]">
                <div className="flex justify-between items-center pt-2 mt-2 px-2">
                  <img src={teamStyle.logo} alt="Team Logo" className="w-6" />
                  <p className="text-sm font-medium bg-[#ffffff23] px-2 rounded-sm uppercase">{player.PerformanceIn}</p>
                </div>
                <div className="flex justify-between mx-4">
                  <img
                    src={player.Image}
                    alt={player.PlayerName}
                    className="w-28 object-contain self-end"
                  />
                  <div className="flex flex-col justify-center  text-right gap-4">
                    <h1 className="text-xl font-medium mt-4">{player.PlayerName}</h1>
                    <div className="text-right">
                      <p className="text-sm text-white/80">{player.Type}</p>
                      <h1 className="text-[3rem] font-bold  text-white/80">{player.Value}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default TopPerformers;