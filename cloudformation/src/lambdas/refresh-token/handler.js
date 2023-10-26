const { validateEvent } = require("./refreshTokenController");
const { requestService } = require("./refreshTokenService");

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

  const responseRefreshToken = await requestService(
    JSON.parse(event.body).token
  );

  if (responseRefreshToken.status !== 200) {
    return {
      statusCode: responseRefreshToken.status,
      headers: commonHeaders(),
      body: JSON.stringify({
        error: `Error al refrescar el token. Motivo: ${responseRefreshToken.data.error_description}`,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: commonHeaders(),
    body: JSON.stringify({
      token: responseRefreshToken.data.access_token,
    }),
  };
};

module.exports = { commonHeaders, handler };
