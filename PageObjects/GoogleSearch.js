/**
 * Created by FilipA@M on 6/7/2017.
 */
const url='https://www.google.com/';
const searchBarElement= element(by.id('lst-ib'));
const searchButton= element(by.id('_fZl'))
const imagesElement=element(by.className('q qs'));





function GoogleSearch() {

    let expectedConditions = protractor.ExpectedConditions;

    this.title=element(by.id('hplogo'));

    this.waitUntilElementAppears=function(){
        browser.wait(expectedConditions.presenceOf(this.title),5000);
    };


    this.accessGoogle = function () {
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.driver.manage().window().maximize();
        this.waitUntilElementAppears();
        browser.driver.sleep(3000);
        //expect(browser.getCurrentUrl()).toEqual(url);
    };

    this.searchGoogle=function(key){

        searchBarElement.sendKeys(key);
        browser.driver.sleep(3000);
        searchButton.click();
        browser.driver.sleep(3000);

        expect()
    }
    this.accessPhotos=function(){
        imagesElement.click();
        browser.driver.sleep(3000);
    }



}
module.exports = GoogleSearch;/**
 * Created by andrei.filip on 6/8/2017.
 */
