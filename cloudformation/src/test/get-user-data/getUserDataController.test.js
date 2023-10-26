const {
  validateEvent,
} = require("../../lambdas/get-user-data/getUserDataController");

describe("getUserDataController", () => {
  test("should return isValid as false if token is missing", () => {
    const event = {
      body: JSON.stringify({
        // missing token
      }),
    };

    const result = validateEvent(event);
    expect(result.isValid).toBe(false);
  });

  test("should return isValid as true if token is provided", () => {
    const event = {
      body: JSON.stringify({
        token: "token",
      }),
    };

    const result = validateEvent(event);
    expect(result.isValid).toBe(true);
  });
});
