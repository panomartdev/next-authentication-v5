"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UserButton from "@/components/auth/user-button";

const Navbar = () => {

    const pathname = usePathname();

    return(
        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl max-w-[600px] w-full shadow-sm">
            <div className="flex gap-x-2">
                <Button asChild variant={pathname === "/server" ? "default" : "outline"}>
                    <Link href="/server" className="capitalize">
                        server
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/client" ? "default" : "outline"}>
                    <Link href="/client" className="capitalize">
                        client
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
                    <Link href="/admin" className="capitalize">
                        admin
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/settings" ? "default" : "outline"}>
                    <Link href="/settings" className="capitalize">
                        settings
                    </Link>
                </Button>
            </div>
            <UserButton/>
        </nav>
    )
}

export default Navbar