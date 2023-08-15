import { useEffect, useState } from "react"

export const useColors = () => {

    const randomInitialColors = () => {
        let colors = ["red", "red", "blue", "blue", "green", "green", "black", "black", "orange", "orange", "yellow", "yellow"]
        let initialColors = colors.sort(() => Math.random() - 0.5);
        return initialColors
    }
    useEffect(() => {
        let initialColors = randomInitialColors()
        setColors(initialColors)
    }, [])
    const [color, setColors] = useState(null)
    const changeColor = (value) => {
        setColors(value)
    }
    return [randomInitialColors, color, changeColor]
}