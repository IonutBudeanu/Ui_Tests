
const url='https://www.google.com/';
const searchBarElement= element(by.id('lst-ib'));
const searchButton = element.all(by.className('lsb'));
const imagesElement=element.all(by.className('q qs'));
const background = element(by.id('viewport'));





function GoogleSearch() {

    let expectedConditions = protractor.ExpectedConditions;

    this.title=element(by.id('hplogo'));

    this.waitUntilElementAppears=function(){
        browser.wait(expectedConditions.presenceOf(this.title),5000);
    };


    this.accessGoogle = function () {
        googleAccess = Date.now();
        browser.get(url);
        this.waitUntilElementAppears();
        browser.driver.sleep(3000);
        console.log('Google is accessed at: ' + googleAccess)
        //expect(browser.getCurrentUrl()).toEqual(url);
    };

    this.searchGoogle=function(key){
        searchBarElement.sendKeys(key);
        browser.driver.sleep(3000);
        background.click()
        browser.driver.sleep(1000);
        searchStart = Date.now();
        searchButton.click();
        browser.driver.sleep(1000);
        console.log('Search is at: ' + searchStart)


        /*searchButton.each(searchButton => {
         if(searchButton.value == 'Căutare Google'){
         searchButton.click()
         }
         });*/
    }
    this.accessPhotos=function(){
        clickImages = Date.now();
        imagesElement.get(0).click();
        browser.driver.sleep(3000);
        console.log('Images section is accessed at: ' + clickImages)

    }



}
module.exports = GoogleSearch;
