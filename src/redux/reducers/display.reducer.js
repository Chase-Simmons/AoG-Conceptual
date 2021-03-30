const displayReducer = (state = 'mainMenu', action) => {
  switch (action.type) {
    case 'SET_DISPLAY':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default displayReducer;
