export default class CheckOutPage {

    private totalPrice: string = '.summary_subtotal_label';
    private tax: string = '.summary_tax_label';
    private sum: string = '.summary_total_label';
    private finish: string = '#finish';
    private order: string = '.complete-header';
    private goBackButton = '#back-to-products';

    public async checkOutDetails (firstName: string, lastName: string, code: string){
        let firstNameField = await browser.$('#first-name');
        await firstNameField.setValue(firstName);
        let lastNameField = await browser.$('#last-name');
        await lastNameField.setValue(lastName);
        let postalCodeField = await browser.$('#postal-code');
        await postalCodeField.setValue(code);
        let continueButton = await browser.$('#continue');
        await continueButton.click();
    }

    public async checkSum(): Promise<number> {
        let total = Number((await browser.$(this.sum).getText()).replace('Total: $', ''));
        return total;
    }

    public async checkTotalPrice(): Promise<string> {
        let check = await browser.$(this.totalPrice);
        return check.getText();
    }

    public async checkTax(): Promise<string> {
        let check = await browser.$(this.tax);
        return check.getText();
    }

    public async finishPurchase(): Promise<void> {
        let finishClick = await browser.$(this.finish);
        await finishClick.click();
    }

    public async orderStatus(): Promise<string> {
        let status = await browser.$(this.order);
        return status.getText();
    }

    public async goBack(): Promise<void> {
        let back = await browser.$(this.goBackButton);
        await back.click();
    }
}