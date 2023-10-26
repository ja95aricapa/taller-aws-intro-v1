// Use when is a real request
// const axios = require("axios");

exports.requestService = async (token) => {
  // Real request
  // const bodyRequest = {
  //   refresh_token: token,
  //   //... other necessary fields
  // };
  // try {
  //   const response = await axios.post(
  //     process.env.CLAVE_UNICA_TOKEN_URL,
  //     bodyRequest,
  //     { headers: { "Content-Type": "application/json" } }
  //   );
  //   return { status: response.status, data: response.data };
  // } catch (error) {
  //   return { status: error.response.status, data: error.response.data };
  // }

  // Fake request
  return {
    status: 200,
    data: {
      access_token: "fake_new_token",
    },
  };
};
