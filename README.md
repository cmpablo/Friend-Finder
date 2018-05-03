# Friend-Finder

### What is this?

 https://git.heroku.com/vast-brushlands-90231.git

### How does it work?

Using the command line...

ask LIRI to get | command
--------------- | -----------------------------
the tweets of user See_Pablo | node liri.js my-tweets
song information from Spotify | node liri.js spotify-this-song Lets Go Crazy
movie information from OMDB | node liri.js movie-this John Wick
song information from Spotify of a mystery song (retrieved from external .txt doc) | node liri.js do-what-it-says

**Please Note:** LIRI's data is color-styled in a yellow, magenta, and blue theme. If a movie or song is not provided in the request, LIRI gets mad and returns data in red.

### Screenshots

Command: my-tweets
![my-tweets](/images/liri_tweets_chalk.jpg)

Command: spotify-this-song
![spotify-this](/images/liri_spotify_chalk.jpg)

Command: movie-this
![movie-this](/images/liri_movie_chalk.jpg)

Command: do-what-it-says
![do-what-it-says](/images/liri_doit_chalk.jpg)

### Technologies Applied

* HTML
* CSS
* node.js
* JavaScript
* Node Packages
    * Express (https://www.npmjs.com/package/express)
    * Body Parser (https://www.npmjs.com/package/body-parser)