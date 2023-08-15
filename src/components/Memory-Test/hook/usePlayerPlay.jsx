import { useState } from "react"

export const usePlayerPlay = (incrementCount, changeTurn) => {
    const [actualPlay, setActualPlay] = useState(null)
    const [currentPlay, setCurrentPlay] = useState(1)

    const selectCard = (e) => {
        let cardSelected = e.target
        cardSelected.classList.remove("disabled")
        if (currentPlay === 1) {
            setActualPlay(cardSelected)
            setCurrentPlay(currentPlay + 1)
        }
        if (currentPlay === 2) {
            let cardPrev = actualPlay
            if (actualPlay === cardSelected) {
                setTimeout(() => {
                    cardSelected.classList.add("disabled")
                    cardPrev.classList.add("disabled")
                    setActualPlay(null)
                    setCurrentPlay(1)
                    changeTurn()
                    return
                }, 300)

            } else {
                if (actualPlay.getAttribute("color") === cardSelected.getAttribute("color")) {
                    setTimeout(() => {
                        cardSelected.classList.add("matched")
                        cardPrev.classList.add("matched")
                        cardPrev.disabled = true
                        cardSelected.disabled = true
                        setActualPlay(null)
                        setCurrentPlay(1)
                        incrementCount(2)
                        changeTurn()
                    }, 300)
                } else {
                    setTimeout(() => {
                        cardSelected.classList.add("disabled")
                        cardPrev.classList.add("disabled")
                        setActualPlay(null)
                        setCurrentPlay(1)
                        changeTurn()
                    }, 300)

                }
            }

        }
    }
    return [selectCard]
}