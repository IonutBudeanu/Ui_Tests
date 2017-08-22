/**
 * Created by andrei.filip on 6/16/2017.
 */



const Facebook = require('../PageObjects/Facebook');

beforeAll(() => {
    browser.manage().window().maximize();
});

beforeEach(() => {
    browser.ignoreSynchronization = true;
});

afterEach(() => {
    browser.ignoreSynchronization = false;
});

describe('Facebook flow', function () {
    let obj = new Facebook();
    it('Access Facebook page', function () {
        obj.accesFacebook();
    });
    it('Access Group page', function () {
        obj.accesGroup();
    });
    it('Access Home page', function () {
        obj.goToHome();
    });
    it('Access User page', function () {
        obj.accessUser();
    });

});