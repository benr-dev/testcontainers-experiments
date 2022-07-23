import { GenericContainer, StartedTestContainer } from "testcontainers";
import axios from "axios";

export const container = new GenericContainer(
  "nginxdemos/hello"
).withExposedPorts(80);

export let runningContainer: StartedTestContainer;

beforeAll(async () => {
  runningContainer = await container.start();
}, 15000);

afterAll(async () => {
  await runningContainer.stop();
});

test("hello world tests", async () => {
  const containerPort = runningContainer.getMappedPort(80);
  const result = await axios.get(`http://localhost:${containerPort}`);

  expect(result.data).toContain("Hello World");
});
