export default class CheckOutPage {

    private totalPrice: string = '.summary_subtotal_label';
    private tax: string = '.summary_tax_label';
    private sum: string = '.summary_total_label';
    private finish: string = '#finish';
    private order: string = '.complete-header';
    private goBackButton = '#back-to-products';
    private firstName: string = '#first-name';
    private lastName: string = '#last-name';
    private postalCode: string = '#postal-code';
    private continueButton: string = '#continue';

    public async fillUserData (firstName: string, lastName: string, code: string){
        let firstNameField = await browser.$(this.firstName);
        await firstNameField.setValue(firstName);
        let lastNameField = await browser.$(this.lastName);
        await lastNameField.setValue(lastName);
        let postalCodeField = await browser.$(this.postalCode);
        await postalCodeField.setValue(code);
        let continueButton = await browser.$(this.continueButton);
        await continueButton.click();
    }

    public async getSum(): Promise<number> {
        let total = Number((await browser.$(this.sum).getText()).replace('Total: $', ''));
        return total;
    }

    public async getTotalPrice(): Promise<string> {
        let check = await browser.$(this.totalPrice);
        return check.getText();
    }

    public async getTax(): Promise<string> {
        let check = await browser.$(this.tax);
        return check.getText();
    }

    public async clickFinishButton(): Promise<void> {
        let finishClick = await browser.$(this.finish);
        await finishClick.click();
    }

    public async getOrderStatus(): Promise<string> {
        let status = await browser.$(this.order);
        return status.getText();
    }

    public async goBack(): Promise<void> {
        let back = await browser.$(this.goBackButton);
        await back.click();
    }
}