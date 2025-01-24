type ButtonType = {
    title: string
    onClick: ()=>void
    className?: string
}

export function Button({title, onClick, className}: ButtonType) {
    return (
        <button className={className} onClick={onClick}>{title}</button>
    )
}