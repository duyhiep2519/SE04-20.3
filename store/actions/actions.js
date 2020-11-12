export const signIn = (email, pass) => {
  return {
    type: "SignIn",
    email: email,
    pass: pass,
  };
};
