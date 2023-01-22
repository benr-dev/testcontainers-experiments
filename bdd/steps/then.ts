import { Then } from "@cucumber/cucumber";
import { expect } from "expect";

Then('the page contains the words {string}', function (string) {
    expect(this.httpResult.data).toContain("Hello World");
});