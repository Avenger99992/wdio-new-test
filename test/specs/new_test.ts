import {expect} from "chai";

describe('vadik loh', () => {
    let username = 'asdada';
    it('vadik mocha', async () => {
        /*await browser.url('https://www.saucedemo.com/');
        let newUserLogin = await browser.$('[id="user-name"]');
        await newUserLogin.setValue('standard_user');
        let newUserPassword = await browser.$('[id="password"]');
        await newUserPassword.setValue('secret_sauce');
        let newLogin = await browser.$('[id="login-button"]');
        await newLogin.click();
        let firstPurchaseButton = await browser.$('.inventory_list :first-child .pricebar :last-child');
        await firstPurchaseButton.click();
        let shoppingCartCheck = await browser.$('.shopping_cart_badge');
        await browser.pause(5000);
        expect(await shoppingCartCheck.getText()).to.equal('1');
        let cartButton = await browser.$('.shopping_cart_link');
        await cartButton.click();
        let purchaseStatusCheck = await browser.$('.inventory_item_price');
        expect(await purchaseStatusCheck.getText()).to.equal('$29.99');*/

        await browser.url('https://www.saucedemo.com/');
        let newUserLogin = await browser.$('[id="user-name"]');
        await newUserLogin.setValue('standard_user');
        let newUserPassword = await browser.$('[id="password"]');
        await newUserPassword.setValue('secret_sauce');
        let newLogin = await browser.$('[id="login-button"]');
        await newLogin.click();
        let purchaseButton = await browser.$('#add-to-cart-sauce-labs-backpack');
        await purchaseButton.click();
        purchaseButton = await browser.$('#add-to-cart-sauce-labs-bike-light');
        await purchaseButton.click();
        purchaseButton = await browser.$('#add-to-cart-sauce-labs-fleece-jacket');
        await purchaseButton.click();
        let cartButton = await browser.$('.shopping_cart_link');
        await cartButton.click();
        let allItemsPrices = await browser.$$('.inventory_item_price');
        let pricesArray = [];
        let pricesSum = 0;
        for (let price of allItemsPrices) {
            pricesSum += Number(pricesArray.push((await price.getText()).replace('$', '')));

        }
        expect (pricesSum == 89.97);






    });
});