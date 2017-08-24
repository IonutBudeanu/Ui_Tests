/**
 * Created by andrei.filip on 6/14/2017.
 */
const GoogleObj=require('../PageObjects/GoogleSearch');

beforeAll(() => {
    browser.manage().window().maximize();
});

beforeEach(() => {
    browser.ignoreSynchronization = true;
});

afterEach(() => {
    browser.ignoreSynchronization = false;
});


describe('Google page', function() {
    let obj=new GoogleObj();
    it('Access Google page', function() {
        obj.accessGoogle();
    });
    it('Search Google', function() {
        obj.searchGoogle('Barack Obama');
    });
   it('Access pictures', function() {
        obj.accessPhotos();
    });
});