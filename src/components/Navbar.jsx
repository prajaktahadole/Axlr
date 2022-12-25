import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../REDUX/Actions/userActions";
// import AdbIcon from '@mui/icons-material/Adb';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const currentUser = userState.currentUser;

  const handleLocation = () => {
    navigate("/distance")
  };

  const handleCategories = () => {
    navigate("/")
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    // window.location.reload();
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      width="100%"
      height="80px"
      sx={{ background: "white" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              position: "absolute",
              left: "123px",
              top: "22px",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24px",
              color: "black",
              textDecoration: "none",
            }}
          >
            AxlrData
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Button
              sx={{
                position: "absolute",
                left: "411px",
                top: "22px",
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "14px",
                color: "#059588",
              }}
              onClick={handleCategories}
            >
              Categories
            </Button>

            <Button
              sx={{
                position: "absolute",
                left: "523px",
                top: "22px",
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "14px",
                color: "black",
              }}
              onClick={handleLocation}
            >
              Location
            </Button>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

          <Box>
            {currentUser ? (
              <Button
                onClick={handleLogout}
                sx={{
                  position: "absolute",
                  left: "1174px",
                  top: "22px",
                  fontFamily: "Helvetica",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "14px",
                  color: "black"
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={navigate("/login")}
                sx={{
                  position: "absolute",
                  left: "1174px",
                  top: "22px",
                  fontFamily: "Helvetica",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "14px",
                  color: "black"
                }}
              >
                LogIn
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
