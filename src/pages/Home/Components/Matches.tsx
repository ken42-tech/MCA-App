import React from "react";
import {
  IonCard,
  IonCardContent,
  IonChip,
  IonIcon,
  IonText,
  IonButton,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";

const Matches = () => {
  // Mock data - this would be replaced with API data in a real implementation
  const matchesData = {
    title: "Matches",
    viewAll: true,
    matches: [
      {
        id: 1,
        type: "1st Match T20 Mumbai - 2025",
        isLive: true,
        teams: [
          {
            name: "Arcs Andheri",
            logo: "🔮", // Using emoji as placeholder for team logo
            score: "163-7 (20)",
            bgColor: "bg-blue-950", // Custom background color for first team
          },
          {
            name: "Eagle Thane Strikers",
            logo: "🦅", // Using emoji as placeholder for team logo
            score: "100-4 (10)",
            bgColor: "bg-red-950", // Custom background color for second team
          },
        ],
        status: "Eagle thane strikers need 64 runs to win",
      },
    ],
  };

  return (
    <div className="bg-brown-400 text-white  w-full mb-12">
      {/* Single parent div containing both the header and cards */}
      <div className="w-full">
        {/* Header section */}
        <div className="flex w-full justify-between items-center mb-4">
          <h2 className="text-xl  font-bold">{matchesData.title}</h2>
          {matchesData.viewAll && (
            <button className="flex items-center p-0 h-auto">
              View all
              <IonIcon icon={arrowForward} slot="end" />
            </button>
          )}
        </div>

        {/* Cards section */}
        {matchesData.matches.map((match) => (
          <div
            key={match.id}
            className="bg-black border-b-[6px] border-[#F26C21] border-x-[1px] border-t-[1px] text-white rounded-3xl overflow-hidden mb-2 mt-1"
          >
            <div className="p-3 pb-0">
              <div className="flex justify-between items-center">
                <IonText className="text-xs text-gray-400 pb-3">
                  {match.type}
                </IonText>
                {match.isLive && (
                  <IonChip className="bg-red-600 text-white h-6 absolute right-[-10%] top-[-16%] pb-3 pl-5 pr-16 pt-10 text-xs rounded-3xl flex items-center">
                    <span className="w-1 h-1 bg-white rounded-full mr-1"></span>
                    Live
                  </IonChip>
                )}
              </div>

              <div className="mt-2">
                {match.teams.map((team, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 flex items-center border border-gray-700 justify-center ${team.bgColor} rounded-md mr-2`}
                      >
                        {team.logo}
                      </div>
                      <div className="text-sm font-thin tracking-wide">
                        {team.name}
                      </div>
                    </div>
                    <div className="font-thin">{team.score}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-2 px-3 text-[#50B848] text-xs bg-opacity-50">
              {match.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
