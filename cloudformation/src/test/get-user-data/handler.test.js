// clave-unica/src/test/get-user-data/handler.test.js

const { handler } = require("../../lambdas/get-user-data/handler");
const getUserDataService = require("../../lambdas/get-user-data/getUserDataService");

// Espía la función requestService en lugar de mockear el módulo completo
const requestServiceSpy = jest.spyOn(getUserDataService, "requestService");

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
          RolUnico: {
            RolUnico: "fake_rut",
          },
        },
      })
    );

    const result = await handler(event);
    expect(result.statusCode).toBe(200);
  });
});
