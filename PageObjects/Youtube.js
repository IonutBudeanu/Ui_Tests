/**
 * Created by FilipA@M on 6/7/2017.
 */
const url='https://www.youtube.com/'
const search= element(by.id('masthead-search-term'));
const access=element(by.id('search-btn'));
const leftList=element(by.id('trending-guide-item'));
const videoElement=element.all(by.className('yt-uix-tile-link yt-ui-ellipsis yt-ui-ellipsis-2 yt-uix-sessionlink      spf-link '));
const upNextVideo = element.all(by.className(' content-link spf-link  yt-uix-sessionlink      spf-link '));


function Youtube() {

    let expectedConditions = protractor.ExpectedConditions;

    this.title = element(by.id('appbar-guide-button'));

    this.waitUntilElementAppears = function () {
        browser.wait(expectedConditions.presenceOf(this.title), 5000);
    };


    this.accesYoutube = function () {
        youTubeAccess = Date.now();
        browser.get(url);
        this.waitUntilElementAppears();
        expect(browser.getCurrentUrl()).toEqual(url);
        browser.driver.sleep(3000);
        console.log('Youtube is accessed at: ' + youTubeAccess)
    };

    this.searchYoutube = function (key) {
        youTubeSearch = Date.now();
        search.sendKeys(key);
        access.click();
        browser.driver.sleep(3000);
        console.log('Search is at ' + youTubeSearch)
    };

    this.accessTrending = function () {
        trendingAccess = Date.now();
        leftList.click();
        browser.driver.sleep(3000);
        console.log('Trending is accessed at ' + trendingAccess)
    };

    this.playVideo = function () {
        firstVideoPlay = Date.now();
        videoElement.get(1).click();
        browser.driver.sleep(3000);
        console.log('First video is accessed at ' + firstVideoPlay)
    }

    this.playSecondVideo = function () {
        secondVideoPlay = Date.now();
        upNextVideo.get(0).click();
        browser.driver.sleep(4000);
        console.log('Second video is accessed at ' + secondVideoPlay)
    }



}
module.exports = Youtube;