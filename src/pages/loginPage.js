export default class LoginPage {

    constructor(page, logger) {

        this.page = page;
        this.logger = logger;


        this.emailInput =
            page.locator(
                'input[type="text"]'
            );

        this.passwordInput =
            page.locator(
                '#password'
            );

        this.loginBtn =
            page.getByRole(
                'button',
                {
                    name: 'Log in'
                }
            );

        
    }

    async navigate() {

        this.logger.info(
            "Navigating to application"
        );

        await this.page.goto(

            process.env.BASEURL
        );
    }

    async enterEmail(email) {

        this.logger.info(
            `Entering email : ${email}`
        );

        await this.emailInput.fill(
            email
        );
    }

    async enterPassword(password) {

        this.logger.info(
            "Entering password"
        );

        await this.passwordInput.click();
        
        await this.passwordInput.fill(
            password
        );
    }


    async clickLogin() {

        this.logger.info(
            "Clicking login button"
        );

        await this.loginBtn.click();
    }

    async login(email, password) {

        this.logger.info(
            "Performing login"
        );

        await this.enterEmail(
            email
        );

        await this.enterPassword(
            password
        );

        await this.clickLogin();
    }
}