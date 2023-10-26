exports.validateEvent = (event) => {
  const { code, state } = JSON.parse(event.body);
  if (!code || !state) {
    return {
      isValid: false,
      response: {
        statusCode: 400,
        body: JSON.stringify({
          error: "Faltan valores en el request",
        }),
      },
    };
  }
  return {
    isValid: true,
  };
};
