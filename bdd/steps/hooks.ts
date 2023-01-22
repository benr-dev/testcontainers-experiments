import { After } from "@cucumber/cucumber";

After(function (){
    if(this.runningContainer) {
        this.runningContainer.stop();
    }
})