
"use client";

import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ open, setOpen, header, footer, children }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; header?: React.ReactNode; footer?: React.ReactNode; children: React.ReactNode; }) => {

     // Close on ESC key
     useEffect(() => {
          const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
          window.addEventListener("keydown", handleEsc);
          return () => window.removeEventListener("keydown", handleEsc);
     }, [setOpen]);

     if (!open) return null;

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

               {/* Background Overlay */}
               <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
               />

               {/* Modal Box */}
               <div className="
        relative w-10/14  bg-[#121212] text-white rounded-xl p-6
        shadow-xl border border-gray-700 animate-fadeIn
      ">


                    {/* Modal Header */}
                    {header && <div className="text-xl flex justify-between items-center font-semibold mb-4">
                         {header}
                         <div className=" cursor-pointer group outline-none hover:rotate-90 duration-300 primary-dark" onClick={() => setOpen(false)}
                         ><RxCross1 /></div>
                    </div>}

                    {/* Modal Body */}
                    <div className="text-gray-300">{children}</div>

                    {/* Footer */}
                    {footer && <div className="mt-6">{footer}</div>}
               </div>

               {/* Animation */}
               <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.35s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
          </div>
     );
};

export default Modal;
