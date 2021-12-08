import {expect} from "chai";

export default class ProductsPage {

    public async checkIfEqual(selector: string, item: string): Promise<void> {
        let checkItem = await browser.$(selector);
        expect (await checkItem.getText()).to.equal(item);
    }

    public async checkBadge(selector: string): Promise<void> {
        let isCartItemDisplayed = await browser.$(selector);
        await (isCartItemDisplayed.isDisplayed());
    }

    public async actionClick(selector: string): Promise<void> {
        let itemCheck = await browser.$(selector);
        await itemCheck.click();
    }
}