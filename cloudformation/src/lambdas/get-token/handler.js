const { validateEvent } = require("./getTokenController");
const { requestService } = require("./getTokenService");

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

  const { code, state } = JSON.parse(event.body);
  const bodyRequest = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: encodeURI(process.env.REDIRECT_URI),
    grant_type: "authorization_code",
    code: code,
    state: state,
  };

  const responseGetToken = await requestService(bodyRequest);

  if (responseGetToken.status !== 200) {
    return {
      statusCode: responseGetToken.status,
      headers: commonHeaders(),
      body: JSON.stringify({
        error: `Error al obtener el token. Motivo: ${responseGetToken.data.error_description}`,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: commonHeaders(),
    body: JSON.stringify({
      token: responseGetToken.data.access_token,
    }),
  };
};

module.exports = { commonHeaders, handler };
