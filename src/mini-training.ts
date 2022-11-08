function reduce(state = [100], action: Action) {
  switch (action.type) {
    case "CONCAT":
      // payload: number[]
      return state.concat(action.payload);
    case "REMOVE":
      // payload number
      return state.filter((val) => val !== action.payload);
    default:
      return state;
  }
}

type Action = {
  type: "CONCAT" | "REMOVE"
  payload: number[] | number
}