
const url='https://www.google.com/';
const searchBarElement= element(by.id('lst-ib'));
const searchButton = element.all(by.className('lsb'));
const imagesElement=element(by.className('hdtb-mitem hdtb-imb'));





function GoogleSearch() {

    let expectedConditions = protractor.ExpectedConditions;

    this.title=element(by.id('hplogo'));

    this.waitUntilElementAppears=function(){
        browser.wait(expectedConditions.presenceOf(this.title),5000);
    };


    this.accessGoogle = function () {
        browser.get(url);
        this.waitUntilElementAppears();
        browser.driver.sleep(3000);
        //expect(browser.getCurrentUrl()).toEqual(url);
    };

    this.searchGoogle=function(key){
        searchBarElement.sendKeys(key);
        browser.driver.sleep(3000);
        searchButton.click();
        browser.driver.sleep(3000);

        /*searchButton.each(searchButton => {
         if(searchButton.value == 'Căutare Google'){
         searchButton.click()
         }
         });*/
    }
    this.accessPhotos=function(){
        imagesElement.click();
        browser.driver.sleep(3000);
    }



}
module.exports = GoogleSearch;
