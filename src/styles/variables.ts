const spacings = {
  xxs: "0.2rem",
  xs: "0.5rem",
  sm: "1rem",
  md: "2rem",
  lg: "3rem",
} as const;

const fontSizes = {
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
} as const;

const breakpoints = {
  sm: "480px",
};

const headerHeight = {
  sm: "3.5rem",
};

const mainContainerPadding = {
  sm: spacings.sm,
};

const columnWidth = {
  sm: `calc(100vw - ${mainContainerPadding.sm} * 2)`,
  md: "20rem",
};

export {
  spacings,
  fontSizes,
  breakpoints,
  headerHeight,
  mainContainerPadding,
  columnWidth,
};
