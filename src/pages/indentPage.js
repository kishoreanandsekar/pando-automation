import {
  expect
} from "@playwright/test";

export default class IndentPage {

  constructor(page, logger) {

    this.page = page;
    this.logger = logger;

    this.pageHeading =
      page.getByRole('heading', { name: 'QA Pando - Outbound' });

    this.addIndentbutton =
      page.getByRole('button', { name: 'Add' });

    this.addSourceDepot =
      page.getByRole('heading', { name: 'Add Source location Click' });

    this.selectSourceDepot =
      page.getByRole('radio', { name: '5eaac4fd1d8b8000495fe947' });
    // page.locator('input[value="5eaac4fd1d8b8000495fe947"]');


    this.addSourcebutton =
      page.getByRole('button', { name: 'Add' });

    this.sourceHeading =
      page.getByRole('heading', { name: 'Chennai Mail Depot' })

    this.addDest = page.getByText('Add Drop-Off');

    this.selectDest =
      page.locator('tr:nth-child(7) > .el-table_3_column_9 > .cell > .el-checkbox > .el-checkbox__input > .el-checkbox__inner');

    this.popupSelect =
      page.getByRole('button', { name: 'Switch to Open Indent' });

    this.chDest =
      page.getByRole('button', { name: 'Add' });

    this.deliveryType =
      page.getByRole('listitem').filter({ hasText: 'Delivery Type FTLPTL' }).getByPlaceholder('Select');

    this.selectFtl =
      page.getByText('FTL');

    this.vehicleType =
      page.getByRole('listitem').filter({ hasText: 'Vehicle type' }).getByPlaceholder('Select', { exact: true });

    this.selectVehicle =
      page.getByText('REGFR1');

    this.clickTransporter =
      page.getByText('TRANSPORTER - Select a');

    this.selectTransporter =
      page.getByRole('radio', { name: 'Test transporter Chennai - T-' });

    this.indentBtn =
      page.getByRole('button', { name: 'Indent' });

    this.submitBtn =
      page.getByRole('button', { name: 'Submit' })

    this.addRate =
      page.getByPlaceholder('INR');

    this.indentSuccessMsg =
      page.getByText('Indent created with number');

    this.searchBox =
      page.locator('.app-search-label');

    this.inputIndentTextBox =
      page.getByRole('textbox', { name: 'Enter Indent ID' });

    this.clickFilter =
      page.getByRole('button', { name: 'Filter' });

    this.clickSourceFilter =
      page.locator('.sliderfilter-cardlist').first();

    this.inputSourceFilter =
      page.getByRole('textbox', { name: 'Delhi' });

    this.selectOptionsSeclected =
      page.getByText('options selected');

    this.SelectApplyAll =
      page.locator('span').filter({ hasText: 'All Statuses' }).first();

    this.applyFilter =
      page.getByRole('button', { name: 'APPLY' });

    this.checkIndentNumber =
      page.getByText('Indent ID PAND-CMDEP-M-');

    this.documentBtn =
      page.getByRole('link', { name: 'Document' });

    this.assignTruck =
      page.getByRole('button', { name: 'Assign Truck' });

    this.truckRegNo =
      page.getByRole('textbox', { name: 'XX00' }).nth(1);

    this.truckNo =
      page.getByRole('textbox', { name: '0000' }).nth(1);

    this.driverPhone =
      page.getByPlaceholder('99XXXXXXXX');

    this.driverName =
      page.getByRole('textbox', { name: 'Enter Driver Name' });

    this.vehicleLength =
      page.getByPlaceholder('Enter Vehicle Length');

    this.vehicleWidth =
      page.getByPlaceholder('Enter Vehicle Width');

    this.vehicleHeight =
      page.getByPlaceholder('Enter Vehicle height');

    this.assignSubmitBtn =
      page.getByRole('button', { name: 'Submit' });

    this.assignSuccessMessage =
      page.getByText('Truck assigned for indent').nth(1);

    this.truckReportedBtn =
      page.locator('#truck-reported-action');

    this.confirmReportedBtn =
      page.getByRole('button', { name: 'Yes' });

    this.reportedSuccessMsg =
      page.getByText('Truck reported at depot for');

    this.truckInBtn =
      page.getByRole('button', { name: 'TRUCKIN' });

    this.truckInDatePicker=
     page.getByRole('textbox', { name: 'Pick a date' });

    this.truckInSubmit =
      page.getByRole('button', { name: 'Submit' });

    this.truckInSuccessMsg =
      page.getByText('Truck arrived for indent PAND')

    this.truckOutBtn =
      page.getByRole('button', { name: 'TRUCKOUT' });

    this.truckOutDatePicker=
     page.getByRole('textbox', { name: 'Pick a date' });

    this.truckOutSubmit =
      page.getByRole('button', { name: 'Submit' });

    this.truckOutSuccessMsg =
      page.getByText('Truck dispatched for indent')

    this.markDelivertBtn =
      page.getByRole('button', { name: 'Mark as delivered' })

    this.chkBoxDepot =
      page.locator('.el-checkbox__inner');

    this.reportAtTime = 
     page.getByRole('textbox', { name: 'Select Date and Time' }).first();

    this.unloadingStartTime = 
     page.getByRole('textbox', { name: 'Select Date and Time' }).nth(2);

    this.podTime = 
     page.getByRole('textbox', { name: 'Select Date and Time' }).nth(1);
     
    this.unloadingEndTime = 
     page.getByRole('textbox', { name: 'Select Date and Time' }).nth(3);

    this.markCompleteSubmit = 
      page.getByRole('button', { name: 'Submit' });

    this.completeSuccessMsg=
     page.getByText('Indent number PAND-CMDEP');

    this.consigneeSuccessMsg=
     page.getByText('GRN Approved');
  }

