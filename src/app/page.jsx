import React from "react";
import HomePage from "@/app/template";

export default function Home() {
  return <HomePage />;
}

export function generateMetadata() {
  return {
    title: "Home",
  };
}
