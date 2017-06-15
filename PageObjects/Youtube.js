/**
 * Created by FilipA@M on 6/7/2017.
 */
const url='https://www.youtube.com/'
const search= element(by.id('masthead-search-term'));
const access=element(by.id('search-btn'));
const leftList=element(by.id('trending-guide-item'));
const videoElement=element(by.id('yt-thumb video-thumb'));



function Youtube() {

    let expectedConditions = protractor.ExpectedConditions;

    this.title=element(by.id('appbar-guide-button'));

    this.waitUntilElementAppears=function(){
        browser.wait(expectedConditions.presenceOf(this.title),5000);
    };


    this.accesYoutube = function () {
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.driver.manage().window().maximize();
        this.waitUntilElementAppears();
        expect(browser.getCurrentUrl()).toEqual(url);
    };
    this.browserClose=function(){
        browser.close;
    };
    this.searchYoutube=function(key){
        search.sendKeys(key);
        access.click();
        expect()
    }
    this.accessTrending=function(){
        leftList.click();
    }
    this.playVideo=function(){
        videoElement.click();
    }

}
module.exports = Youtube;