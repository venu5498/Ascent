import React from 'react'
import { SignedOut, SignedIn, SignInButton, UserButton} from '@clerk/nextjs';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';


const Header = async() => {
    await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto p-4 py-4 flex justify-between items-center">
            <Link href="/">
                <Image src={"/logo.png"}
                alt="ascent logo"
                height={60}
                width={200}
                className="h-12 w-auto object-contain"
                />
            </Link>

            <div className="flex items-center space-x-4">

                <SignedIn>
                    <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                        <Button variant="outline" className="flex items-center gap-2">
                            <LayoutDashboard size={18}/>
                            <span className="hidden md:inline">Dashboard</span>
                        </Button>
                    </Link>

                    <Link href={"/transaction/create"}>
                        <Button className="flex items-center gap-2">
                            <PenBox size={18}/>
                            <span className="hidden md:inline">Add Transaction</span>
                        </Button>
                    </Link>
                </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                    <UserButton appearance={{
                        elements:{
                            avatarBox:"w-10 h-10",
                        }
                    }} />
                </SignedIn>


            </div>
        </nav>
    </div>
  )
}

export default Header;