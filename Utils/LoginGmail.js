/**
 * Created by andrei.filip on 6/14/2017.
 */

const userNameElement=element(by.id('identifierId'));
const password=element(by.id('password'));
const next=element(by.className('RveJvd snByac'));

function LoginGmail() {


    this.userName='andrei.filip@softvision.ro';
    this.password='slackwarE112';
    this.login=function(){
      userNameElement.sendKeys(this.userName);
      next.click();
      browser.driver.sleep(2000);
      password.sendKeys(this.password);
      browser.driver.sleep(3000);
      next.click();
      browser.driver.sleep(2000);


    }




}
module.exports=LoginGmail;