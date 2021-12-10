import {expect} from "chai";
import * as Process from "process";

export default class ProductsPage {
    private itemPrice: string = '.inventory_item:nth-child(?) .inventory_item_price';
    private badge: string = '.shopping_cart_badge';
    private ItemPage: string = '#item_5_title_link';
    private addToCartItem: string = '#add-to-cart-sauce-labs-fleece-jacket';
    private shoppingCart: string = '.shopping_cart_link';
    private priceSelector: string = '.inventory_item_price';
    private checkOut: string = '#checkout';

    public async checkIfPriceEqual(): Promise<string> {
        let checkItem = await browser.$(this.priceSelector);
        return await checkItem.getText();
    }

    public async checkBadge(): Promise<any> {
        let isCartItemDisplayed = await browser.$(this.badge);
        return await isCartItemDisplayed.isDisplayed();
    }

    public async getItemPrice(index: number): Promise<string> {
        let goodItemPrice = await browser.$(this.itemPrice.replace('?', index.toString()));
        return await goodItemPrice.getText();
    }

    public async openSauceLabsFleeceJacketPage(): Promise<void> {
        let itemCheck = await browser.$(this.ItemPage);
        await itemCheck.click();
    }

    public async addToCart(): Promise<void> {
        let item = await browser.$(this.addToCartItem);
        await item.click();
    }

    public async shoppingCartClick(): Promise<void> {
        let cart = await browser.$(this.shoppingCart);
        await cart.click();
    }

    public async checkOutPage(): Promise<void> {
        let checkOutProceed = await browser.$(this.checkOut);
        await checkOutProceed.click();
    }
}