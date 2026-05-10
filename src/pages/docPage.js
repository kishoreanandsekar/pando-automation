import {
    expect
} from "@playwright/test";

export default class DocPage {
    constructor(page, logger) {

        this.page = page;
        this.logger = logger;

        this.inputLRNumber =
            page.getByText('Enter LR number');

        this.txtLRNumber =
            page.getByRole('textbox', { name: 'Enter LR number' });

        this.saveLRNumber =
            page.locator('.text-blue');

        this.lrSuccessMessage =
            page.getByText('LR number saved successfully');

        this.lnkIndentPage =
            page.getByRole('link', { name: 'PAND-CMDEP-M-' });

        this.approveBtn =
            page.getByRole('button', { name: 'APPROVE' });

        this.approveConsigneeBtn =
            page.getByRole('button', { name: 'Approve', exact: true });

    }

    async enterUploadDetails() {

    this.logger.info(
      "Entering LR Number"
    );

    await this.inputLRNumber.click();
    await this.txtLRNumber.fill('LOP67');
    await this.saveLRNumber.click();
    
  }

  async verifyLrSuccessMessage(message){

    this.logger.info(
      "Assertion-LR-Success-Message"
    );

    await expect(

      this.lrSuccessMessage

    ).toHaveText(message);

     await this.lnkIndentPage.click();



  }

  async approveConsignee(){

    this.logger.info(
      "Approve Consignee"
    );

    await this.approveBtn.click();
    await this.approveConsigneeBtn.click();



  }

}