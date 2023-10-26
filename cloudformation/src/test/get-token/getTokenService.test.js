const { requestService } = require("../../lambdas/get-token/getTokenService");
const mockAxios = require("axios");

jest.mock("axios");

describe("getTokenService", () => {
  beforeEach(() => {
    mockAxios.post.mockClear();
  });

  test("should return mock response for development", async () => {
    const bodyRequest = {
      // ... some request body
    };

    const result = await requestService(bodyRequest);
    expect(result.status).toBe(200);
    expect(result.data.access_token).toBe("fake_token");
  });
});
