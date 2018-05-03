// load data
var friendArray = require("../data/friends.js");

// routing
module.exports = function (app) {
    // display JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    });

    // handles incoming survey results + compatibility logic
    app.post("/api/friends", function (req, res) {
        var newUserScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        // check thru current friends in array and compare scores
        for (var i = 0; i < friendArray.length; i++) {
            var totalDiff = 0;
            for (var j = 0; j < newUserScores.length; j++) {
                totalDiff += (Math.abs(parseInt(friendArray[i].scores[j]) - parseInt(newUserScores[j])));
            };
            scoresArray.push(totalDiff);
        };

        // find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            };
        };

        var newBff = friendArray[bestMatch];
        res.json(newBff);

        // push submission into friendArray
        friendArray.push(req.body);
    });
};