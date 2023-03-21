import React from "react";
import { Link } from "react-router-dom";
import CustomText from "./typography/CustomText";

export default function CustomLink({
  to = "#",
  target = "",
  children = "",
  variant = "text",
  color = "default",
  className = "",
  fullWidth = false,
  textVariant,
  onClick = () => {},
  ...props
}) {
  const isInternal = !String(to).includes("http");
  const isText = typeof children === "string";

  const textClass = `text-${color} ${
    isText ? "border-b border-transparent hover:border-primary" : ""
  } hover:text-${
    color === "primary" ? "secondary" : color === "secondary" ? "primary" : ""
  }`;
  const bgClass = `p-2 hover:text-white hover:bg-${color}`;
  const classes = `transition duration-300 ${fullWidth ? "w-full" : ""} ${
    variant === "text" ? textClass : variant === "contained" ? bgClass : ""
  }`;

  const mainRender = isText ? (
    <CustomText color="inherit" variant={textVariant}>
      {children}
    </CustomText>
  ) : (
    children
  );

  return isInternal ? (
    <Link
      to={to}
      target={target}
      className={`${classes} ${className}`}
      onClick={onClick}
    >
      {mainRender}
    </Link>
  ) : (
    <a
      href={to}
      target={target}
      rel={target === "_blank" ? "noreferrer noopener" : ""}
      className={`${classes} ${className}`}
    >
      {mainRender}
    </a>
  );
}
