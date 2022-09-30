export const classes = (...classNames: (string | boolean | undefined)[]) => {
  return classNames
    .filter((className) => typeof className === "string")
    .join(" ");
};
