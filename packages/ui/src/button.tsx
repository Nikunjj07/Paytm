"use client";

import { ReactNode } from "react";



export const Button = () => {
  return (
    <button
      onClick={() => alert(`Hello from your  app!`)}
      className="border-4 h-50 bg-red-200"
    >
      Hello Button
    </button>
  );
};
