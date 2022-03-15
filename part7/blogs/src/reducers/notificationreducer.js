const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "NEW_MSG":
      return `${action.notification}`;
    case "REMOVE_NOTI":
      return (state = "");
    default:
      return state;
  }
};

export const newMsg = (notification) => {
  return {
    type: "NEW_MSG",
    notification,
  };
};
export const rmvMsg = () => {
  return {
    type: "REMOTE_NOTI",
  };
};

export default notificationReducer;
