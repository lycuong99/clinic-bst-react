const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
};

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
};

export const PATH_PAGE = {
  page404: "/404",
  page500: "/500",
};
