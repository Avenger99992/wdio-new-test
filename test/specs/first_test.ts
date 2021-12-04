import {expect} from "chai";


describe('vadik loh', () => {
    let username = 'asdada';
    it('vadik mocha', async () => {
       /* await browser.url('https://webdriver.io/');
        expect(await browser.getUrl()).to.contain('https://webdriver.io');
        let buttonSelector = await browser.$("header.hero div[class^=\"buttons\"]>a:first-child");
        await buttonSelector.click();
        await browser.pause(5000);
        expect(await browser.getUrl()).to.contain('https://webdriver.io/docs/gettingstarted');
        let searchSelector = await browser.$('.DocSearch');
        await searchSelector.click();
        let searchInput = await browser.$('.DocSearch-Input');
        await searchInput.waitForDisplayed();
        await searchInput.setValue('browser');
        await browser.pause(10000); */


        await browser.url('http://uitestingplayground.com/sampleapp');
        expect(await browser.getUrl()).to.contain('http://uitestingplayground.com/sampleapp');
        let loginInput = await browser.$('[name="UserName"]');
        await loginInput.setValue(username);
        let passwordInput = await browser.$('[name="Password"]');
        await passwordInput.setValue('pwd');
        let loginButton = await browser.$('#login');
        await loginButton.click();
        let successMessage = await browser.$("#loginstatus");
        expect(await successMessage.getText()).to.equal(`Welcome, ${username}!`);
        await browser.pause(5000);
    });
    it('vadik mocha', async () => {
        await browser.url('http://uitestingplayground.com/sampleapp');
        //expect(await browser.getUrl()).to.contain('http://uitestingplayground.com/sampleapp');
        let loginInput = await browser.$('[name="UserName"]');
        await loginInput.setValue(username);
        let passwordInput = await browser.$('[name="Password"]');
        await passwordInput.setValue('pwd1');
        let loginButton = await browser.$('#login');
        await loginButton.click();
        let successMessage = await browser.$("#loginstatus");
        expect(await successMessage.getText()).to.equal(`Invalid username/password`);
        await browser.pause(5000);

    });

});
