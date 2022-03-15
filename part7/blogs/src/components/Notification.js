import React from "react";

export const Noti = ({ msg }) => {
  if (!msg) return null;

  if (msg) return <div className="notification">{msg}</div>;
};
