export const signIn = (name, email, pass) => {
  return {
    type: "SignIn",
    name: name,
    email: email,
    pass: pass,
  };
};
