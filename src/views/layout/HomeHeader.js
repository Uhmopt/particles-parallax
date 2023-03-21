import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomLink from "components/CustomLink";
import Logo from "components/Logo";
import CustomText from "components/typography/CustomText";
import * as React from "react";

const pages = ["Home", "Features", "About us", "Contact"];

export function HomeHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="bg-bgColor absolute top-0 left-0 shadow-none"
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between" disableGutters>
          <Logo className="hidden sm:flex h-4" variant="image" size="tiny" />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  className="m-0"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <CustomText className="m-0">{page}</CustomText>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <CustomLink className="p-2 text-primary block" key={page}>
                {page}
              </CustomLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
