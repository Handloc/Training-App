import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([{ path: "/", element: <AuthPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
