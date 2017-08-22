/**
 * Created by andrei.filip on 6/14/2017.
 */
/**
 * Created by andrei.filip on 6/14/2017.
 */
const GmailObj=require('../PageObjects/Gmail');

beforeAll(() => {
    browser.manage().window().maximize();
});

beforeEach(() => {
    browser.ignoreSynchronization = true;
});

afterEach(() => {
    browser.ignoreSynchronization = false;
});

describe('GoogleMail page', function() {
    let obj=new GmailObj();
    it('Access GoogleMail page', function() {
        //Access google page
        obj.accessGoogleMail();

    });
    it('Access Gmail', function() {
        obj.accessEmail();
    });

    it('Access Youtube Link from Email Html', function() {
        obj.accessYoutubeLink();
    });

});