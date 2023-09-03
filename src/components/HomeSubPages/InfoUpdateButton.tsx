import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";

const InfoUpdateButton: React.FC<{ displayName: string }> = ({
  displayName,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(modalActions.showHomePageModal());
        dispatch(modalActions.setCurrentModal(displayName));
      }}
      className="bg-[#F05454] hover:bg-[#30475E] hover:shadow-md text-white rounded-md transition-all duration-200 text-lg mt-4 w-full mx-4 p-2 text-center cursor-pointer"
    >
      {displayName}
    </button>
  );
};

export default InfoUpdateButton;
