import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { authActions } from "../../store/auth-slice";
import { NavLink } from "react-router-dom";

const Menu: React.FC<{
  headerLinks: {
    linkName: string;
    linkTo: string;
  }[];
}> = ({ headerLinks }) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, any>>();

  return (
    <div className="bg-[#222831] absolute m-0 top-0 left-0 w-full h-full text-white text-3xl flex flex-col items-center justify-center z-[1]">
      <div className="flex flex-col justify-center items-center">
        {headerLinks.map((link) => {
          return (
            <NavLink
              to={link.linkTo}
              className="pb-16 hover:text-[#F05454] transition-all duration-200"
            >
              {link.linkName.toUpperCase()}
            </NavLink>
          );
        })}
      </div>
      <button
        className="bg-[#F05454] hover:bg-[#30475E] hover:shadow-md text-white mt-10 p-4 px-16 rounded-md transition-all duration-200 text-2xl"
        onClick={() => {
          dispatch(authActions.logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};
//
export default Menu;
