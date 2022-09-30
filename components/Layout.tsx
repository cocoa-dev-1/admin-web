import { ScriptProps } from "next/script";
import NavBar from "./NavBar";
import { classes } from "../utils/class";

const Layout = ({ children }: ScriptProps) => {
  return (
    <div className={classes("w-full", "p-0")}>
      <NavBar></NavBar>
      {children}
    </div>
  );
};

export default Layout;
