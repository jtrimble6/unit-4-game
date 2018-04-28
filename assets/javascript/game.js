//GLOBAL FUNCTIONS

    // CONTROL WRESTLERS IN 'YOUR WRESTLER'
    var controlPlayer = $(".playerWrestler");
    
    // CONTROL WRESTLERS IN 'ENEMY WRESTLERS'
    var controlEnemy = $(".enemyWrestler");
   
    // CONTROL WRESTLERS IN 'DEFENDER'
    var controlDefender = $(".defenderWrestler");
    
    // CONTROL ENEMIES/DEFENDERS/FIGHT
    var controlAvailable = $(".availableWrestlers");
    var controlPlayer = $(".playerWrestler");
    var controlEnemies = $(".enemyWrestler");
    var controlDefenders = $(".defenderWrestlers");
    var controlFight = $(".fightSection");

    var playerWrestler;
    var computerWrestler;
    var enemyAttacking = false;
    var playerWon;
    var defenderWrestler = [];

    var steveAustin = {
        name: "steveAustin",
        healthPoints: 100,
        attackPoints: 17,
        counterAttackPoints: 15,
        iconPath: "assets/images/img1Austin.jpg",
    }

    var theRock = {
        name: "theRock",
        healthPoints: 115,
        attackPoints: 16,
        counterAttackPoints: 14,
        iconPath: "assets/images/img2Rock.jpg",
    }

    var hulkHogan = {
        name: "hulkHogan",
        healthPoints: 120,
        attackPoints: 14,
        counterAttackPoints: 16,
        iconPath: "assets/images/img3Hogan.jpg",
    }

    var bookerT = {
        name: "bookerT",
        healthPoints: 95,
        attackPoints: 19,
        counterAttackPoints: 12,
        iconPath: "assets/images/img4Booker.jpg",
    }

    //WRESTLER ARRAY 
    var wweWrestlers = [steveAustin, theRock, hulkHogan, bookerT];

    function playerChosen() {
        for (var i=0; i < wweWrestlers.length; i++) {
            if (wweWrestlers[i].name !== playerWrestler.name) {
                $(".enemyWrestlers").append('<div class = "col-md-3 cont computer"><img src="' + wweWrestlers[i].iconPath + '"class="btn btn-primary bouton-image monBouton image enemyWrestler" data-obj="' + wweWrestlers[i].name + '"><h3 class="playerStats">Health: '  + wweWrestlers[i].healthPoints + '</h3></div>');
                
            }
        }
    }

    // GAME LOOP
    $(document).ready(function (){

    //SELECT CHARACTER
    $(".availableWrestler").on("click", function() {
        playerWrestler = eval($(this).data("obj"));
        controlAvailable.hide();
        controlEnemy.show();
        $(".playerWrestler").html('<img src="' + playerWrestler.iconPath + '" class="btn btn-primary bouton-image monBouton image playerWrestler" data-obj="' + playerWrestler.name + '"><h3 class="playerStats">Health: '  + playerWrestler.healthPoints + '</h3>');
        console.log(playerWrestler); 
        playerChosen();
        
    });

    //SELECT OPPONENT
    $(".enemyWrestlers").on("click", ".enemyWrestler", function() {
        if (!enemyAttacking) {
        computerWrestler = eval($(this).data("obj")); 
        console.log(computerWrestler);
        $(".defenderWrestler").html('<img src="' + computerWrestler.iconPath + '" class="btn btn-primary bouton-image monBouton image" id="computerWrestler" data-obj="' + computerWrestler.name + '"><h3 class="playerStats">Health: '  + computerWrestler.healthPoints + '</h3>');
        $(this).hide();
        defenderWrestler.push(computerWrestler);
        enemyAttacking = true;
        }   
    });     
    
    //ON ATTACK
    $(".attack").on("click", function() {
        console.log("it works");
        if (enemyAttacking == true) {

            computerWrestler.healthPoints -= playerWrestler.attackPoints;
            playerWrestler.healthPoints -= computerWrestler.attackPoints;
            computerWrestler.healthPoints -= playerWrestler.counterAttackPoints;
            playerWrestler.healthPoints -= computerWrestler.counterAttackPoints;

            if (computerWrestler.healthPoints <= 0) {
                console.log("action");
                $("#computerWrestler").remove();
                enemyAttacking = false;
                if (defenderWrestler.length == 3) {
                    var computerAlive = false;
                    for (i = 0; i < defenderWrestler.length; i++) {
                        if (defenderWrestler[i].healthPoints > 0) {
                            computerAlive = true;
                        }
                    }
                    if (computerAlive == false) {
                        playerWon = true;
                        alert("YOU WIN");
                    }
                }
            }

            else {
                if (playerWrestler.healthPoints <= 0) {
                    console.logx("YOU LOSE");
                }
            }

        updatePlayerStats();
        updateComputerStats();


        }
    })

    function updatePlayerStats() {
        $("#playerStats").html("Health: " + playerWrestler.healthPoints)
    }

    function updateComputerStats() {
        $("#playerStats").html("Health: " + computerWrestler.healthPoints)
    }


})
// END GAME LOOP
