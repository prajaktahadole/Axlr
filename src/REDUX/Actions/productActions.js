import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  try {
    const config = {
      headers: {
        SESSIONID: "45",
      },
    };

    const response = await axios.get(
      "https://api.earthsfresh.in/api/categories/getCategorylist", config
    );
    console.log(response.data.result);
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data.result.categories });
  } catch (err) {
    dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    console.error(err);
  }
};
