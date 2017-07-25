# Instagram-auto-followers

> A node-based program to get new free legit followers and likes

## Context/How it works

On Instagram, a lot of people just follow you or like your media when you had a first activity on their account (like or subscribe).
This program will simply like a random recent media from some random popular hashtag you can find in the hashtags.json file (which you can change according to your needs) every 1 to 2 minutes.

All of these "random" stuffs are to prevent getting detected by Instagram. In addition, you have every call 1.77% chance to have a 5min break ans 0.58% of chance to have a 10min break.

The process might be quite slow and you should not expect hundreds of new likes or subscribes everyday, the point is that you can just leave it running endlessly without worrying about getting banned by Instagram for spamming (at least, I never experienced this). Subscribers will come anyway.

## Install

1. Clone/download the repository
2. If you still don't have it : [install node](https://nodejs.org/)
3. Open folder in the terminal
4. Run `npm install` to install the package instagram-private-api from [huttarichard](https://github.com/huttarichard)
5. Copy the file credentials.json.example to credentials.json and type in your username and password for instagram
6. Run `npm start` and leave it running

Note : The console will display the username of the user who posted the media you just liked, and also "5min sleep" and "10min sleep" if they happen