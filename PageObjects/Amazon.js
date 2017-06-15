/**
 * Created by andrei.filip on 6/14/2017.
 */
/**
 * Created by FilipA@M on 6/7/2017.
 */
const url='https://www.Amazon.com/';
const searchBar=element(by.className('nav-fill'));
const submitButton=element(by.id('nav-input'));
const videoElement=element(by.className('a-fixed-left-grid'));
//const backElement=element(by.id(''));





function Amazon() {

    let expectedConditions = protractor.ExpectedConditions;


    this.title=element(by.id('hplogo'));

    this.waitUntilElementAppears=function(){
        browser.wait(expectedConditions.presenceOf(this.title),5000);
    };


    this.accessAmazon = function () {
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.driver.manage().window().maximize();
        //  this.waitUntilElementAppears();
        browser.driver.sleep(3000);
        //expect(browser.getCurrentUrl()).toEqual(url);
    };

    this.search=function(key){
        searchBar.sendkeys(key);
        browser.driver.sleep(1000);
        submitButton.click();
        browser.driver.sleep(3000);

    }
    this.accessVideo=function(){
        videoElement.click();
        browser.driver.sleep(3000);


    }
    this.backAction=function(){
        videoElement.click();
        browser.driver.sleep(3000);


    }


}
module.exports = Amazon;/**
 * Created by andrei.filip on 6/8/2017.
 */
