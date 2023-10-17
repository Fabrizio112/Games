import { useEffect, useState } from "react";
import SimonSquare from "./SimonSquare";
import { useNavigate } from "react-router-dom";
import { useSequence } from "../hooks/useSequence";
import { usePlayer } from "../hooks/usePlayer";
import { useCount } from "../hooks/useCount";
import { useGameOver } from "../hooks/useGameOver";

function SimonDiceApp() {
    const navigate = useNavigate()
    const handleNextLevel = () => {
        if (isPlay === false) {
            changePlay()
            addRandomPlay()
        }
    }
    useEffect(() => {
        handleNextLevel()
    }, [])
    const handleStartGame = () => {
        changeSequence([])
        resetTurn()
        resetCurrentIndex()
        resetIsPlay()
        resetGameOver()
        handleNextLevel()
    }

    const [changeGameOver, gameOver, resetGameOver] = useGameOver()
    const [turnCount, changeTurn, resetTurn] = useCount()
    const [sequence, changeSequence, addRandomPlay, redSquare, blueSquare, greenSquare, yellowSquare] = useSequence(handleNextLevel)
    const [isPlay, changePlay, resetIsPlay, resetCurrentIndex, jugadaDelUsuario] = usePlayer(sequence, changeTurn, addRandomPlay, changeGameOver)


    return (
        <>
            <button onClick={() => navigate(-1)} className="btn-link">Back</button >
            <section>
                <header>
                    <h1>Simon Says</h1>
                    <h3>Turn {turnCount}</h3>
                </header>
                <main>
                    <SimonSquare id={0} ref={redSquare} jugadaDelUsuario={jugadaDelUsuario} />
                    <SimonSquare id={1} ref={blueSquare} jugadaDelUsuario={jugadaDelUsuario} />
                    <SimonSquare id={2} ref={greenSquare} jugadaDelUsuario={jugadaDelUsuario} />
                    <SimonSquare id={3} ref={yellowSquare} jugadaDelUsuario={jugadaDelUsuario} />
                </main>
                <section className={`modal-simon  ${gameOver === false && "oculto"}`}>
                    <div className="modal-card-simon">
                        <h1>Congratulations:</h1>
                        <h3>{turnCount} turns completed !!!</h3>
                        <button onClick={handleStartGame}>Play Again</button>
                    </div>
                </section>
            </section>
        </>);
}

export default SimonDiceApp;