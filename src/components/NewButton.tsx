import { ButtonHTMLAttributes } from "react"
import s from "./NewButton.module.css"

type NewPropsType = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
}

type NewButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { color?: string, disabled?: boolean } & Omit<NewPropsType, "color3" | "color4">;

export function NewButton(props: NewButtonProps) {
    const { onClick, children, className, color, disabled, ...restProps } = props
    // const finalClassName = s.button
    //     + (disabled
    //         ? " " + s.disabled
    //         : color === "red"
    //             ? " " + s.red
    //         : color === "secondary"
    //             ? " " + s.secondary
    //             : " " + s.default)
    //     + (className
    //     ? " " + className : "")
    const finalClassName = `
        ${s.button}
        ${color === "red" ? s.red : color==="secondary" ? s.secondary : s.default}
        ${disabled ? s.disabled : ""}
    `

    return (
        <button onClick={onClick} className={finalClassName}>{children}</button>
    )
}