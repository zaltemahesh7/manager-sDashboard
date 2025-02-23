import React from "react";
import { Button } from "./ui/button";
import { BellIcon } from "lucide-react";

function Header() {
  return (
    <div className="relative flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-[#2D3047] text-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">HOURS</span>
            <nav className="flex items-center space-x-6">
              <Button variant="ghost" className="text-white">
                Dashboard
              </Button>
              <Button variant="ghost" className="text-white">
                Projects
              </Button>
              <Button variant="ghost" className="text-white">
                Team
              </Button>
              <Button variant="ghost" className="text-white">
                Clients
              </Button>
              <Button variant="ghost" className="text-white">
                Time
              </Button>
              <Button variant="ghost" className="text-white">
                Reports
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white">
              Mario
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
