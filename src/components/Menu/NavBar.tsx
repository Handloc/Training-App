import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };
  return (
    <>
      <button
        className="bg-[#F05454] hover:bg-[#30475E] hover:shadow-md text-white font-bold  rounded-3xl transition-all"
        onClick={logoutHandler}
      >
        <p className="  font-bold cursor-pointe transition-al">Logout</p>
      </button>
    </>
  );
};
//
export default NavBar;
