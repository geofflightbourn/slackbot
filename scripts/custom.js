module.exports = function(robot) {


	robot.hear(/hello/i, function(response) {
		response.send("Hi, how are you? 1 - Happy or 2 - Sad?")
	})

  robot.hear(/(1|2)/i, function(response) {
    if (response.match[1] === '1') {
       response.send("Great!")
   } else if (response.match[1] === '2') {
     //robot.http("http://www.edgewoodyachtclub.com/wp-content/uploads/2016/01/beer.gif").get()(function(err, res, body){
      response.send("Sorry to hear that... have a beer.")
      response.send("http://www.edgewoodyachtclub.com/wp-content/uploads/2016/01/beer.gif")
     //})
    }
  })

	robot.hear(/i like (.+)/i, function(response) {
		var like = response.match[1]
		response.reply('I also like ' + like)
	})

	robot.hear(/greet random/i, function(response) { //greets a random classmate
    var userIds = Object.keys(robot.brain.data.users);
    var randomUsername = robot.brain.data.users[userIds[Math.floor(Math.random() * userIds.length)]].name
		response.reply('Greetings @' + randomUsername + '!' + ' Sent From Geoff' + "''" + 's bot.')
	})

  robot.hear(/give me people/i, function(response) { //gives list of classmate usernames
    var userIds = Object.keys(robot.brain.data.users);
    var listOfUsernames = userIds.map(function(userId) { return robot.brain.data.users[userId].name })
    response.reply(listOfUsernames)
  })

  robot.hear(/give me randoms/i, function(response) {// random classmate usernames
  var userIds = Object.keys(robot.brain.data.users);
  var randomUsername = robot.brain.data.users[userIds[Math.floor(Math.random() * userIds.length)]].name
  response.reply(randomUsername)
})


}
