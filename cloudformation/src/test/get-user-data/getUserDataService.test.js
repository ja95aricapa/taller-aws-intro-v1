const {
  requestService,
} = require("../../lambdas/get-user-data/getUserDataService");
const mockAxios = require("axios");

jest.mock("axios");

describe("getUserDataService", () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  test("should return mock response for development", async () => {
    const token = "token";

    const result = await requestService(token);
    expect(result.status).toBe(200);
    expect(result.data.RolUnico.RolUnico).toBe("fake_rut");
  });
});
