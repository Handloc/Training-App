import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Menu: React.FC<{
  headerLinks: {
    linkName: string;
    linkTo: string;
  }[];
}> = ({ headerLinks }) => {
  return (
    <div className="bg-[#222831] absolute m-0 top-0 left-0 w-full h-full text-white text-3xl flex flex-col items-center justify-center z-[1]">
      <div className="flex flex-col justify-center items-center">
        {headerLinks.map((link) => {
          return (
            <NavLink
              to={link.linkTo}
              className="py-10 hover:text-[#F05454] transition-all duration-200"
            >
              {link.linkName.toUpperCase()}
            </NavLink>
          );
        })}
      </div>
      <LogoutButton />
    </div>
  );
};
//
export default Menu;
