const { validateEvent } = require("../../lambdas/get-token/getTokenController");

describe("getTokenController", () => {
  test("should return isValid as false if code or state is missing", () => {
    const event = {
      body: JSON.stringify({
        // missing code and state
      }),
    };

    const result = validateEvent(event);
    expect(result.isValid).toBe(false);
  });

  test("should return isValid as true if code and state are provided", () => {
    const event = {
      body: JSON.stringify({
        code: "code",
        state: "state",
      }),
    };

    const result = validateEvent(event);
    expect(result.isValid).toBe(true);
  });
});
