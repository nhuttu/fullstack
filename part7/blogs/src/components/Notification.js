import React from "react";

export const Noti = ({ msg }) => {
  if (!msg) return null;

  if (msg) return <div className="success">{msg}</div>;
};
export const ErrorMsg = ({ msg }) => {
  if (!msg) return null;

  if (msg) return <div className="failure">{msg}</div>;
};
