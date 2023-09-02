import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import GraphButton from "../components/HomeSubPages/GraphButton";

const HomePage: React.FC<{}> = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated) {
    return (
      <>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <div className="bg-slate-600 text-white text-lg mt-10 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 py-6 rounded-md transition-all duration-200 flex flex-col items-center justify-center">
            CURRENT TRAINING
          </div>
          <div className="text-xl text-white">
            <p>Age: {}</p>
            <p>Height: {} cm</p>
            <p>Weight: {} cm</p>
            <p>Biceps: {} cm</p>
            <p>Chest: {} cm</p>
            <p>Waist: {} cm</p>
            <p>Tigh: {} cm</p>
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
