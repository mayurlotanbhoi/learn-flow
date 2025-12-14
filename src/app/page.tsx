'use client';
import { Button, SlidingButton } from "@/components";
import LearningHeatmap from "@/components/learningHeatmap/LearningHeatmap";
import { learningData } from "@/data/userRecord";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (

    <>
      <div className="container  text-amber-50" cz-shortcut-listen="true">

        <div id="RolloutPageContent">

          <LearningHeatmap records={learningData} />

        </div>
      </div>
    </>

  );
}
