import React from "react";
import { BrowserRouter as  Route, Routes, BrowserRouter } from "react-router-dom";
// import { useSelector } from "react-redux";
// import PrivateRoute from "./PrivateRoutes";
// import PublicRoute from "./PublicRoutes";
// import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
// import Search from "../components/Search/Search";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import Account from "../components/Account/Account";
// import ChangePassword from "../components/ChangePassword/ChangePassword";

const routes = () => {
//   const path = window.location.pathname;
//   const isAndroid = useSelector((state) => state.isAndroid);
  return (
    <BrowserRouter>
    <Routes>
      {/* <Header /> */}
      {/* <div> */}
        {/* <Routes> */}
          {/* <PublicRoute path="/" exact component={Landing} /> */}
          {/* <PublicRoute path="/home" exact component={Home} /> */}
          <Route path="/" exact component={SignIn} />
          {/* <PublicRoute path="/search" exact component={Search} /> */}

          {/* <PrivateRoute
            path="/changePassword"
            exact
            component={ChangePassword}
          /> */}
        {/* </Routes> */}
      {/* </div> */}
       {/* <Footer /> */}
    </Routes>
    </BrowserRouter>
  );
};
export default routes;
