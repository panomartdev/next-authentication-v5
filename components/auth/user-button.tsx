"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";
import React from 'react'
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "./logout-button";

const UserButton = () => {

  const user = useCurrentUser();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
              <AvatarImage src={user?.image || ""}/>
              <AvatarFallback className="bg-sky-500">
                  <FaUser className="text-white"/>
              </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <LogoutButton>
              <DropdownMenuItem className="cursor-pointer">
                  <ExitIcon className="h-4 w-4 mr-2"/>
                  Log out 
              </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
