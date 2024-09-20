"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const ModeButton = () => {
  const [mode, setMode] = useState(
    document.cookie.includes("mode=dark") ? "dark" : "light"
  );

  useEffect(() => {
    document?.body.classList.toggle("dark", mode === "dark");
    document?.cookie = `mode=${mode}`;
  }, [mode]);

  return (
    <div className="absolute z-100 top-10 left-10">
      <button
        className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md"
        onClick={() => {
          setMode(mode === "dark" ? "light" : "dark");
        }}
      >
        {mode === "dark" ? (
          <FontAwesomeIcon icon={faMoon} className="text-yellow-500" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="text-gray-500" />
        )}
      </button>
    </div>
  );
};
