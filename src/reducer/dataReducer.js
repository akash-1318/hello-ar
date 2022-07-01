const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userData: [...state.userData, action.payload],
        modal: false,
      };
    case "SET_MODAL":
      return { ...state, modal: action.payload };
    case "ADD_LOCAL_DATA":
      return { ...state, userData: action.payload };
    case "DELETE_USER":
        return {...state, userData : [...state.userData.filter((data,index) => index !== action.payload)]} 
  }
};

export { dataReducer };
