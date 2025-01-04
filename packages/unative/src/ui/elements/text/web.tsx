import React from "react";

export type TextProps = React.HtmlHTMLAttributes<HTMLDivElement>;
export const Text = (props: TextProps) => {
  return <div {...props} />;
};
