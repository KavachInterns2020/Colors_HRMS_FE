import { login, logout, register } from "../Actions/tokenActions";

let initState = {
  token: "",
};

const tokenReducer = (state = initState, action) => {
  switch (action.type) {
    case login:
      return { token: action.token };
    case register:
      return { token: action.token };
    case logout:
      return { token: action.token };
    default:
      return state;
  }
};

export default tokenReducer;
