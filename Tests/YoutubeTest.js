
const YoutubeObj=require('../PageObjects/Youtube');

describe('Youtube page', function() {
    let YouPage=new YoutubeObj();
    it('Access Youtube page', function() {
        YouPage.accesYoutube();
    });
    it('Access trending page', function() {
        YouPage.accessTrending();
    });
    it('Search Mozilla videos', function() {
        YouPage.searchYoutube();
    });
});

