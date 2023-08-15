import { useEffect, useState } from "react";
import MemorySquare from "./MemorySquare";
import ModalFinish from "./ModalFinish";
import ModalStart from "./ModalStart";
import { useNavigate } from "react-router-dom";
import { useStartGame } from "../hook/useStartGame";
import { useCountDisabled } from "../hook/useCountDisabled";
import { useColors } from "../hook/useColors";
import { usePlayerPlay } from "../hook/usePlayerPlay";
import { resetClassNames } from "../helpers";
import { useGameFinish } from "../hook/useGameFinish";
import { useTurn } from "../hook/useTurn";

function MemoryTest() {
    const navigate = useNavigate()
    const [changeTurn, resetTurn, turn] = useTurn()
    const [endGame, resetGameFinish, gameFinish] = useGameFinish()
    const [randomInitialColors, color, changeColor] = useColors()
    const [startGame, startGaming] = useStartGame()
    const [incrementCount, resetCount] = useCountDisabled(endGame)
    const [selectCard] = usePlayerPlay(incrementCount, changeTurn)



    const resetGame = () => {
        resetCount()
        resetClassNames()
        changeColor(randomInitialColors())
        resetGameFinish()
        resetTurn()
    }


    return (
        <>
            <button onClick={() => navigate(-1)} className="btn-link">Back</button >
            <section className="board-memory">
                {startGame === true && <ModalStart startGaming={startGaming} />}
                {color != null && color.map((color, index) => <MemorySquare key={index} color={color} selectCard={selectCard} />)}
                {(gameFinish === true && turn) && <ModalFinish resetGame={resetGame} turn={turn} />}
            </section>
        </>);
}

export default MemoryTest;