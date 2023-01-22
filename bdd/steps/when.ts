import { When } from "@cucumber/cucumber";
import axios from "axios";

When('I GET the service homepage', async function () {    
    this.httpResult = await axios.get(`http://localhost:${this.runningContainer.getMappedPort(80)}`);
  });