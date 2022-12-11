export function reducer(state, action) {
  switch (action.type) {
    case "REGULAR": {
      const regular = { ...state.regular, quantity: Number(action.payload) };
      return { ...state, regular };
    }
    case "VIP": {
      const vip = { ...state.vip, quantity: Number(action.payload) };
      return { ...state, vip };
    }
    case "GREEN": {
    }
    case "2P": {
      const newValue = { ...state["2p"], quantity: Number(action.payload) };
      return { ...state, "2p": newValue };
    }
    case "3P": {
      const newValue = { ...state["3p"], quantity: Number(action.payload) };
      return { ...state, "3p": newValue };
    }
    default:
      return state;
  }
  throw Error("Unknown action: " + action.type);
}
