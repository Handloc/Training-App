import Header from "../components/Header/Header";
import { RootState } from "../store";
import GraphButton from "../components/HomeSubPages/GraphButton";
import InfoUpdateButton from "../components/HomeSubPages/InfoUpdateButton";
import HomeModal from "../components/HomeModal/HomeModal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";

const HomePage: React.FC<{}> = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const weightModalVisible = useSelector(
    (state: RootState) => state.modal.homeModalVisible
  );
  if (isAuthenticated) {
    return (
      <>
        <div
          className={`${
            weightModalVisible ? "block" : "hidden"
          } backdrop-blur-sm bg-[#0000004b] absolute w-full h-full z-[3]`}
          onClick={() => {
            dispatch(modalActions.hideHomePageModal());
          }}
        />
        <Header />
        <div className="flex flex-col items-center">
          <div className="bg-slate-600 text-white text-lg mt-10 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 py-6 rounded-md transition-all duration-200 flex flex-col items-center justify-center">
            CURRENT TRAINING
          </div>
          <div className="text-xl text-white my-10">
            <p>Age: {}</p>
            <p>Height: {} cm</p>
            <p>Weight: {} cm</p>
            <p>Biceps: {} cm</p>
            <p>Chest: {} cm</p>
            <p>Waist: {} cm</p>
            <p>Tigh: {} cm</p>
          </div>
          {weightModalVisible && <HomeModal />}
          <div className="flex mb-6">
            <InfoUpdateButton displayName="Update weight" />
            <InfoUpdateButton displayName="Update measurements" />
          </div>
          <div className="flex flex-col justify-around items-center">
            <GraphButton
              linkTo="/bmi_graph"
              displayName="BMI graph"
            ></GraphButton>
            <GraphButton
              linkTo="/weight_graph"
              displayName="Weight graph"
            ></GraphButton>
            <GraphButton
              linkTo="/body_graph"
              displayName="Body measurements"
            ></GraphButton>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <p className="flex text-center items-center justify-center m-auto mt-80 w-4/5 text-red-600 text-2xl font-bold">
        ERROR: User is not logged in!
      </p>
    );
  }
};

export default HomePage;
