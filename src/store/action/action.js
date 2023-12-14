
export const setUserData = (userData) => ({
    type: 'SET_USER_DATA',
    payload: userData,
  });
  
  export const setLogoImage = (logoImageUrl) => ({
    type: 'SET_LOGO_IMAGE',
    payload: logoImageUrl,
  });
  
  export const setGoogleButtonData = (googleButtonData) => ({
    type: 'SET_GOOGLE_BUTTON_DATA',
    payload: googleButtonData,
  });
  export const setTabData = (tabData) => ({
    type: 'SET_TAB_DATA',
    payload: tabData,
  });
  export const removeTabData = (removetabData) => ({
    type: 'REMOVE_TAB_DATA',
    payload: removetabData,
  });
  export const activeTabData = (activetabData) => ({
    type: 'ACTIVE_TAB_DATA',
    payload: activetabData,
  });
  export const addedTabData = (addedtabData) => ({
    type: 'ADDED_TAB_DATA',
    payload: addedtabData,
  });
  export const currentIndex = (currentIndex) => ({
    type: 'CURRENT_INDEX',
    payload: currentIndex,
  });