// Use when is a real request
// const axios = require("axios");

exports.requestService = async (token) => {
  // Real request
  // try {
  //   const response = await axios.get(process.env.CLAVE_UNICA_USER_INFO_URL, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return { status: response.status, data: response.data };
  // } catch (error) {
  //   return { status: error.response.status, data: error.response.data };
  // }

  // Fake request
  return {
    status: 200,
    data: {
      RolUnico: {
        RolUnico: "fake_rut",
      },
    },
  };
};
