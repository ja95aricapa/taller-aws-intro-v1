const { validateEvent } = require("./getUserDataController");
const { requestService } = require("./getUserDataService");

const commonHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
};

const handler = async (event) => {
  const validation = validateEvent(event);
  if (!validation.isValid) {
    return {
      ...validation.response,
      headers: commonHeaders(),
    };
  }

  const { token } = JSON.parse(event.body);
  const responseGetUserInfo = await requestService(token);

  if (responseGetUserInfo.status !== 200) {
    return {
      statusCode: responseGetUserInfo.status,
      headers: commonHeaders(),
      body: JSON.stringify({
        error: `Error al obtener la información del usuario. Motivo: ${responseGetUserInfo.data.error_description}`,
      }),
    };
  }

  // add more fields if you need
  return {
    statusCode: 200,
    headers: commonHeaders(),
    body: JSON.stringify({
      rut: responseGetUserInfo.data.RolUnico.RolUnico,
    }),
  };
};

module.exports = { commonHeaders, handler };
