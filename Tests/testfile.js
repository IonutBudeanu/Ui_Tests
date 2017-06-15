
const YoutubeObj=require('../PageObjects/Youtube');

describe('Youtube page', function() {
    let YouPage=new YoutubeObj();
    it('Access Youtube page', function() {
        //Access youtube page
        YouPage.accesYoutube();
    });
    it('Access trending page', function() {
        //Access youtube page
        YouPage.accessTrending();
    });
    it('Search Mozilla videos', function() {
        //Access youtube page
        YouPage.searchYoutube();
    });
});

