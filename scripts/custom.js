module.exports = function(robot) {

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/hello/i, function(response) {
		response.send("Hi, how are you? 1 - good or 2 - bad?")
	})

	if (robot.hear(/1/i) {
		response()
		response.send("Great!")
	}	else if (robot.hear(/2/i) {
		response()
		respond.send("Sorry to hear that...")
	}

	robot.hear(/i like (.+)/i, function(response) {
		var like = response.match[1]
		// response.reply() will have the robot at-mention you when it responds
		response.reply('I also like ' + like)
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/call on geoff/i, function(response) {
		var user = robot.brain.userForName('geoff')
		response.reply('Call on ' + user.real_name + '!')
	})



}
