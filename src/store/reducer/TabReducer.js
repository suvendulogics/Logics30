import Calendars from "../../components/Calendars/Calendars";
import Home from "../../components/Home/Home";

const initialState = {
  tabs: [
    //   {
    //   id: 0,
    //   title: "Tab 1",
    //   content: "Tab 1 content",
    // },
    {
      id: 0,
      title: "Welcome",
      content: <div>{<Home />}</div>,
    },
    // {
    //   id: 2,
    //   title: "Tab 3",
    //   content: "Tab 3 content",
    // },














  ],
  addedTab: {},
  activeTab: {},
  currentIndex:{},
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TAB_DATA":
      return { ...state, tabs: state.tabs.concat(action.payload) };
    case "REMOVE_TAB_DATA":
      return { ...state, tabs: action.payload };
    case "ADDED_TAB_DATA":
      return { ...state, addedTab: action.payload };
    case "ACTIVE_TAB_DATA":
      return { ...state, activeTab: action.payload };
      case "CURRENT_INDEX":
      return { ...state, currentIndex: action.payload };


    default:
      return state;
  }
};

export default tabReducer;
