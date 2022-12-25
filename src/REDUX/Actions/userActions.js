import axios from "axios";

//login user

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const config = {
      headers: {
        SESSIONID: "45",
      },
    };

    const response = await axios.post(
      "https://api.earthsfresh.in/api/users/userLogin",
      user,
      config
    );

    var arr = [];
    arr.push(response.data.result);
    console.log(response);
    console.log(arr);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data.result });
    if (response.data.result.statusCode === 200) {
      localStorage.setItem("currentUser", JSON.stringify(response.data.result.user_details));
      alert(response.data.result.message);
      window.location.href = "/";
    } else {
      alert(response.data.result.message);
    }
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

// Logout user

export const logoutUser = () => (dispatch) => {
  dispatch({ type: "LOGOUT_SUCCESS" });

  localStorage.removeItem("currentUser");

  window.location.href = "/login"
};
