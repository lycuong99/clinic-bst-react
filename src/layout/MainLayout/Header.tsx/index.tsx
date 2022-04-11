import {
  Button,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useTheme } from "@mui/system";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useAuth from "hook/use-auths";

const lngCode = {
  vn: "vi-VN",
  en: "en-US",
};
const languageList = [
  {
    title: "Vietnamese",
    code: "vi",
  },
  {
    title: "English",
    code: "en",
  },
];

interface HeaderProps {
  handleToggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleDrawer }) => {
  const theme = useTheme();

  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation("translation");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { logout } = useAuth();

  const handleChangeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };
  return (
    <>
      {!matchUpMd && (
        <IconButton
          sx={{ borderRadius: "0.75rem" }}
          onClick={handleToggleDrawer}
        >
          <MenuRoundedIcon
            sx={{
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          />
        </IconButton>
      )}
      {/* LOGO - SECTION */}
      <Typography>{t("logo-title")}</Typography>
      <Stack>
        <Button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      </Stack>
      <Button
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        {i18n.language}
      </Button>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
        title="Change Language"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
          {languageList.map((lng) => (
            <ListItemButton
              selected={lng.code === i18n.language}
              key={lng.code}
              onClick={() => {
                handleChangeLanguage(lng.code);
              }}
            >
              <ListItemText>{lng.title}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default Header;
