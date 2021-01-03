export const signIn = (name, email, pass) => {
  return {
    type: "SignIn",
    name: name,
    email: email,
    pass: pass,
  };
};
export const signOut = () => {
  return { type: "SignOut" };
};
