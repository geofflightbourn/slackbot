module.exports = function(robot) {

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/badger/i, function(response) {
		response.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
	})

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
