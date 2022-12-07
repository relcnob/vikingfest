export function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      if (state.find((item) => item.id === action.payload.id)) {
        return state.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          const copy = { ...item };
          copy.amount = copy.amount + 1;
          return copy;
        });
      } else {
        return state.concat({ ...action.payload, amount: 1 });
      }
    }
    case "REMOVE": {
      if (action.payload.amount > 1) {
        return state.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          const copy = { ...item };
          copy.amount = copy.amount - 1;
          return copy;
        });
      }
      if (action.payload.amount <= 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
    }
    case "CLEAR": {
      return [];
    }
    default:
      return state;
  }
  throw Error("Unknown action: " + action.type);
}
