import Card from "./Card";
import "./Card.css";

const DARK_COLORS = [
     { badge: "bg-emerald-500", strip: "bg-emerald-400/90", text: "text-emerald-950" },
     { badge: "bg-indigo-500", strip: "bg-indigo-400/90", text: "text-indigo-950" },
     { badge: "bg-cyan-500", strip: "bg-cyan-400/90", text: "text-cyan-950" },
     { badge: "bg-violet-500", strip: "bg-violet-400/90", text: "text-violet-950" },
     { badge: "bg-rose-500", strip: "bg-rose-400/90", text: "text-rose-950" },
];

type RankerCardProps = {
     rank: number;
     name: string;
     title: string;
     bio: string;
     avatar: string;
     className?: string;
};

const RankerCard = ({
     rank,
     name,
     title,
     bio,
     avatar,
     className = "",
}: RankerCardProps) => {
     // stable color per rank
     const color = DARK_COLORS[(rank - 1) % DARK_COLORS.length];

     return (

          <div className="relative">
               {/* RANK BADGE */}
               <div
                    className={`absolute -top-2 -left-2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow text-white ${color.badge}`}
               >
                    {rank}
               </div>

               {/* CARD */}
               <div className="relative w-[340px] bg-neutral-900 rounded shadow-xl overflow-hidden border border-white/10">
                    <div className="relative z-10 flex items-center bg-white">
                         {/* IMAGE */}
                         <img
                              src={avatar}
                              alt={name}
                              className="w-[90px] h-[90px] object-cover"
                         />

                         {/* INFO STRIP */}
                         <div className={`flex-1 px-4 py-3 rounded-l-md ${color.strip}`}>
                              <h3 className={`text-sm font-semibold leading-tight ${color.text}`}>
                                   {name}
                              </h3>

                              <p className={`text-xs italic ${color.text}/90`}>
                                   {title}
                              </p>

                              <small className="block text-xs text-black/70 mt-1">
                                   {bio}
                              </small>
                         </div>
                    </div>
               </div>
          </div>

     );
};

export default RankerCard;
