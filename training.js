const rps = (p1, p2) => {
    switch (p1+p2) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            return 'Player 1 won!';
        case 'paperscissors':
        case 'rockpaper':
        case 'scissorsrock':
            return 'Player 2 won!';
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            return 'Draw!';
    }
}
rps('scissors','paper');