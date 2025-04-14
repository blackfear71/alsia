import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
