import React from "react";

function Button({
  href,
  children,
  style = " ",
  color = " bg-emerald-800",
  ...rest
}) {

  return (

      <a
        href={href}
        className={`rounded-md   font-semibold  ${color} hover:bg-emerald-900 px-4 py-3 w-36  ${style} `}
        {...rest}
      >
        {children}
      </a>
 
  );
}

export default Button;
