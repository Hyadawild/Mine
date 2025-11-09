import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Hotori() {
  const tasks = [
    {
      text: "Architecting and developing a lightweight, cross-platform desktop application using the Tauri framework, with Rust for the backend logic and TypeScript for the frontend.",
      keywords: [
        "Tauri",
        "Rust",
        "TypeScript",
        "Desktop Application",
        "Cross-Platform",
      ],
    },
    {
      text: "Integrating the Live2D rendering engine to display and animate high-fidelity characters, ensuring smooth performance and low CPU/GPU consumption.",
      keywords: [
        "Live2D",
        "Character Animation",
        "Rendering",
        "Performance Optimization",
        "WebGL",
      ],
    },
    {
      text: "Designing a minimal and intuitive user interface (UI) for application settings, including character selection, scaling, and managing click-through functionality.",
      keywords: [
        "UI/UX",
        "Frontend",
        "Settings Panel",
        "User Experience",
        "Minimalist Design",
      ],
    },
    {
      text: "Implementing core system interaction features such as window transparency, drag-and-drop movement, resizing, and multi-monitor support for a seamless user experience.",
      keywords: [
        "System Integration",
        "Window Management",
        "Multi-monitor",
        "Desktop Widget",
      ],
    },
    {
      text: "Managing the CI/CD pipeline using GitHub Actions for automated builds, testing, and creating releases for Windows, macOS, and Linux.",
      keywords: [
        "CI/CD",
        "GitHub Actions",
        "Automated Builds",
        "Release Management",
        "DevOps",
      ],
    },
  ];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Software Engineer{" "}
            <span className="text-AAsecondary">@ Game Server</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan - Sept 2025
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://github.com/Hyadawild/Hotori", "_blank")
            }
          >
            https://github.com/Hyadawild/Hotori
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
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
