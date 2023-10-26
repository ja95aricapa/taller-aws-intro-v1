// clave-unica/src/test/get-token/handler.test.js

const { handler } = require("../../lambdas/get-token/handler");
const getTokenService = require("../../lambdas/get-token/getTokenService");

// Espía la función requestService en lugar de mockear el módulo completo
const requestServiceSpy = jest.spyOn(getTokenService, "requestService");

describe("handler", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should return 400 if code or state is missing", async () => {
    const event = {
      body: JSON.stringify({
        // missing code and state
      }),
    };

    const result = await handler(event);
    expect(result.statusCode).toBe(400);
  });

  test("should return 200 if the request is successful", async () => {
    const event = {
      body: JSON.stringify({
        code: "code",
        state: "state",
      }),
    };

    // Usa mockImplementationOnce para especificar el comportamiento de la primera llamada
    requestServiceSpy.mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        data: {
          access_token: "fake_token",
        },
      })
    );

    const result = await handler(event);
    expect(result.statusCode).toBe(200);
  });
});
