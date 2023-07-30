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
        <button
          className="bg-amber-400 hover:bg-fuchsia-600 text-black font-bold  rounded-3xl transition-all absolute right-14 mt-4 p-1 pl-5 pr-5"
          onClick={logoutHandler}
        >
          <p className="  font-bold cursor-pointe transition-al">Logout</p>
        </button>
      </div>
      <div className="flex items-center justify-center bg-zinc-700">
        <p className="text-amber-400 text-md font-bold">{currentUser}</p>
      </div>
    </>
  );
};
//
export default Header;
