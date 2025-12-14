import Avatar from "../avatar/Avater";

const Header = () => {
     return (
          <header className=" py-4">
               {/* <h1 className="text-xl font-semibold text-white">
                    Dashboard
               </h1> */}
               <div className=" flex justify-between">
                    <p>   </p>
                    <Avatar />
               </div>

               <hr className="mt-4 border-t border-white/20 transition" />
          </header>
     );
};

export default Header;
