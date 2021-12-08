export default class CheckOutPage {

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

    public async checkSum (selector: string, price: number, tax: number) {
        let sum = Number(selector.replace('Total: $', ''));
        expect (sum == price + tax);
    }
}