
const YoutubeObj=require('../PageObjects/Youtube');

beforeAll(() => {
    browser.manage().window().maximize();
});

beforeEach(() => {
    browser.ignoreSynchronization = true;
});

afterEach(() => {
    browser.ignoreSynchronization = false;
});

describe('Youtube page', function() {
    let YouPage=new YoutubeObj();
    it('Access Youtube page', function() {
        YouPage.accesYoutube();
    });
    it('Access trending page', function() {
        YouPage.accessTrending();
    });
    it('Search Mozilla videos', function() {
        YouPage.searchYoutube('sarah jeffery recorder');
    });
    it('Play video', function() {
        YouPage.playVideo();
    });
    it('Play 2nd video', function() {
        YouPage.playSecondVideo();
    });
});

