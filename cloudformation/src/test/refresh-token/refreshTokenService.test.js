const {
  requestService,
} = require("../../lambdas/refresh-token/refreshTokenService");
const mockAxios = require("axios");

jest.mock("axios");

describe("refreshTokenService", () => {
  beforeEach(() => {
    mockAxios.post.mockClear();
  });

  test("should return mock response for development", async () => {
    const token = "token";

    const result = await requestService(token);
    expect(result.status).toBe(200);
    expect(result.data.access_token).toBe("fake_new_token");
  });
});
