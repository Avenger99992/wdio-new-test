import {expect} from "chai";
import LoginPage from "../../pageobjects/authorization/login.page";
import ProductsPage from "../../pageobjects/authorization/products.page";
import CheckOutPage from "../../pageobjects/authorization/checkOut.page";

describe('vadik loh', () => {
    let username = 'asdada';
    it('vadik mocha', async () => {

        await browser.url('https://www.saucedemo.com');
        let loginPage: LoginPage = new LoginPage();
        await loginPage.newLogin('standard_user', 'secret_sauce');
        let productPage: ProductsPage = new ProductsPage();
        await productPage.checkIfEqual('.inventory_item:nth-child(4) .inventory_item_price', '$49.99')
        await productPage.checkBadge('.shopping_cart_badge');
        await productPage.actionClick('#item_5_title_link');
        await productPage.actionClick('#add-to-cart-sauce-labs-fleece-jacket');
        await productPage.actionClick('.shopping_cart_link');
        await productPage.checkIfEqual('.inventory_item_price', '$49.99')
        await productPage.actionClick('#checkout');
        let checkOut: CheckOutPage = new CheckOutPage();
        await checkOut.checkOutDetails('Vadik', 'Mocha', '1488');
        await productPage.checkIfEqual('.summary_subtotal_label', 'Item total: $49.99')
        await productPage.checkIfEqual('.summary_tax_label', 'Tax: $4.00')
        await checkOut.checkSum('.summary_total_label', 49.99, 4.00);
        await productPage.actionClick('#finish');
        await productPage.checkIfEqual('.complete-header', 'THANK YOU FOR YOUR ORDER');
        await productPage.actionClick('#back-to-products');
        expect (await browser.getUrl()).to.equal('https://www.saucedemo.com/inventory.html');

    });
});
