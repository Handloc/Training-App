import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  { path: "/home", element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
