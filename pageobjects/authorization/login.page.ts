export default class LoginPage {
    private loginField: string = '#user-name';
    private passwordField: string = '#password';

    public async typeUsername(username: string): Promise<void> {
        let loginFieldElem = await browser.$(this.loginField);
        await loginFieldElem.setValue(username);
    }

    public async typePassword(password: string): Promise<void> {
        let passwordFieldElem = await browser.$(this.passwordField);
        await passwordFieldElem.setValue(password);
    }


    public async newLogin(username: string, password: string): Promise<void> {
        await this.typeUsername(username);
        await this.typePassword(password);
        let newLogin = await browser.$('#login-button');
        await newLogin.click();
    }

}
