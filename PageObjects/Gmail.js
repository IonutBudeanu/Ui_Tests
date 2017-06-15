/**
 * Created by andrei.filip on 6/14/2017.
 */
/**
 * Created by FilipA@M on 6/7/2017.
 */
const url='https://www.gmail.com/';
const YoutubeUrl='http://benjamin.smedbergs.us/tests/youtube-notification-mail/youtube-notification-mail-complete.html';
const tabElement=element(by.id('gbwa'));
const Gmailtab=element(by.id('gb23'));
const YoutubeElement=element(by.className('m_-7793005015168254029m_3189775553631395212video-title-font-class'));





function Gmail() {

    let expectedConditions = protractor.ExpectedConditions;
    const GLogin=require('../Utils/LoginGmail');

    let GoogleLogin=new GLogin();

    this.title=element(by.id('hplogo'));

    this.waitUntilElementAppears=function(){
        browser.wait(expectedConditions.presenceOf(this.title),5000);
    };


    this.accessGoogleMail = function () {
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.driver.manage().window().maximize();
      //  this.waitUntilElementAppears();
        browser.driver.sleep(3000);
        GoogleLogin.login();
        //expect(browser.getCurrentUrl()).toEqual(url);
    };

    this.accessEmail=function(key){
        tabElement.click();
        browser.driver.sleep(1000);
        Gmailtab.click();
        browser.driver.sleep(5000);

    }
    this.accessYoutubeLink=function(){
        browser.get(YoutubeUrl);
        YoutubeElement.click();
        browser.driver.sleep(5000);


    }


}
module.exports = Gmail;/**
 * Created by andrei.filip on 6/8/2017.
 */
