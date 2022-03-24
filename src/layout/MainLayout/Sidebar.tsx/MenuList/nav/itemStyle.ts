import { Theme } from "@mui/material";

const branchWidth = "2px";

export const getChildrenBranchStyle = (theme: Theme) => {
  const branchColor = theme.palette.primary.light;

  return {
    content: "''",
    position: "absolute",
    top: "8px",
    left: "-12px",
    height: "16px",
    width: "12px",
    // bgcolor: "#fafafa",
    borderBottomLeftRadius: "16px",
    borderLeft: `${branchWidth} solid ${branchColor}`,
    borderBottom: `${branchWidth} solid ${branchColor}`,
  };
};

export const getParentBranchStyle = (theme: Theme, height: string) => {
  const branchColor = theme.palette.primary.light;
  return {
    content: "''",
    backgroundColor: branchColor,
    height: height,
    width: branchWidth,
    position: "absolute",
    left: "22px",
    top: 0,
  };
};
