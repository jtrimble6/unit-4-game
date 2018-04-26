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
        name: "Steve Austin",
        healthPoints: 100,
        attackPoints: 17,
        defensePoints: 6,
        iconPath: "assets/images/img1Austin.jpg",
    }

    var theRock = {
        name: "The Rock",
        healthPoints: 115,
        attackPoints: 16,
        defensePoints: 7,
        iconPath: "assets/images/img2Rock.jpg",
    }

    var hulkHogan = {
        name: "Hulk Hogan",
        healthPoints: 120,
        attackPoints: 14,
        defensePoints: 8,
        iconPath: "assets/images/img3Hogan.jpg",
    }

    var bookerT = {
        name: "Booker T",
        healthPoints: 95,
        attackPoints: 19,
        defensePoints: 6,
        iconPath: "assets/images/img4Booker.jpg",
    }

    //WRESTLER ARRAY 
    var wweWrestlers = [steveAustin, theRock, hulkHogan, bookerT];

    function playerChosen() {
        for (var i=0; i < wweWrestlers.length; i++) {
            if (wweWrestlers[i].name !== playerWrestler.name) {
                $(".enemyWrestler").append('<div class = "col-md-3 cont"><img src="' + wweWrestlers[i].iconPath + '"class="btn btn-primary bouton-image monBouton image enemyWrestler" data-obj="' + wweWrestlers[i].name + '"></div>');
                
            }
        }
    }

    // GAME LOOP
    $(document).ready(function (){

    $(".availableWrestler").on("click", function() {
        playerWrestler = eval($(this).data("obj"));
        controlAvailable.hide();
        $(".playerWrestler").html('<img src="' + playerWrestler.iconPath + '" class="btn btn-primary bouton-image monBouton image playerWrestler" data-obj="' + playerWrestler.name + '">');
        console.log(playerWrestler); 
        playerChosen();
    });

    $(".enemyWrestler").on("click", function() {
        computerWrestler = eval($(this).data("obj"));
        controlEnemies.show();
        console.log(this);
        console.log(computerWrestler);
        // $(".defenderWrestlers").html('<img src="' + computerWrestler.iconPath + '" class="btn btn-primary bouton-image monBouton image playerWrestler" data-obj="' + computerWrestler.name + '">');
        // console.log(computerWrestler); 

    });     
    
    








})
// END GAME LOOP
