/**
 * Created by FilipA@M on 6/7/2017.
 */
const config = require('../config.json');
const url = 'https://www.facebook.com/'
const GroupBoutton = element.all(by.className('_5afe'));
const HomeButton = element(by.className('_3qcu _cy7'));
const UserId = element.all(by.className('_5pb8 _8o _8s lfloat _ohe'));
let TIMEOUT = config.timeout;

const FacebookLogin = require('../Utils/FacebookLogin');
let FacebookLog = new FacebookLogin();

function Facebook() {

    let expectedConditions = protractor.ExpectedConditions;

    this.accesFacebook = function () {
        facebookAccess = Date.now();
        browser.get(url);
        FacebookLog.login();
        expect(browser.getCurrentUrl()).toEqual(url);
        browser.wait(expectedConditions.presenceOf(GroupBoutton), TIMEOUT);
        console.log('Facebook is accessed at: ' + facebookAccess)

    };

    this.accesGroup = function () {
        groupAccess = Date.now();
        GroupBoutton.get(3).click();
        browser.driver.sleep(3000);
        console.log('Group is accessed at: ' + groupAccess)

    }

    this.goToHome = function () {
        backToHome = Date.now();
        HomeButton.click();
        browser.driver.sleep(3000);
        console.log('Home is accessed at: ' + backToHome)

    }
    this.accessUser = function () {
        /*for ( let i = 0; i < UserId.length; i++ ){
            let profileUrl = UserId[i].href;
            let pageId = profileUrl.substring(profileUrl.indexOf('id') + 3, profileUrl.indexOf('&nf'))
            console.log(pageId);
                if(pageId == '100013275014638'){
                    UserId[i].click();
                }else{
                    console.log('Failed: The user can not be accessed')
                }
        }*/

        userAccess = Date.now();
        UserId.get(0).click();
        browser.driver.sleep(3000);
        console.log('User is accessed at: ' + userAccess)
    }


}
module.exports = Facebook;