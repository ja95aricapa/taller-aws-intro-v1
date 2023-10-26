// clave-unica/src/test/refresh-token/handler.test.js

const { handler } = require("../../lambdas/refresh-token/handler");
const refreshTokenService = require("../../lambdas/refresh-token/refreshTokenService");

// Espía la función requestService en lugar de mockear el módulo completo
const requestServiceSpy = jest.spyOn(refreshTokenService, "requestService");

describe("handler", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should return 400 if token is missing", async () => {
    const event = {
      body: JSON.stringify({
        // missing token
      }),
    };

    const result = await handler(event);
    expect(result.statusCode).toBe(400);
  });

  test("should return 200 if the request is successful", async () => {
    const event = {
      body: JSON.stringify({
        token: "token",
      }),
    };

    // Usa mockImplementationOnce para especificar el comportamiento de la primera llamada
    requestServiceSpy.mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        data: {
          access_token: "fake_new_token",
        },
      })
    );

    const result = await handler(event);
    expect(result.statusCode).toBe(200);
  });
});
