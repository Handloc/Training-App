import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  { path: "/home", element: <HomePage /> },
]);

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
