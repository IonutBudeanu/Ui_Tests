/**
 * Created by andrei.filip on 6/15/2017.
 */
const Amazon = require('../PageObjects/Amazon');

beforeAll(() => {
    browser.manage().window().maximize();
});

beforeEach(() => {
    browser.ignoreSynchronization = true;
});

afterEach(() => {
    browser.ignoreSynchronization = false;
});

describe('Google page', function () {
    let obj = new Amazon();
    it('Access Amazon page', function () {
        obj.accessAmazon();
    });
    it('Search in Amazon page', function () {
        obj.search('lord of the rings');
    });
    it('Select a video as a result of the search', function () {
        obj.accessVideo();
    });

    it('Navigate back to amazon results', function () {
        obj.backAction();
    });

    it('Select second non-ad result: book from search results', function () {
        obj.accessBook();
    });
});