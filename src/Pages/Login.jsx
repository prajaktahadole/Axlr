import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import { Box, Stack } from "@mui/system";
import {
  Button,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../REDUX/Actions/userActions";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, success, error } = loginState;

  const handleLogin = () => {
    const currentUser = {
      user_email: email,
      user_password: password,
    };

    console.log(currentUser);
    if (email === "" && password === "") {
      alert("Please enter the required details!");
    } else if (email === "") {
      alert("Please enter the email!");
    } else if (password === "") {
      alert("Please enter the Password!");
    } else {
      dispatch(loginUser(currentUser));
    }

  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div>
        <Background />

        <Box
          sx={{
            position: "absolute",
            width: "800px",
            height: "561px",
            left: "320px",
            top: "155px",
            background: "#FFFFFF",
            borderzRadius: "61px",
          }}
        >
          <Stack>
            <Typography
              level="h3"
              component="h1"
              sx={{
                position: "absolute",
                top: "101.58px",
                left: "158px",
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "31.4749px",
                lineHeight: "38px",
                color: "#000000",
              }}
            >
              Login
            </Typography>
            <form>
              <Typography
    
                sx={{
                  position: "absolute",
                  left: "159.43px",
                  top: "194.57px",
                  fontFamily: "Helvetica",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  textTransform: "uppercase",
                  color: "#8B90A0",
                }}
              >
                E-Mail ID
              </Typography>
              <TextField
                variant="standard"
                sx={{
                  position: "absolute",
                  width: "483.57px",
                  height: "0px",
                  left: "159.43px",
                  top: "257.52px",
                 
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Typography
                sx={{
                  position: "absolute",
                  left: "159.43px",
                  top: "311.89px",
                  fontFamily: "Helvetica",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  textTransform: "uppercase",
                  color: "#8B90A0",
                }}
              >
                Password
              </Typography>
              <TextField
                variant="standard"
                sx={{
                  position: "absolute",
                  width: "483.57px",
                  height: "0px",
                  left: "159.43px",
                  top: "374.84px",
                }}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link
                href="#"
                sx={{
                  position: "absolute",
                  left: "159.43px",
                  top: "416.28px",
                  fontFamily: "Helvetica",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "17.1681px",
                  lineHeight: "21px",
                  color: "#2196F3",
                  textDecoration: "none",
                }}
              >
                Forgot your password?
              </Link>

              <Button
                sx={{
                  position: "absolute",
                  width: "143.07px",
                  height: "57.23px",
                  left: "500px",
                  top: "474.99px",
                  background: "#059588",
                  borderRadius: "5.72271px",
                  color: "white",
                  "&:hover,&:focus": {
                    color: "#FFFFFF",
                    backgroundColor: "#059588",
                  },
                }}
                onClick={handleLogin}
              >
                LOGIN
              </Button>
            </form>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default Login;