  // Verify homepage
  async verifyHomePage(message) {

    this.logger.info(
      "Assertion-Homepage"
    );

    await expect(

      this.pageHeading

    ).toHaveText(message);
  }

  //
  // Add source depot
  //
  async addSourceLocation() {

    this.logger.info(
      "Adding source location"
    );

    await this.addSourceDepot.click();

    await this.selectSourceDepot.click();

    await this.addSourcebutton.click();

  }

  async getSourceDepot() {

    this.logger.info(
      "Getting source depot"
    );

    let placeName =
      await this.sourceHeading
        .textContent();

    // console.log(placeName);

    let sourceDepot =

      placeName
        .split("\n")
        .map(text => text.trim())
        .filter(text => text !== "")[0];

    return sourceDepot;
  }

  //
  // Add destination
  //
  async addDestination() {

    this.logger.info(
      "Adding destination"
    );

    await this.addDest.click();

    await this.selectDest.click();

    await this.popupSelect.click();

    await this.chDest.click();
  }

  async addIndentDetails(rate) {

    this.logger.info(
      `Selecting Delivery Type`
    );

    await this.deliveryType.click();
    await this.selectFtl.click();

    this.logger.info(
      `Selecting Vehicle Type`
    );

    await this.vehicleType.click();
    await this.selectVehicle.click();

    this.logger.info(
      `Entering rate : ${rate}`
    );

    await this.addRate.fill(rate);

    this.logger.info(
      `Selecting Transporter`
    );

    await this.clickTransporter.click();

    await this.selectTransporter.click();

    await this.indentBtn.click();

    await this.submitBtn.click();

  }



  async

  //
  // Complete business flow
  //
  async createIndent() {

    this.logger.info(
      "Creating indent"
    );

    await this.addIndentbutton.click();

    await this.addSourceLocation();

    await this.addDestination();

    await this.addIndentDetails(
      "12000"
    );
  }

  async verifyIndentSuccessMessage(message) {

    this.logger.info(
      "Assertion-Indent-success-message"
    );

    await expect(

      this.indentSuccessMsg

    ).toContainText(message);

    const fullMessage = await this.indentSuccessMsg.textContent();

    const match = fullMessage.match(/PAND-CMDEP-M-\d+/);

    return match[0];

  }

