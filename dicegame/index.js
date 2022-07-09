function roll() {

    var numA = Math.floor((Math.random() * 6) + 1);
    var numB = Math.floor((Math.random() * 6) + 1);
    var result = document.getElementById("result");

    var changeA = document.getElementsByTagName("img")[0].setAttribute("src", "images/dice"+numA+".png")
    var changeB = document.getElementsByTagName("img")[1].setAttribute("src", "images/dice"+numB+".png")

    if (numA > numB) {
        result.innerHTML = "Ha ganado el <span class='player1'>Jugador 1</span>";
        changeA;
        changeB;
    } else if (numB > numA) {
        result.innerHTML = "Ha ganado el <span class='player2'>Jugador 2</span>";
        changeA;
        changeB;
    } else {
        result.innerHTML = "Ha habido un empate";
        changeA;
        changeB;
    }
}