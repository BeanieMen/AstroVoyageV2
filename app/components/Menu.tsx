"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MenuDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='bg-black' variant="outline" size="icon">
          <Menu />  
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => window.location.href = "/"}>
          Home
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => window.location.href = "/"}>
          Plate Solver (wip)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => window.location.href = "/solar-system"}>
          Solar System(wip)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
