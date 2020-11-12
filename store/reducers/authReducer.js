const initialState = null;
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SignIn":
      return { email: action.email, pass: action.pass };
    default:
      return state;
  }
};
export default authReducer;
