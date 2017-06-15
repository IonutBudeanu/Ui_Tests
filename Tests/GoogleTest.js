/**
 * Created by andrei.filip on 6/14/2017.
 */
const GoogleObj=require('../PageObjects/GoogleSearch');

describe('Google page', function() {
    let obj=new GoogleObj();
    it('Access Google page', function() {
        //Access google page
        obj.accessGoogle();
    });
    it('Search Google', function() {
        obj.searchGoogle('firefox');
    });
   it('Access pictures', function() {
        //Access youtube page
        obj.accessPhotos();
    });
});