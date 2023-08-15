import { useEffect, useRef, useState } from "react"

export const useSequence = (handleNextLevel) => {
    const [sequence, setSequence] = useState([])
    const redSquare = useRef(null)
    const blueSquare = useRef(null)
    const greenSquare = useRef(null)
    const yellowSquare = useRef(null)

    useEffect(() => {
        if (sequence.length > 0) {
            const showSequence = (index = 0) => {
                let ref = null
                if (sequence[index] === 0) ref = redSquare
                if (sequence[index] === 1) ref = blueSquare
                if (sequence[index] === 2) ref = greenSquare
                if (sequence[index] === 3) ref = yellowSquare

                setTimeout(() => {
                    ref.current.classList.add("is-active")
                    setTimeout(() => {
                        ref.current.classList.remove("is-active")
                        if (index < sequence.length) showSequence(index + 1)
                    }, 400)
                }, 400)
            }

            showSequence()
        }
        if (sequence.length == 0) {
            handleNextLevel()
        }
    }, [sequence])

    const addRandomPlay = () => {
        let play = Math.round(Math.random() * (0 - 3) + 3)
        const newSequence = [...sequence, play]
        changeSequence(newSequence)
    }
    const changeSequence = (any) => {
        setSequence(any)
    }
    return [sequence, changeSequence, addRandomPlay, redSquare, blueSquare, greenSquare, yellowSquare]

}