import {
  Given,
  When,
  Then,
  
} from "@cucumber/cucumber";

import LoginPage from "../../pages/loginPage.js";

import IndentPage from "../../pages/indentPage.js";

import DocPage from "../../pages/docPage.js";

let loginPage;

let indentPage;

let docPage;

Given("User navigates to login page",
  async function () {
    loginPage =
      new LoginPage(

        this.page,

        this.logger
      );

    await loginPage.navigate();
  }
);

When(
  "User logs in with valid credentials",

  async function () {

    await loginPage.login(

      process.env.TEST_USERNAME,

      process.env.TEST_PASSWORD
    );
  }
);

Then(
  "User should be logged in and verify message {string}",

  async function (message) {

    indentPage =
      new IndentPage(

        this.page,

        this.logger
      );

    await indentPage.verifyHomePage(
      message
    );
  }
);

When(
  "User creates an indent with valid details",

  async function () {

    await indentPage.createIndent();
    const sourceDepot =

      await indentPage.getSourceDepot();

    //
    // Store dynamically
    //
    this.testData.sourceDepot =
      sourceDepot;

    console.log(

      `Stored Source Depot : ${sourceDepot}`);
  }
);

Then(
  "User should verify indent success message {string}",

  async function (message) {

    const indentNumber = await indentPage.verifyIndentSuccessMessage(
      message
    );

    

    this.testData.indentNumber = indentNumber;

    console.log(

      `Stored Indent Number : ${indentNumber}`
    );
  }
);

When(
  "User searches with indent number and source depot filter",

  async function () {
    await indentPage.searchWithIndent(this.testData.indentNumber);
    await indentPage.applySourceFilter(this.testData.sourceDepot);

  }
);

Then(
  "Created indent should appear in results",

  async function () {
    await indentPage.verifySearchResult(this.testData.indentNumber);
  }
);

When(
  "User navigates to document page and enters valid details",

  async function () {
    await indentPage.clickUploadButton();

    docPage =
      new DocPage(

        this.page,

        this.logger
      );

    await docPage.enterUploadDetails();
    
  }
);


Then(
  "User verifies LR success message {string}",

  async function (message) {

    await docPage.verifyLrSuccessMessage(
      message
    );
  }
);

When(
  "User provides vehicle details to assign vehicle {string} {string} {string} {string} {string} {string} {string}",

  async function (truckReg, truckNo, phone, name, length, width, height) {

    await indentPage.assignTruckDetails(truckReg, truckNo, phone, name, length, width, height);
  
  }
);

Then(
  "User verifies assign state success message {string}",

  async function (message) {

    await indentPage.checkAssignSuccessMsg(message);
    
    }
    );


When(
  "User reports the vehicle arrival",

  async function () {

    await indentPage.reportingTruck();
  
  }
);

Then(
  "User verifies the reported state with success message {string}",

  async function (message) {
    await indentPage.checkreportSuccessMsg(message);
    
    }
    );


When(
  "User provide truck in time details {string}",

  async function (dateAndTime) {

    await indentPage.truckIn(dateAndTime);
  
  }
);

Then(
  "User verifies truck in success message with {string}",

  async function (message) {
    await indentPage.truckInMsg(message);
    
    }
    );
    
When(
  "User provide truck out time details {string}",

  async function (dateAndTime) {

    await indentPage.truckOut(dateAndTime);
  
  }
);

Then(
  "User verifies truck out success message with {string}",

  async function (message) {
    await indentPage.truckOutMsg(message);
    
    }
    );


When(
  "User provide Delivery time details with {string} {string} {string} {string}",

  async function (reportedTime, unloadingStart, podDate, unloadingEnd) {

    await indentPage.markAsCompleteDetails(reportedTime, unloadingStart, podDate, unloadingEnd );
  }
);

Then(
  "User verifies delivery success message with {string}",

  async function (message) {
    await indentPage.markCompletedMsg(message);
    }
    );

When(
  "User approves the consignees",

  async function () {

    await indentPage.clickUploadButton();
    await docPage.approveConsignee();
  
  }
);

Then(
  "User should verify completed success message {string}",

  async function (message) {
    await indentPage.verifyConsigneeMsg(message); 
    }
    );

