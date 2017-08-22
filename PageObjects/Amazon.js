const config = require('../config.json');
let TIMEOUT = config.timeout;
const url = 'https://www.amazon.com/';
// const primeTry = element(by.className('nav-prime-try'))
const searchBar = element(by.id('twotabsearchtextbox'));
const submitButton = element(by.className('nav-input'));
const searchList = element.all(by.className('a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal'));


function Amazon() {
    let expectedConditions = protractor.ExpectedConditions;
    this.title = element(by.id('hplogo'));
    this.waitUntilElementAppears = function () {
        browser.wait(expectedConditions.presenceOf(this.title), TIMEOUT);
    }

    this.accessAmazon = function () {
        accessTime = Date.now();
        browser.get(url).then(() => {
            expect(browser.getCurrentUrl()).toEqual(url);
            console.log('Now: ' + accessTime);
        });
        browser.wait(expectedConditions.presenceOf(searchBar), TIMEOUT);
        //browser.driver.manage().window().setSize(1920, 1080) --> when maximize throws errors
    }

    this.search = function (key) {
        searchTime = Date.now();
        searchBar.sendKeys(key).then(() => {
            submitButton.click().then(() => {
                browser.executeScript('document.querySelector(\'.nav-input\').style.backgroundColor = "red"');
                browser.wait(expectedConditions.presenceOf(searchList), TIMEOUT);
                console.log('search is at: ' + searchTime)
            });
        });
    }
    this.accessVideo = function () {
        videoTime = Date.now();
        searchList.get(3).click().then(() => {
            console.log('Video is at : ' + videoTime);
        });
    }

    this.backAction = function () {
        backTime = Date.now();
        browser.navigate().back().then(() => {
            console.log('Back action is at : ' + backTime);
        });
    }

    this.accessBook = function () {
        bookTime = Date.now();
        searchList.get(4).click().then(() => {
            console.log('Book is at : ' + bookTime);
        });
    }
}

module.exports = Amazon

