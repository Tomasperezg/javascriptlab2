let user = prompt("Enter your character name?");
function setup() {

    startCombat(wins = 0, grantHP = 10, userHp = 40, gameOver = 3);
}

function startCombat(playerHp, grantHp, wins, gameOver) {
    let goOn = true;
    console.log(`Combat is starting!`);
    while (goOn === true) {
        let choice = prompt("Do you wish to attack (a) or quit (q)?");
        if (choice === "a") {
            let userDamage = getDamage(1, 5);
            let grantDamage = 2;

            playerHp -= grantDamage;
            grantHp -= userDamage;
            console.log( user + ` takes ${grantDamage} damage`);
            console.log(`Grant takes ${userDamage} damage`);

            goOn = isGameContinue(playerHp, grantHp);
        }
        else if(choice === "q"){
            console.log("Goobye! Thanks for Playing!");
            break;
        }
        else{
            alert("Hey I don't understand, let's try that again!");
            console.log("Hey I don't understand, let's try that again!");
        }
    }
}

function isGameContinue(playerHp, grantHp) {
    console.log(user + ` has ${playerHp} left`);
    console.log(`Grant has ${grantHp} left`);
    if (playerHp <= 0) {
        console.log(`Grants wins, you are defeated, game over`);
        return false;
    }

    return true;
}

function getDamage(min, max) {
    let damage = Math.floor(Math.random() * max) + min;
    return damage;
}

setup();
