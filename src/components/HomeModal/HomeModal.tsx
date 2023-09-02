import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";

const HomeModal: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();
  return (
    <div className="absolute top-60 left-auto right-auto bg-slate-900 w-full sm:w-3/5 lg:w-2/5 xl:w-1/5 h-2/5 z-[4]">
      <i
        className="fa-solid fa-xmark text-4xl text-white absolute right-5 top-5 cursor-pointer hover:text-[#F05454]"
        onClick={() => {
          dispatch(modalActions.hideHomePageModal());
        }}
      />
    </div>
  );
};

export default HomeModal;
