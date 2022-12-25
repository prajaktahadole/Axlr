import { Box, Button, Grid, Typography } from "@mui/material";
import { height } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { getAllProducts } from "../REDUX/Actions/productActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Home = () => {
  const dispatch = useDispatch();
  const ReducerState = useSelector((state) => state.productsReducer);
  const { products, loading, error } = ReducerState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(products);

  return (
    <>
      <div>
        <Navbar />
        <Background />
        <Box
          sx={{
            position: "absolute",
            left: "411px",
            top: "188px",
            background: "white",
            height: "1280px",
            width: "72%",
          }}
        >
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "2px",
            }}
          >
            {products.map((elem, index) => {
              return (
                <Box
                  key={index}
                  sx={{ border: "2px solid silver", height: "310px" }}
                >
                  <FavoriteBorderIcon
                    fontSize="large"
                    sx={{
                      float: "right",
                      color: "grey",
                    }}
                  />

                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWBxzPCuxywtpk8-IMML32Cf7n6-x6VwKiFGSO4s2BB_6azW4FkQyQDL7LvaTcJhob_c&usqp=CAU"
                    alt="image.jpg"
                    style={{
                      width: "150.63px",
                      height: "100px",
                      marginTop:"40px",
                      marginLeft:"20px",
                      borderRadius:"10px"
                    }}
                  />

                  <p
                    style={{
                      marginTop: "10px",
                      marginLeft: "20px",
                      fontFamily: "Helvetica",
                      textTransform: "uppercase",
                      color: "#059588",
                      fontSize: "12px",
                    }}
                  >
                    {elem.cat_slug}
                  </p>

                  <h4
                    style={{
                      marginTop: "10px",
                      marginLeft: "20px",
                      fontFamily: "Helvetica",
                      textTransform: "uppercase",
                      color: "black",
                    }}
                  >
                    {elem.cat_name}
                  </h4>

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between", padding:"20px" }}
                  >
                    <Box>
                      <Box
                        sx={{
                          height: "60px",
                          border: "1px solid gray",
                          width: "100px",
                        }}
                      >
                        <p
                          style={{
                            marginLeft: "20px",
                            fontFamily: "Helvetica",
                            textTransform: "uppercase",
                            color: "black",
                            fontSize: "12px",
                          }}
                        >
                          500 ML
                        </p>
                        <p
                          style={{
                            marginLeft: "20px",
                            fontFamily: "Helvetica",
                            textTransform: "uppercase",
                            color: "black",
                            fontSize: "12px",
                          }}
                        >
                          250 ML
                        </p>
                      </Box>
                    </Box>
                    <Box>
                      <Button
                        sx={{
                          background: "#059588",
                          color: "white",
                          float: "right",
                          marginTop: "20px",
                        }}
                      >
                        <ShoppingCartCheckoutIcon />
                        Add
                      </Button>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Home;
