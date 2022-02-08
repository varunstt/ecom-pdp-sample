import React from "react";
import { Header } from "../header/Header";

/* PageWithHeader - Common header component with component passed as prop*/
export const PageWithHeader = ({component: Component}:{component: React.FC})  => {
    return <>
        <Header/>
        <Component/>
    </>
}