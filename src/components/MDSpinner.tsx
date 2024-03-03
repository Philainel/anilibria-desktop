export function MDSpinner({ className, diameter = 65, strokeWidth = 6, stroke="#F5E9E2" }: { className?: string, diameter?: number, strokeWidth?: number, stroke?: string }) {
    return <svg className={`md-spinner ${className}`} width={`${diameter}px`} height={`${diameter}px`} viewBox={`0 0 ${diameter + 1} ${diameter + 1}`} xmlns="http://www.w3.org/2000/svg" stroke={stroke}>
        <circle className="md-spinner__path" fill="none" strokeWidth={strokeWidth} cx={diameter / 2} cy={diameter / 2} r={(diameter - 5) / 2}></circle>
    </svg>
}