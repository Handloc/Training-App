import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const HomePage: React.FC<{}> = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated) {
    return (
      <>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <div className="bg-slate-600 text-white text-lg mt-10 w-4/5 py-10 rounded-md transition-all duration-200 flex flex-col items-center justify-center">
            CURRENT TRAINING
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
