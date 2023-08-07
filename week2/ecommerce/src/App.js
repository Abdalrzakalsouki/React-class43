import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ProdcutDetails from "./ProdcutDetails";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <ProdcutDetails />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}>
        <Home />
      </RouterProvider>
    </div>
  );
};

export default App;
