//Utility function for determining the winner
export function calculateWinner(squares)  {
    //winning combinations
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 1, 2],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 6],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}