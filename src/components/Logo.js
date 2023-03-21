import { Typography } from "@mui/material";
import { APP_NAME } from "lib/global";
import React from "react";
import CustomImage from "./CustomImage";
import image from "assets/img/logo.png";
import CustomLink from "./CustomLink";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export default React.memo(function Logo({
  variant = "image",
  size = "medium",
  className = "",
  shadow = false,
  onClick = () => {},
}) {
  const pathname = useLocation().pathname;
  const propsLink = useMemo(
    () =>
      Boolean(pathname?.includes("/")) ? { onClick: onClick } : { to: "/" },
    //eslint-disable-next-line
    [pathname]
  );

  return (
    <CustomLink
      className={`place-self-center filter ${shadow ? "drop-shadow-logo" : ""}`}
      {...propsLink}
    >
      <div className={`${className}`}>
        {variant === "image" ? (
          <CustomImage
            src={image}
            className={`${
              size === "tiny"
                ? "h-8"
                : size === "small"
                ? "h-24"
                : size === "medium"
                ? "h-36"
                : (size = "large" ? "h-48" : "h-48")
            }`}
          />
        ) : variant === "text" ? (
          <Typography variant="h6" component="div">
            {APP_NAME}
          </Typography>
        ) : (
          <Typography variant="h6" component="div">
            {APP_NAME}
          </Typography>
        )}
      </div>
    </CustomLink>
  );
});
