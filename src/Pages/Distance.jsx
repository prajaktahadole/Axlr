import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Background from "../components/Background";
import SearchIcon from "@mui/icons-material/Search";

const Location = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [distance, setDistance] = useState(0);

  const handleSubmit = () => {
    var x = Number(end) - Number(start);
    setDistance(x);
    setStart("");
    setEnd("");
  };

  return (
    <>
      <div>
        <Background />
        <Box
          sx={{
            position: "absolute",
            width: "800px",
            height: "432px",
            left: "320px",
            top: "155px",
            background: "#FFFFFF",
            borderRadius: "61px",
          }}
        >
          <TextField
            sx={{
              boxSizing: "border-box",
              position: "absolute",
              width: "554px",
              height: "61px",
              left: "120px",
              top: "131px",
              borderRadius: "4px",
            }}
            label="Start point"
            variant="outlined"
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            type="number"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />

          <TextField
            sx={{
              boxSizing: "border-box",
              position: "absolute",
              width: "554px",
              height: "61px",
              left: "120px",
              top: "233px",
              borderRadius: "4px",
            }}
            label="End point"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            type="number"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />

          <Button
            sx={{
              height: "57.23px",
              left: "530px",
              top: "326px",
              background: "#059588",
              position: "absolute",
              width: "143.07px",
              color: "white",
              borderRadius: "5.72271px",
              "&:hover,&:focus": {
                color: "#FFFFFF",
                backgroundColor: "#059588",
              },
            }}
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "36px",
              lineHeight: "41px",
              position: "absolute",
              height: "41px",
              left: "40.97%",
              right: "49.24%",
              top: "672px",
              display: "flex",
              alignItems: "center",
              color: "#6A6A6A",
            }}
          >
            Distance
          </Typography>
          <Typography
            sx={{
              fontSize: "64px",
              lineHeight: "41px",
              display: "flex",
              alignItems: "center",
              color: "#059588",
              position: "absolute",
              height: "41px",
              left: "753px",
              top: "674px",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {distance}
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              height: "41px",
              left: "796px",
              top: "673px",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "36px",
              lineHeight: "41px",
              display: "flex",
              alignItems: "center",
              color: "#059588",
            }}
          >
            Km
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Location;
