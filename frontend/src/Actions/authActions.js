import * as actions from "./tokenActions";

export const authLogin = (token) => {
  return { type: actions.login, token: token };
};

export const authRegister = (token) => {
  return { type: actions.register, token: token };
};

export const authLogout = () => {
  return { type: actions.logout, token: "" };
};
