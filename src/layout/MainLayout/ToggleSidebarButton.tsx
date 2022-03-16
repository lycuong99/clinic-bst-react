import { IconButton, useTheme, Tooltip } from "@mui/material";

import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const closeIcon = (
  <Tooltip title="Close Sidebar" arrow placement="right">
    <ArrowBackIosOutlinedIcon
      sx={{ color: "#fff", fontWeight: "700" }}
      fontSize="small"
    />
  </Tooltip>
);

const openIcon = (
  <Tooltip title="Open Sidebar" arrow placement="right">
    <ArrowForwardIosOutlinedIcon
      sx={{ color: "#fff", fontWeight: "700" }}
      fontSize="small"
    />
  </Tooltip>
);

interface ToggleSidebarButtonProps {
  open: boolean;
  onToggleDrawer: () => void;
  className: string;
}
const ToggleSidebarButton: React.FC<ToggleSidebarButtonProps> = ({
  open,
  onToggleDrawer,
  className,
}) => {
  let toggleIcon = open ? closeIcon : openIcon;
  const theme = useTheme();

  return (
    <IconButton
      sx={{
        bgcolor: "#000",
        padding: "5px",
        position: "absolute",
        borderRadius: "8px",
        right: "-15px",
        top: "15px",
        opacity: 0,
        "&:hover": {
          bgcolor: "#000",
        },
        transition: theme.transitions.create("opacity", {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.standard,
          delay: "0.3s",
        }),
      }}
      onClick={onToggleDrawer}
      className={className}
    >
      {toggleIcon}
    </IconButton>
  );
};

export default ToggleSidebarButton;
