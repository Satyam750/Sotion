'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import Logo from './logo'
import { useScollTop } from '@/hooks/use-scroll-top'
import { ModeToggle } from '@/components/mode-toggle'
import { useConvexAuth } from 'convex/react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import Link from 'next/link'

const Navbar = () => {
    const scrolled = useScollTop();
    const {isAuthenticated, isLoading} = useConvexAuth()

  return (
    <div className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
    )}>
        <Logo/>
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
             {isLoading && (
                <Spinner/>
             )}
             {!isAuthenticated && !isLoading &&(
                <>
                <SignInButton mode='modal'>
                    <Button variant="ghost" size="sm">
                        Login
                    </Button>
                </SignInButton>
                <SignInButton mode='modal'>
                    <Button  size="sm">
                        Get Sotion  Free
                    </Button>
                </SignInButton>
                </>
             )}
             {isAuthenticated && !isLoading && (
                <>
                <Button>
                    <Link href="/documents">
                        Enter Sotion
                    </Link>
                </Button>
                <UserButton afterSignOutUrl='/'/>
                </>
             )}
            <ModeToggle/>
        </div>


    </div>
  )
}

export default Navbar