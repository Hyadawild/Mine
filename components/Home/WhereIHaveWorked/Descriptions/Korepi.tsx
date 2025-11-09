// components/Experience/EnergyInstitute.js (or wherever you place it)

import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path as needed
import { getTasksTextWithHighlightedKeyword } from "./taskAndType"; // Adjust path

export default function Korepi() {
  const tasks = [
    {
      text: "Leading the reverse engineering of the game client to develop and maintain the core anti-cheat bypass and injection mechanisms for Korepi and Akebi.",
      keywords: [
        "Reverse Engineering",
        "Anti-Cheat Bypass",
        "Injector",
        "Security",
        "Vulnerability Analysis",
      ],
    },
    {
      text: "Developing and implementing a wide range of player-centric features, including God Mode, Attack Modifiers (Multi-Hit, Multi-Target), and No Cooldown for skills and actions.",
      keywords: [
        "Feature Development",
        "Player Enhancement",
        "God Mode",
        "Attack Modifiers",
        "No Cooldown",
      ],
    },
    {
      text: "Engineering world interaction and automation scripts such as Auto-Loot, Auto-Talk, Mob Vacuum, and Game Speed modifications to enhance gameplay efficiency.",
      keywords: [
        "Automation",
        "World Interaction",
        "Auto-Loot",
        "Game Speed",
        "Scripting",
      ],
    },
    {
      text: "Creating advanced teleportation and navigation functionalities, including Map Teleport, Chest/Oculi Teleport, and Custom Teleport to allow for rapid traversal of the game world.",
      keywords: [
        "Teleportation",
        "Navigation",
        "Map Teleport",
        "Game World",
        "Traversal",
      ],
    },
    {
      text: "Designing and maintaining the in-game graphical user interface (GUI) and visual enhancement features like ESP (Extra Sensory Perception), FPS Unlock, and various camera modifications.",
      keywords: ["UI/UX", "In-Game GUI", "Visuals", "ESP", "FPS Unlock"],
    },
    {
      text: "Building and integrating debugging and packet sniffing tools to analyze game data, manage entities, and provide real-time performance information.",
      keywords: [
        "Debugging Tools",
        "Packet Sniffer",
        "Entity Management",
        "Performance Analysis",
        "Game Data",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Lead Game Modding Tools Developer{" "}
            <span className="text-AAsecondary">@ Game Modding Dev</span>{" "}
            {/* Or your preferred color */}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Feb 2024 - May 2025
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://korepi.com/en/guide/", "_blank")
            }
          >
            www.korepi.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />{" "}
                {/* Or your preferred color */}
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
