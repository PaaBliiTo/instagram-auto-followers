var Client = require('instagram-private-api').V1;
var device = new Client.Device('lolo');
var storage = new Client.CookieMemoryStorage();

var hashtags = require('./hashtags.json');

Client.Session.create(device, storage, 'lorenzotutti6023', 'fabio22').then(function(data){
	unfollowAll(data)
})

followedBy = 1

function unfollowAll(session){
    var rand = ((Math.random()+41)*1000)
    setTimeout(function(){
        var caca = new Client.Feed.AccountFollowing(session, 5721138194)
        caca.get().then(function(data){
            console.log(data[followedBy].params.username)
            Client.Relationship.get(session, data[followedBy].id).then(function(data){
                if(data.params.followedBy == false){
                    Client.Relationship.destroy(session, data.accountId)
                    console.log('unfollowed')
                }
                else{
                    followedBy++;
                    console.log('not unfollowed');
                }
            })
        })
        

        unfollowAll(session)
    }, rand)
}