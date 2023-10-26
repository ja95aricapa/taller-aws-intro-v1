// Use when is a real request
// const axios = require("axios");

exports.requestService = async (bodyRequest) => {
  // Real request
  // try {
  //   for (let [key, value] of Object.entries(bodyRequest)) {
  //     console.log(`${key}: ${value}`);
  //   }
  //   console.log("este es el env var: " + process.env.CLAVE_UNICA_TOKEN_URL);
  //   const response = await axios.post(
  //     process.env.CLAVE_UNICA_TOKEN_URL,
  //     bodyRequest
  //   );
  //   return { status: response.status, data: response.data };
  // } catch (error) {
  //   return { status: error.response.status, data: error.response.data };
  // }

  // Fake request
  return {
    status: 200,
    data: {
      access_token: "fake_token",
    },
  };
};
