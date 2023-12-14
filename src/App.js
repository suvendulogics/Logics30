import React from "react";
import SignIn from "./components/SignIn/SignIn";
import { Provider } from "react-redux";
import store from "./store/store/store";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import NotFound from "./components/Not Found/NotFound";
import SetYourPwd from "./components/ChangePassword/SetYourPwd";
import Settings from "./components/Basic/Settings";
import HelpDesk from "./components/Basic/HelpDesk";
import SignOut from "./components/Basic/SignOut";
import Calendars from './components/Calendars/Calendars';
import Meetings from './components/Meetings/Meetings';
import Welcome from "./components/Basic/Welcome";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/calendars" element={<Calendars />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/home" element={<Welcome />} />
            <Route path="/helpdesk" element={<HelpDesk />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/changepwd" element={<SetYourPwd />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signout" element={<SignOut/>}/>
          </Routes>
          {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#8f8585",
            fontSize: "12px",
          }}
        >
          Version 2.0
        </div> */}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
