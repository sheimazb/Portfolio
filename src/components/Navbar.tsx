import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ui/theme-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
function Navbar() {
  const { setTheme } = useTheme()
  return (
    <nav className="sticky top-0 left-0 w-full z-10  p-0  ">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
              <h1 className="font-bold">Chaima Zbidi</h1>
              </Link>
            </div>

            {/* Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              <Link to="/about">
                {" "}
                <Button variant={"link"}>Projects</Button>
              </Link>
              <Link to="/about">
                {" "}
                <Button variant={"link"}>About</Button>
              </Link>
              <Link to="/about">
                {" "}
                <Button variant={"link"}>Contact</Button>
              </Link>
            </div>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
