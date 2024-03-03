import React from "react"
import { ReactElement, ReactNode } from "react"

export type ActiveWrapperProps = { commonClass?: string, activeClass?: string, inactiveClass?: string, activeCriterion?: () => boolean, children: ReactElement<{ className?: string }> }

export default ({ commonClass, activeClass, inactiveClass, activeCriterion, children: child }: ActiveWrapperProps) => {
    const active = activeCriterion && activeCriterion()
    return React.cloneElement(child, { className: `${commonClass} ${active ? activeClass : inactiveClass}` })
}