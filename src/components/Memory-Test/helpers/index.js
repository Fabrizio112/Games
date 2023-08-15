export const resetClassNames = () => {
    document.querySelectorAll("input").forEach((el) => {
        el.disabled = false
        el.classList.remove("matched")
        el.classList.add("disabled")
    })
}