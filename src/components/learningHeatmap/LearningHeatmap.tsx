"use client";

import { useMemo } from "react";
import dayjs from "dayjs";

const DAYS = ["Mon", "Wed", "Fri"];

type Record = {
     date: string; // YYYY-MM-DD
     count: number;
};

export default function ContributionHeatmap({
     records,
     year = dayjs().year(),
}: {
     records: Record[];
     year?: number;
}) {
     const dataMap = useMemo(() => {
          const map = new Map<string, number>();
          records?.forEach(r => map.set(r.date, r.count));
          return map;
     }, [records]);

     const startDate = dayjs(`${year}-01-01`).startOf("week");
     const endDate = dayjs(`${year}-12-31`).endOf("week");

     const weeks: dayjs.Dayjs[][] = [];
     let current = startDate;

     while (current.isBefore(endDate)) {
          const week = Array.from({ length: 7 }, (_, i) =>
               current.add(i, "day")
          );
          weeks.push(week);
          current = current.add(1, "week");
     }

     // Month label positions (THIS FIXES YOUR ISSUE)
     const monthLabels = weeks.map((week, i) => {
          const firstDay = week[0];
          if (firstDay.date() <= 7) {
               return firstDay.format("MMM");
          }
          return "";
     });

     return (
          <div className="rounded-2xl bg-neutral-900 p-6 text-white w-full overflow-x-auto">

               {/* MONTH HEADER (FULL WIDTH, ALIGNED) */}
               <div
                    className="grid text-sm text-gray-400 mb-2"
                    style={{ gridTemplateColumns: `40px repeat(${weeks.length}, 16px)` }}
               >
                    <div />
                    {monthLabels.map((m, i) => (
                         <div key={i} className="">
                              {m}
                         </div>
                    ))}
               </div>

               {/* GRID */}
               <div className="flex">
                    {/* DAY LABELS */}
                    <div className="flex flex-col text-xs text-gray-400 mr-2">
                         {["Mon", "", "Wed", "", "Fri", "", ""].map((d, i) => (
                              <div key={i} className="h-[14px] mb-[2px]">
                                   {d}
                              </div>
                         ))}
                    </div>

                    {/* WEEKS */}
                    <div className="flex gap-[2px]">
                         {weeks.map((week, wi) => (
                              <div key={wi} className="flex flex-col gap-[3px]">
                                   {week.map((day, di) => {
                                        const key = day.format("YYYY-MM-DD");
                                        const count = dataMap.get(key) || 0;

                                        return (
                                             <div
                                                  key={di}
                                                  className="w-[14px] h-[14px]  rounded-[3px]"
                                                  style={{
                                                       backgroundColor:
                                                            count === 0
                                                                 ? "#2a2a2a"
                                                                 : count < 3
                                                                      ? "#16a34a"
                                                                      : count < 6
                                                                           ? "#22c55e"
                                                                           : "#4ade80",
                                                  }}
                                             />
                                        );
                                   })}
                              </div>
                         ))}
                    </div>
                    {/* add cart trofy */}
                    <img src={'https://img.freepik.com/free-psd/golden-trophy-with-exploding-confetti-celebration-victory_191095-90338.jpg?semt=ais_hybrid&w=740&q=80'} alt="Trophy" className="w-20 h-20 ml-4 mt-2" />
               </div>

               {/* LEGEND */}
               <div className="flex justify-between mt-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                         Less
                         <span className="w-3 h-3 bg-[#2a2a2a] rounded" />
                         <span className="w-3 h-3 bg-[#16a34a] rounded" />
                         <span className="w-3 h-3 bg-[#22c55e] rounded" />
                         <span className="w-3 h-3 bg-[#4ade80] rounded" />
                         More
                    </div>
                    <div>
                         Current streak: <b>4</b> | Max streak: <b>6</b>
                    </div>
               </div>
          </div>
     );
}
