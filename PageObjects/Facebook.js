/**
 * Created by FilipA@M on 6/7/2017.
 */
const url='https://www.facebook.com/'
const GrupBoutton= element(by.id('u_ps_jsonp_3_6_5'));
const HomeButton=element(by.id('u_0_a'));
const UserId=element(by.id('js_pw'));


const FacebookLogin=require('../Utils/FacebookLogin');
let FacebookLog=new FacebookLogin();

function Facebook() {



    this.accesFacebook = function () {
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.driver.manage().window().maximize();
        FacebookLog.login();
        expect(browser.getCurrentUrl()).toEqual(url);
        browser.driver.sleep(3000);

    };

    this.accesGroup=function(){
        GrupBoutton.click();
        browser.driver.sleep(3000);

    }

    this.goToHome=function(){
        HomeButton.click();
        browser.driver.sleep(3000);

    }
    this.AccessUserFromGroup=function(){
        UserId.click();
        browser.driver.sleep(3000);

    }



}
module.exports = Facebook;