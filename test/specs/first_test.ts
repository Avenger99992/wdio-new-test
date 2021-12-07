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


        /*  await browser.url('http://uitestingplayground.com/sampleapp');
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

      }); */
        /* await browser.url('http://uitestingplayground.com/textinput');
            let buttonCheck = await browser.$('[id="updatingButton"]');
            expect (await buttonCheck.getText()).to.equal('Button That Should Change it\'s Name Based on Input Value');
            let newButtonName = await browser.$('[id="newButtonName"]');
            await newButtonName.setValue('asasd');
            await buttonCheck.click();
            expect (await buttonCheck.getText()).to.equal('asasd');
            await browser.pause(5000); */

        /*  await browser.url('https://www.saucedemo.com/');
          let newUserLogin = await browser.$('[id="user-name"]');
          await newUserLogin.setValue('asda');
          let newUserPassword = await browser.$('[id="password"]');
          await newUserPassword.setValue('secret_sauce');
          let newLogin = await browser.$('[id="login-button"]');
          await newLogin.click();
          let errorMessage = await browser.$('[data-test="error"]');
          expect(await errorMessage.getText()).to.equal('Epic sadface: Username and password do not match any user in this service');
          await browser.pause(5000);
      });

      it('vadik mocha', async () => {
          await browser.url('https://www.saucedemo.com/');
          let newUserLogin = await browser.$('[id="user-name"]');
          await newUserLogin.setValue('standard_user');
          let newUserPassword = await browser.$('[id="password"]');
          await newUserPassword.setValue('asda');
          let newLogin = await browser.$('[id="login-button"]');
          await newLogin.click();
          let errorMessage = await browser.$('[data-test="error"]');
          expect(await errorMessage.getText()).to.equal('Epic sadface: Username and password do not match any user in this service');
          await browser.pause(5000); */

       /* await browser.url('https://www.saucedemo.com/');
        let newUserLogin = await browser.$('[id="user-name"]');
        await newUserLogin.setValue('standard_user');
        let newUserPassword = await browser.$('[id="password"]');
        await newUserPassword.setValue('secret_sauce');
        let newLogin = await browser.$('[id="login-button"]');
        await newLogin.click();
        let logoutMenu = await browser.$('[id="react-burger-menu-btn"]');
        await logoutMenu.click();
        let logoutButton = await browser.$('[id="logout_sidebar_link"]');
        await logoutButton.click();
        newLogin = await browser.$('[id="login-button"]');
        let isExisting = await newLogin.isExisting();
        console.log(isExisting);
        await browser.pause(5000);*/

      /*  await browser.url('https://www.saucedemo.com/');
        let newUserLogin = await browser.$('[id="user-name"]');
        await newUserLogin.setValue('standard_user');
        let newUserPassword = await browser.$('[id="password"]');
        await newUserPassword.setValue('secret_sauce');
        let newLogin = await browser.$('[id="login-button"]');
        await newLogin.click();
        let allItemsNames = await browser.$$('.inventory_item_name');
        let namesArray = [];
        for (let name of allItemsNames) {
            namesArray.push(await name.getText());
        }
        expect(namesArray).to.have.same.members(['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt',
             'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']);*/

    });


});
