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
      const green = { ...state.green, checked: action.payload };
      return { ...state, green };
    }
    case "PRE": {
      const green = { ...state.pre, checked: action.payload };
      return { ...state, pre };
    }
    case "2P": {
      const newValue = { ...state["2p"], quantity: Number(action.payload) };
      return { ...state, "2p": newValue };
    }
    case "3P": {
      const newValue = { ...state["3p"], quantity: Number(action.payload) };
      return { ...state, "3p": newValue };
    }
    case "DONATION": {
      const donation = { ...state.donation, value_in_percentage: Number(action.payload) };
      return { ...state, donation };
    }
    default:
      return state;
  }
  throw Error("Unknown action: " + action.type);
}
