var Client = require('instagram-private-api').V1;
var device = new Client.Device('lolo');
var storage = new Client.CookieMemoryStorage();
var credentials = require('./credentials.json')
var hashtags = require('./hashtags.json');

var followed = []
var d = new Date();
var startTime = d.getTime()

Client.Session.create(device, storage, credentials.username, credentials.password).then(function(data){
    like(data)
    follow(data)
})

function like(session){

    var t = new Date();
    var actualTimeLike = t.getTime()
    if((actualTimeLike - startTime) > 43200000){
        var rand = (Math.random()*(14400000-10800000)+10800000)*1000
        console.log("3 to 4h sleep")
        d = new Date()
        startTime = d.getTime()
    }
    else{
        var rand = (Math.random()*(120-60)+60)*1000
        if(rand > 118000){
            rand = (Math.random()*(360-300)+300)*1000
            console.log("5min sleep")
        }
        else if(rand > 119500){
            rand = (Math.random()*(600-500)+500)*1000
            console.log("10min sleep")
        }
    }
    

    setTimeout(function(){
        var tag = hashtags[Math.floor(Math.random()*hashtags.length)]
        var tagMedia = new Client.Feed.TagMedia(session, tag);
        tagMedia.get().then(function(data){
            var media = data[0]
            console.log(media.account.params.username)
            user = media.account.id;
            Client.Like.create(session, media.id)
        })

        // setTimeout(unfollow, 1200000, session)
        like(session)
    }, rand)
}

function follow(session){
    var y = new Date();
    var actualTimeFollow = y.getTime()
    if((actualTimeFollow - startTime) > 43200000){
        var rand = (Math.random()*(14400000-10800000)+10800000)*1000
        console.log("3 to 4h sleep")
        d = new Date()
        startTime = d.getTime()
    }
    else {
        var rand = (Math.random()*(1800000-1200000)+1200000)*1000
    }

    setTimeout(function(){
        var tag = hashtags[Math.floor(Math.random()*hashtags.length)]
        var tagMedia = new Client.Feed.TagMedia(session, tag);
        tagMedia.get().then(function(data){
            var media = data[0]
            user = media.account.id;
            Client.Relationship.create(session, user)
            console.log("follow")
            // followed.push(user) 
        })

        follow(session)
    }, rand)
}

function unfollow(session){
    Client.Relationship.get(session, followed[0]).then(function(data){
        if(data.params.followedBy == false){
            Client.Relationship.destroy(session, followed[0]);
            // console.log('unfollowed');
        }
        else{
            console.log('not unfollowed');
        }
        followed.splice(0,1);
    });
}
