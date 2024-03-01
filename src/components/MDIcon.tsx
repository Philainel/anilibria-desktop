export function MDIcon({style = "outlined", children: icon, className}: {style?: "outlined", children: string, className?: string}) {
    return <span className={`material-symbols-${style} ${className}`}>{icon}</span>
}