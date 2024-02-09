"use client";

import Website from "./website/page";
import Brain from "./brain";
import { useContext } from "react";
import ModeContext from "@/utils/context";

export default function Home() {
  const mode = useContext(ModeContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {mode === "world" ? <Website /> : <Brain />}
    </main>
  );
}
