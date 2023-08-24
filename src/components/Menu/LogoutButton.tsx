import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, any>>();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <button
      className="bg-[#F05454] hover:bg-[#30475E] hover:shadow-md text-white mt-10 p-4 px-16 rounded-md transition-all duration-200 text-2xl"
      onClick={() => {
        dispatch(logoutHandler);
        navigate("/");
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
