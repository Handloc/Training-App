import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import Menu from "../Menu/Menu";

const Header: React.FC<{}> = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const [menuVisible, setMenuVisible] = useState(false);
  const headerLinks = [
    { linkName: "my profile", linkTo: "/profile" },
    { linkName: "my workouts", linkTo: "/workout" },
    { linkName: "exercises", linkTo: "/exercises" },
    { linkName: "trainings", linkTo: "/trainings" },
    { linkName: "nutrition", linkTo: "/nutrition" },
    { linkName: "encyclopedia", linkTo: "/encyclopedia" },
  ];

  return (
    <>
      <div className="p-3 pb-0 cursor-default">
        <div
          className={`${
            isAuthenticated ? "justify-left" : "justify-center"
          } flex items-center md:justify-center`}
        >
          <i className="fa-solid fa-dumbbell text-5xl text-[#F05454] pr-4" />
          <p className="text-white text-4xl font-bold ">Training App</p>
        </div>
        {isAuthenticated && (
          <>
            {" "}
            <button
              className="absolute right-5 top-5 z-[2]"
              onClick={() => {
                setMenuVisible(!menuVisible);
              }}
            >
              {menuVisible ? (
                <i className="fa-solid fa-xmark text-white text-[2.5rem] hover:text-[#F05454] transition-all duration-200 active:rotate-45" />
              ) : (
                <i className="fa-solid fa-bars text-white text-4xl hover:text-[#F05454] transition-all duration-200 active:rotate-45 " />
              )}
            </button>
            {menuVisible && <Menu headerLinks={headerLinks} />}
          </>
        )}
      </div>
    </>
  );
};
//
export default Header;
