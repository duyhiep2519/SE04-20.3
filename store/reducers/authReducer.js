const initialState = null;
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SignIn":
      return { username: action.name, email: action.email, pass: action.pass };
    case "SignOut":
      return null;
    default:
      return state;
  }
};
export default authReducer;
