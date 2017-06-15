/**
 * Created by andrei.filip on 6/14/2017.
 */
/**
 * Created by andrei.filip on 6/14/2017.
 */
const GmailObj=require('../PageObjects/Gmail');

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