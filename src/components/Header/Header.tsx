import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Header: React.FC<{}> = () => {
  const dispatch = useDispatch<any>();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="flex items-center justify-center bg-zinc-700 p-3">
      <p className="text-amber-400 text-3xl font-bold">Training App</p>
      <p
        onClick={logoutHandler}
        className="absolute right-5 text-amber-400 font-bold cursor-pointer hover:text-fuchsia-500 transition-all"
      >
        Logout
      </p>
    </div>
  );
};

export default Header;
