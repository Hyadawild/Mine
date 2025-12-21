import React from "react"
import ArrowIcon from "../../../Icons/ArrowIcon"
import { getTasksTextWithHighlightedKeyword } from "./taskAndType"

export default function CheetoPanel() {
  const tasks = [
    {
      text: "Developed a comprehensive cheat panel and internal menu for various games, utilizing C++, C#, and ImGui to provide a seamless and responsive in-game user interface.",
      keywords: ["C", "C#", "ImGui", "GUI Development", "Internal Menu"],
    },
    {
      text: "Implemented advanced memory manipulation and reverse engineering techniques to enable features such as ESP, God Mode, Kill Aura, and No Cooldown in Unity-based games.",
      keywords: [
        "Memory Manipulation",
        "Reverse Engineering",
        "Unity",
        "ESP",
        "God Mode",
      ],
    },
    {
      text: "Engineered robust protection bypasses to circumvent modern anti-cheat systems, ensuring long-term software stability and security for the user base.",
      keywords: ["Anti-cheat Bypass", "DLL Injection", "Stability", "Security"],
    },
    {
      text: "Optimized performance by integrating global hotkeys and modular code architecture, allowing for efficient feature expansion and real-time interactivity.",
      keywords: [
        "Optimization",
        "Hotkeys",
        "Modular Architecture",
        "Performance",
      ],
    },
  ]

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software & Exploit Developer{" "}
            <span className="text-AAsecondary">@ Cheeto-Panel</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2025 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the repository
            onClick={() =>
              window.open(
                "https://github.com/",
                "_blank"
              )
            }
          >
            
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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
