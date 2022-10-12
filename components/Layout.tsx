import { ScriptProps } from "next/script";
import NavBar from "./NavBar";
import { classes } from "../utils/class";
import { FunctionComponent } from "react";

const Layout: FunctionComponent<ScriptProps> = ({ children }) => {
  return (
    <div className={classes("w-full", "p-0")}>
      <NavBar></NavBar>
      {children}
    </div>
  );
};

export default Layout;
