import { useState } from "react"

export const useTurn = () => {
    const [turn, setTurns] = useState(0)
    const changeTurn = () => {
        setTurns(turn + 1)
    }
    const resetTurn = () => [
        setTurns(1)
    ]
    return [changeTurn, resetTurn, turn]
}