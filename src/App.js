import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import CardInfo from "./components/CardInfo";
import Header from "./components/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Dashboard />
      ),
    },
    {
      path: "/card-info",
      element: <CardInfo />
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}>
        <Dashboard />
      </RouterProvider>
    </div>
  );
}

export default App;
