import { Given } from '@cucumber/cucumber';
import { GenericContainer } from 'testcontainers';

Given('the Hello World Service is running', {timeout: 10000}, async function() {
     this.container = new GenericContainer(
        "nginxdemos/hello"
      ).withExposedPorts(80);
            
      this.runningContainer = await this.container.start();
});