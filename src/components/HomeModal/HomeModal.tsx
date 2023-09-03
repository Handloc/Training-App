import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import { RootState } from "../../store";
import InfoUpdateButton from "../HomeSubPages/InfoUpdateButton";
import ModalFormInput from "./ModalFormInput";

const HomeModal: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();
  const currentModal = useSelector(
    (state: RootState) => state.modal.currentModal
  );

  return (
    <div className="absolute top-60 left-auto right-auto bg-[#222831] w-full sm:w-3/5 lg:w-2/5 xl:w-1/5 h-2/5 z-[4] shadow-lg rounded-md">
      <i
        className="fa-solid fa-xmark text-4xl text-white absolute right-5 top-5 cursor-pointer hover:text-[#F05454]"
        onClick={() => {
          dispatch(modalActions.hideHomePageModal());
        }}
      />

      <div className="flex flex-col h-full w-full justify-center items-center">
        {currentModal === "Update weight" && (
          <ModalFormInput placeholder="New weight (kg)" />
        )}
        {currentModal === "Update measurements" && (
          <>
            <ModalFormInput placeholder="Biceps (cm)" />
            <ModalFormInput placeholder="Chest (cm)" />
            <ModalFormInput placeholder="Waist (cm)" />
            <ModalFormInput placeholder="Tigh (cm)" />
          </>
        )}
        <button className="bg-[#F05454] hover:bg-[#30475E] hover:shadow-md text-white rounded-md transition-all duration-200 text-lg mt-8  w-1/2 mx-4 p-2 text-center cursor-pointer ">
          Update
        </button>
      </div>
    </div>
  );
};

export default HomeModal;
