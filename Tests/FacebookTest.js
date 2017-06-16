/**
 * Created by andrei.filip on 6/16/2017.
 */



const Facebook=require('../PageObjects/Facebook');

describe('Facebook flow', function() {
    let obj=new Facebook();
    it('Access Facebook page', function() {
        obj.accesFacebook();
    });
    it('Access Group page', function() {
        obj.accesGroup();
    });

});