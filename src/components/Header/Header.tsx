import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header: React.FC<{}> = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  return (
    <>
      <div className="flex items-center justify-center bg-zinc-700 p-3 pb-0">
        <p className="text-amber-400 text-3xl font-bold">Training App</p>
        <p
          onClick={logoutHandler}
          className="absolute right-5 text-amber-400 font-bold cursor-pointer hover:text-fuchsia-500 transition-all"
        >
          Logout
        </p>
      </div>
      <div className="flex items-center justify-center bg-zinc-700">
        <p className="text-amber-400 text-md font-bold">{currentUser}</p>
      </div>
    </>
  );
};

export default Header;
