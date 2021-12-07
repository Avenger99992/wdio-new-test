import {expect} from "chai";

describe('vadik loh', () => {
    let username = 'asdada';
    it('vadik mocha', async () => {
        await browser.url('https://www.saucedemo.com');
        let newUserLogin = await browser.$('#user-name');
        await newUserLogin.setValue('standard_user');
        let newUserPassword = await browser.$('#password');
        await newUserPassword.setValue('secret_sauce');
        let newLogin = await browser.$('#login-button');
        await newLogin.click();
        let checkPrice = await browser.$('.inventory_item:nth-child(4) .inventory_item_price');
        let itemPrice = '$49.99';
        expect (await checkPrice.getText()).to.equal(itemPrice);
        let isCartItemDisplayed = await browser.$('.shopping_cart_badge');
        await (isCartItemDisplayed.isDisplayed());
        let itemCheck = await browser.$('#item_5_title_link');
        await itemCheck.click();
        let addItemToCart = await browser.$('#add-to-cart-sauce-labs-fleece-jacket');
        await addItemToCart.click();
        let shoppingCartButton = await browser.$('.shopping_cart_link');
        await shoppingCartButton.click();
        checkPrice = await browser.$('.inventory_item_price');
        expect (await checkPrice.getText()).to.equal(itemPrice);
        let checkOutButton = await browser.$('#checkout');
        await checkOutButton.click();
        let nameField = await browser.$('#first-name');
        await nameField.setValue('Vadik');
        let lastName = await browser.$('#last-name');
        await lastName.setValue('Mocha');
        let postalCodeField = await browser.$('#postal-code');
        await postalCodeField.setValue('1488');
        let continueButton = await browser.$('#continue');
        await continueButton.click();
        let itemTotal = await browser.$('.summary_subtotal_label');
        let itemTotalPrice = 'Item total: ' + itemPrice;
        expect (await itemTotal.getText()).to.equal(itemTotalPrice);
        let taxCheck = await browser.$('.summary_tax_label');
        let taxValue = 'Tax: $4.00';
        expect (await taxCheck.getText()).to.equal(taxValue);
        let sum = Number(itemTotalPrice.replace('Item total: $', '')) + Number(taxValue.replace('Tax: $',''));
        expect (sum == 53.99);
        let finishButton = await browser.$('#finish');
        await finishButton.click();
        let checkPurchase = await browser.$('.complete-header');
        expect (await checkPurchase.getText()).to.equal('THANK YOU FOR YOUR ORDER');
        let homeButton = await browser.$('#back-to-products');
        await homeButton.click();
        expect (await browser.getUrl()).to.equal('https://www.saucedemo.com/inventory.html');


    });
});