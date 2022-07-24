import { GenericContainer, StartedTestContainer } from "testcontainers";
import axios from "axios";

export const container = new GenericContainer(
  "nginxdemos/hello"
).withExposedPorts(80);

export let runningContainer: StartedTestContainer;

describe("unit tests using a hello-world container", () => {
  beforeAll(async () => {
    runningContainer = await container.start();
  }, 30000);  // Long timeout as container startup is not immediate

  afterAll(async () => {
    await runningContainer.stop();
  });

  test("should be able to get 'Hello World' page from the container", async () => {
    // Find the host port which testcontainers has allocated to the exposed port inside the container
    const containerPort = runningContainer.getMappedPort(80);  
    const result = await axios.get(`http://localhost:${containerPort}`);

    expect(result.data).toContain("Hello World");
  });
});
