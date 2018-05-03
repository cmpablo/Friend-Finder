// load data
var friendArray = require("../data/friends.js");

// routing
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    });

    app.post("/api/friends", function (req, res) {
        var newUserScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        // check thru current friends in array
        for (var i = 0; i < friendArray.length; i++) {
            var scoreDiff = 0;
            // compare scores/friends
            for (var j = 0; j < newUserScores.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendArray[i].scores[j]) - parseInt(newUserScores[j])));
            };
            scoresArray.push(scoreDiff);
        };

        // find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if(scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            };
        };

        var newBff = friendArray[bestMatch];
        res.json(newBff);

        // push submission into friendArray array
        friendArray.push(req.body);
    });
};



