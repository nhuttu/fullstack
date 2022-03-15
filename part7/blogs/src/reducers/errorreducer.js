const errorReducer = (state = "", action) => {
  switch (action.type) {
    case "ERR_MSG":
      return `${action.notification}`;
    case "REMOVE_NOTI":
      return (state = "");
    default:
      return state;
  }
};

export const errMsg = (notification) => {
  return {
    type: "ERR_MSG",
    notification,
  };
};
export const remvMsg = () => {
  return {
    type: "REMOTE_NOTI",
  };
};

export default errorReducer;
