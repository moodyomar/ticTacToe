window.onload = () => {
    init();
}

const init = () => {
    const squares = document.querySelectorAll('.sq');
    squares.forEach(sq => {
        sq.addEventListener('click', () => {
            clicked(sq);
            gameOver(squares);
        })
    })
}

const clicked = (sq) => {
    checkIfClicked(sq)
}
const checkIfClicked = (sq) => {

    if (sq.classList.contains('clicked')) {
        alert('Choose another cell')
    } else {
        checkTurn(sq)
    }

}

const checkTurn = (sq) => {
    let gameStatus = document.querySelector('h1')
    if (turn % 2 != 0) {
        symbol = xSVG
        sq.classList.add('x')
        gameStatus.innerHTML = `It's <span style="color: red;">O</span> turn now`
    } else {
        symbol = oSVG
        sq.classList.add('o')
        gameStatus.innerHTML = `It's <span style="color: blue;">X</span> turn now`
    }
    turn++;
    sq.innerHTML = symbol;
    sq.classList.add('clicked')
}

const gameOver = (squares) => {
    victory(squares);
    resetGame();
}

const resetGame = () => {
    let hasClicked = document.querySelectorAll('.clicked');
    if (hasClicked.length == 9 || gameFinished == true) {
        setTimeout(() => {
            // alert('reset func KABOOM')
            hasClicked.forEach(sq => {
                sq.classList.remove('clicked','x','o')
                sq.innerHTML = '';
                turn = 1;
                document.querySelector('h1').innerHTML = ''
            })
        }, 300);
    }
    gameFinished = false
}

const victory = (squares) => {

    // let sq1 = squares[0],
    //     sq2 = squares[1],
    //     sq3 = squares[2],
    //     sq4 = squares[3],
    //     sq5 = squares[4],
    //     sq6 = squares[5],
    //     sq7 = squares[6],
    //     sq8 = squares[7],
    //     sq9 = squares[8]
  
    gameChecker('x')
    gameChecker('o')

}

const gameChecker = (player) => {
    if(sq1.classList.contains(player) && sq2.classList.contains(player) && sq3.classList.contains(player)

    || sq4.classList.contains(player) && sq5.classList.contains(player) && sq6.classList.contains(player)

    || sq7.classList.contains(player) && sq8.classList.contains(player) && sq9.classList.contains(player)

    || sq1.classList.contains(player) && sq4.classList.contains(player) && sq7.classList.contains(player)

    || sq2.classList.contains(player) && sq5.classList.contains(player) && sq8.classList.contains(player)

    || sq3.classList.contains(player) && sq6.classList.contains(player) && sq9.classList.contains(player)

    || sq1.classList.contains(player) && sq5.classList.contains(player) && sq9.classList.contains(player)

    || sq3.classList.contains(player) && sq5.classList.contains(player) && sq7.classList.contains(player)
    ){
        setTimeout(() =>{
            alert(`Player ${player} has WON !`)
            gameFinished = true
            resetGame()
        },600)  
    }
}

//  Var hoisted variables
var symbol = '',
    turn = 1,
    gameFinished = false,
    xSVG = `<svg class="xSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/></svg>`,
    oSVG = `<svg class="oSvg" version="1.0" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1280.000000 1234.000000"
    preserveAspectRatio="xMidYMid meet">
    
    <g transform="translate(0.000000,1234.000000) scale(0.100000,-0.100000)"
    stroke="none">
    <path d="M5476 12015 c-104 -8 -190 -15 -192 -17 -1 -2 4 -78 13 -170 9 -91
    14 -172 10 -180 -3 -9 -33 -19 -79 -27 -293 -51 -722 -170 -1034 -287 -1013
    -380 -1882 -999 -2576 -1834 -517 -623 -927 -1375 -1182 -2170 -70 -218 -159
    -541 -151 -548 3 -3 104 -29 225 -57 122 -29 223 -54 225 -57 3 -2 -4 -87 -16
    -189 -27 -240 -37 -816 -20 -1058 62 -837 270 -1601 638 -2336 452 -902 1161
    -1723 2013 -2331 176 -126 507 -338 629 -403 18 -10 25 -2 77 91 32 57 59 105
    61 108 4 5 0 6 198 -78 1201 -510 2537 -607 3838 -281 865 218 1703 622 2447
    1183 152 115 410 324 410 333 0 5 -39 50 -142 169 -18 20 -16 22 70 116 648
    704 1123 1564 1371 2478 362 1342 277 2769 -251 4160 -39 102 -73 188 -77 192
    -4 4 -76 -21 -161 -55 -85 -35 -174 -71 -197 -80 l-42 -16 -85 155 c-206 372
    -454 731 -734 1057 -214 251 -614 631 -887 843 -931 723 -2062 1161 -3310
    1279 -236 23 -840 28 -1089 10z m-42 -280 c3 -50 2 -70 -3 -54 -5 15 -11 69
    -14 120 -4 62 -3 80 2 54 5 -22 11 -76 15 -120z m1431 -1416 c1233 -245 2285
    -944 2985 -1984 207 -307 421 -731 561 -1109 24 -65 49 -120 55 -123 6 -2 84
    21 174 52 90 30 167 51 171 47 10 -10 45 -230 64 -397 32 -284 35 -740 5
    -1016 -117 -1106 -571 -2056 -1351 -2826 -200 -197 -428 -393 -591 -507 -19
    -13 -17 -17 41 -97 34 -45 61 -86 61 -90 0 -13 -158 -95 -333 -174 -416 -187
    -845 -313 -1297 -380 -402 -60 -931 -60 -1335 0 -681 102 -1360 370 -1967 778
    l-128 86 -52 -74 c-29 -41 -58 -74 -64 -74 -14 -1 -308 300 -400 409 -263 314
    -499 676 -659 1014 -481 1013 -580 2112 -295 3266 27 107 46 198 42 201 -4 4
    -77 26 -162 49 -85 24 -159 46 -164 51 -9 8 109 241 199 389 651 1075 1680
    1834 2887 2129 373 91 832 151 1159 151 l119 0 0 136 0 137 63 -7 c34 -4 130
    -20 212 -37z"/>
    </g>
    </svg>`;