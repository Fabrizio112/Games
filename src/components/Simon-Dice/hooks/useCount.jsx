import { useState } from "react"

export const useCount = () => {
    const [turnCount, setTurnCount] = useState(1) //Contador de Turnos
    const changeTurn = () => {
        setTurnCount(turnCount + 1)
    }
    const resetTurn = () => {
        setTurnCount(1)
    }

    return [turnCount, changeTurn, resetTurn]
}