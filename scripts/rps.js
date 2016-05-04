module.exports = function(robot) {

  robot.hear(/rps/i, function(response) {
    response.send("rock, paper, or scissors")
  })

  robot.respond(/(rock|paper|scissors)/i, function(response) {
    var userChoice = response.match[1]
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }

    var compare = function(choice1, choice2) {
      if(choice1 === choice2) {
        return "The result is a tie!";
      }
      if(choice1 === "rock") {
        if(choice2 === "scissors") {
          return "rock wins";
        } else {
          return "paper wins";
        }
      }
    } // end compare

      if (choice1 === "paper") {
        if (choice2 === "rock") {
          return "paper wins";
        } else {
          if (choice2 === "scissors") {
            return "scissors wins";
          }
        }
      } //end paper

        if (choice1 === "scissors") {
          if (choice2 === "rock") {
            return "rock wins";
          } else {
            if (choice2 === "paper") {
              return "scissors wins";
            }
          }
        } // end scissors


    })

  }
