import { winnerPlays } from "./Constants"

export const checkWinner = (boardCheck) => {
    for (const combo of winnerPlays) {
        const [a, b, c] = combo
        if (boardCheck[a] && boardCheck[a] === boardCheck[b] && boardCheck[a] === boardCheck[c]) {
            return boardCheck[a]
        }
    }
    return null
}