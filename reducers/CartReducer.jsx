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
      const pre = { ...state.pre, checked: action.payload };
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
    case "INFO": {
      const personal_errors = action.payload.personal_errors;
      const personal_info = action.payload.personalData;
      return { ...state, personal_info, personal_errors };
    }
    case "PAYMENT": {
      const payment_errors = action.payload.payment_errors;
      const payment_info = action.payload.payment_info;
      return { ...state, payment_errors, payment_info };
    }
    case "CAMPING": {
      const camping = { ...state.camping, site: action.payload };
      return { ...state, camping };
    }
    case "RESERVATION": {
      const reservation = { ...state.reservation, message: action.payload.message, id: action.payload.id, timeout: action.payload.timeout, time: action.payload.time };
      return { ...state, reservation };
    }
    case "CC": {
      const reservation = { ...state.reservation, cc_ending: action.payload };
      return { ...state, reservation };
    }
    case "ORDER": {
      const order = { ...state.order, status: action.payload };
      return { ...state, order };
    }
    default:
      return state;
  }
  throw Error("Unknown action: " + action.type);
}
