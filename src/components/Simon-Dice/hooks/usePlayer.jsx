import confetti from "canvas-confetti"
import { useState } from "react"

export const usePlayer = (sequence, changeTurn, addRandomPlay, changeGameOver) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlay, setIsPlay] = useState(false)

    const changeCurrentIndex = () => {
        setCurrentIndex(currentIndex + 1)
    }
    const changePlay = () => {
        setIsPlay(true)
    }
    const resetIsPlay = () => {
        setIsPlay(false)
    }
    const resetCurrentIndex = () => {
        setCurrentIndex(0)
    }
    const jugadaDelUsuario = (index) => {
        if (isPlay) {
            if (sequence[currentIndex] === index) {
                if (currentIndex === sequence.length - 1) {
                    setTimeout(() => {
                        resetCurrentIndex()
                        changeTurn()
                        addRandomPlay()
                    }, 300)
                } else {
                    changeCurrentIndex()
                }
            } else {
                changeGameOver()
                confetti()
            }
        }
    }

    return [isPlay, changePlay, resetIsPlay, resetCurrentIndex, jugadaDelUsuario]
}