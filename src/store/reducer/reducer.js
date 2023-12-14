
const initialState = {
    userData: null,
    logoImageUrl: null,
    googleButtonData: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return { ...state, userData: action.payload };
      case 'SET_LOGO_IMAGE':
        return { ...state, logoImageUrl: action.payload };
      case 'SET_GOOGLE_BUTTON_DATA':
        return { ...state, googleButtonData: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  