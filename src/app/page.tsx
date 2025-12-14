'use client';
import { Button, Card, RankerCard, SearchBar, SlidingButton } from "@/components";
import LearningHeatmap from "@/components/learningHeatmap/LearningHeatmap";
import { DUMMY_RANKERS, learningData } from "@/data/userRecord";
import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  return (

    <>
      <div className="container  text-amber-50" cz-shortcut-listen="true">

        <div id="RolloutPageContent">

          <LearningHeatmap records={learningData} />
          <Card className={`p-4 my-3 `}>
            <h1>Top Rankers</h1>
            <div className="flex flex-wrap mt-3  justify-between">
              {DUMMY_RANKERS.map((user, index) => (
                <RankerCard
                  key={user.id}
                  rank={index + 1}
                  name={user.name}
                  title={user.title}
                  bio={user.bio}
                  avatar={user.avatar}
                />
              ))}
            </div>
          </Card>

          <SearchBar setSearchTerm={setQuery} searchTerm={debouncedQuery} />

        </div>
      </div>
    </>

  );
}