  async searchWithIndent(indentNum) {

    this.logger.info(
      "Searching with saved indent"
    );

    await this.searchBox.click();
    await this.inputIndentTextBox.fill(indentNum);
    await this.inputIndentTextBox.press('Enter');
  }

  async applySourceFilter(savedSource) {

    this.logger.info(
      "Applying Source Filter"
    );

    await this.clickFilter.click();
    await this.clickSourceFilter.click();
    await this.inputSourceFilter.fill(savedSource);
    await this.inputSourceFilter.press('ArrowDown');
    await this.inputSourceFilter.press('Enter');
    await this.selectOptionsSeclected.click();
    await this.SelectApplyAll.click();
    await this.applyFilter.click();

  }


  async verifySearchResult(indentNum) {

    this.logger.info(
      "Checking Search Result with saved indent number"
    );

    await expect(

      this.checkIndentNumber

    ).toContainText(indentNum);

  }

  async clickUploadButton() {
    this.logger.info(
      "Entering Upload details"
    );
    await this.documentBtn.click();
  }

  async assignTruckDetails(truckReg, truckNo, phone, name, length, width, height) {
    this.logger.info(
      "Assigning Truck Details"
    );

    await this.assignTruck.click();
    await this.truckRegNo.fill(truckReg);
    await this.truckNo.fill(truckNo);
    await this.driverPhone.fill(phone);
    await this.driverName.fill(name);
    await this.vehicleLength.fill(length);
    await this.vehicleWidth.fill(width);
    await this.vehicleHeight.fill(height);
    await this.assignSubmitBtn.click();

  }

  async checkAssignSuccessMsg(message) {
    this.logger.info(
      "Assertion-Assign-Success-Message"
    );
    await expect(

      this.assignSuccessMessage

    ).toContainText(message);
  }

  async reportingTruck() {
    this.logger.info(
      "Reporting truck arrival "
    );
    await this.truckReportedBtn.click();
    await this.confirmReportedBtn.click();
  }


  async checkreportSuccessMsg(message) {
    this.logger.info(
      "Assertion-reported"
    );
    await expect(

      this.reportedSuccessMsg

    ).toContainText(message);
  }


  async truckIn(dateTime) {
    this.logger.info(
      "Reporting truck in "
    );
    await this.truckInBtn.click();
    await this.truckInDatePicker.fill(dateTime);
    await this.truckInSubmit.click();
  }

  async truckInMsg(message) {
    this.logger.info(
      "Assertion-Truck-In-Message"
    );
    await expect(

      this.truckInSuccessMsg

    ).toContainText(message);
  }
  
  async truckOut(dateTime) {
    this.logger.info(
      "Reporting truck out "
    );
    await this.truckOutBtn.click();
    await this.truckOutDatePicker.fill(dateTime);

    await this.truckOutSubmit.click();
  }

  async truckOutMsg(message) {
    this.logger.info(
      "Assertion-Truck-In-Message"
    );
    await expect(

      this.truckOutSuccessMsg

    ).toContainText(message);
  }


  async markAsCompleteDetails(reportAtTime, unloadingEndTime, podDate, unloadingEnd) {
    this.logger.info(
      "Mark as Completed details"
    );
    
    await this.markDelivertBtn.click();
    await this.chkBoxDepot.click();
    await this.reportAtTime.fill(reportAtTime);
    await this.reportAtTime.press("Enter");
    await this.unloadingStartTime.fill(unloadingEndTime);
    await this.unloadingStartTime.press("Enter");
    await this.podTime.fill(podDate);
    await this.podTime.press("Enter");
    await this.unloadingEndTime.fill(unloadingEnd);
    await this.unloadingEndTime.press("Enter");
    await this.markCompleteSubmit.click();
  }

  async markCompletedMsg(message) {
    this.logger.info(
      "Mark-as-completed-Message"
    );
    await expect(

      this.completeSuccessMsg

    ).toContainText(message);
  }

  async verifyConsigneeMsg(message) {
    this.logger.info(
      "Verify consignee msg"
    );
    await expect(

      this.consigneeSuccessMsg

    ).toContainText(message);
  }









}