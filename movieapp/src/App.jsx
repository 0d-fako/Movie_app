import "./App.css";
import Hello from "./components/Hello";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
