import { ReactNode } from "react";
import ActiveWrapper, { ActiveWrapperProps } from "./ActiveWrapper";
import { Link, LinkComponent, LinkProps, RegisteredRouter, useRouterState } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

const ActivatedLink: LinkComponent<Omit<ActiveWrapperProps, 'children' | 'activeCriterion'>> = (props) => {
    const { location } = useRouterState()
    const path = location.href
    return <ActiveWrapper {...props} activeCriterion={() => path == props.to}>
        <Link {...props}/>
    </ActiveWrapper>
}

export default ActivatedLink