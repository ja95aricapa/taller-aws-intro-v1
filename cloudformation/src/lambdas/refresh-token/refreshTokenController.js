exports.validateEvent = (event) => {
  const { token } = JSON.parse(event.body);
  if (!token) {
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
