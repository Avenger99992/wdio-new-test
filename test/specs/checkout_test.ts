import {expect} from "chai";
import LoginPage from "../../pageobjects/authorization/login.page";
import ProductsPage from "../../pageobjects/authorization/products.page";
import CheckOutPage from "../../pageobjects/authorization/checkOut.page";

describe('vadik loh', () => {
    const inventoryPageURL: string = 'https://www.saucedemo.com/inventory.html';
    let username = 'asdada';
    it('vadik mocha', async () => {

        await browser.url('https://www.saucedemo.com');
        let loginPage: LoginPage = new LoginPage();
        await loginPage.login('standard_user', 'secret_sauce');
        let productPage: ProductsPage = new ProductsPage();
        expect(await productPage.getItemPrice(4)).to.equal('$49.99');
        expect(await productPage.isBadgePresent()).to.eql(false);
        await productPage.openSauceLabsFleeceJacketPage();
        await productPage.addToCart();
        await productPage.clickShoppingCart();
        expect (await productPage.checkIfPriceEqual()).to.equal('$49.99');
        await productPage.clickCheckoutButton();
        let checkOut: CheckOutPage = new CheckOutPage();
        await checkOut.fillUserData('Vadik', 'Mocha', '1488');
        expect (await checkOut.getTotalPrice()).to.equal('Item total: $49.99');
        expect (await checkOut.getTax()).to.equal('Tax: $4.00');
        expect (await checkOut.getSum()) === 49.99 + 4.00;
        await checkOut.clickFinishButton();
        expect (await checkOut.getOrderStatus()).to.equal('THANK YOU FOR YOUR ORDER');
        await checkOut.goBack();
        expect (await browser.getUrl()).to.equal(inventoryPageURL);

    });
});
