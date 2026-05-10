import { setWorldConstructor }
from "@cucumber/cucumber";

class CustomWorld {

  constructor() {

    this.page = null;
    this.context = null;
    this.logger = null;
    this.testData = {};
    
  }
}

setWorldConstructor(CustomWorld);