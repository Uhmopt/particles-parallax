import { Typography } from "@mui/material";
import React from "react";

export default function CustomText({
  className = "",
  children = "",
  shadow = false,
  component = "div",
  align,
  bold = false,
  span = false,
  italic = false,
  font = "",
  onClick= () => {},
  ...props
}) {
  const color = props?.color ?? "";
  return (
    <Typography
      {...props}
      component={span ? "span" : component}
      align={align}
      onClick = {onClick}
      className={`
        ${shadow ? `filter drop-shadow` : ``}
        ${color ? `text-${color}` : ""}
        ${italic ? "italic" : ""}
        ${font ? `font-${font}` : ""}
        ${className}`}
      fontWeight={
        typeof bold === "number" || typeof bold === "string"
          ? bold
          : bold
          ? "bold"
          : ""
      }
    >
      {children}
    </Typography>
  );
}
