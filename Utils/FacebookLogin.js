

const userNameElement=element(by.id('email'));
const password=element(by.id('pass'));
const next=element(by.id('loginbutton'));

function LoginFacebook() {


    this.userName='vfyzmfs_narayanansky_1472625961@tfbnw.net';
    this.password='5v5w64mvb4a';
    this.login=function(){
        userNameElement.sendKeys(this.userName);
        browser.driver.sleep(2000);
        password.sendKeys(this.password);
        browser.driver.sleep(3000);
        next.click();
        browser.driver.sleep(2000);


    }


}
module.exports=LoginFacebook;