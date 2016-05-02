module.exports = function(robot) {


	robot.hear(/hello/i, function(response) {
		response.send("Hi, how are you? 1 - Happy or 2 - Sad?")
	})

  robot.hear(/(1|2)/i, function(response) {
    if (response.match[1] === '1') {
       response.send("Great!")
   } else if (response.match[2] === '2') {
     robot.http("http://www.edgewoodyachtclub.com/wp-content/uploads/2016/01/beer.gif")
     .get() (err, res, body)
      respond.send("Sorry to hear that...")
   }
  })

	robot.hear(/i like (.+)/i, function(response) {
		var like = response.match[1]
		response.reply('I also like ' + like)
	})

	robot.respond(/greet geoff/i, function(response) {
		var user = robot.brain.userForName('geoff')
		response.reply('Call on ' + user.real_name + '!')
	})

  robot.hear(/give me people/i, function(response) { //gives list of classmates
    var userIds = Object.keys(robot.brain.data.users);
    var listOfUsernames = userIds.map(function(userId) { return robot.brain.data.users[userId].name })
    response.reply(listOfUsernames)
  })



}
