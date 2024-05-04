import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

function TopBar() {
  return (
    <nav className="fixed top-0 z-30 flex bg-white w-full items-center justify-between px-6 py-3">
      <Link href="/" className="flex items-center">
        <Image src="/assets/logo.png" alt="logo" height={30} width={30} />
        <p className="text-base hidden lg:block ml-2 text-black">A Cube</p>
      </Link>

      <div className="flex items-center gap-2">
        <div>
            <SignedIn>
              <SignOutButton redirectUrl="/sign-in">
                <p className="text-black cursor-pointer">Sign Out</p>
              </SignOutButton>
            </SignedIn>

          <SignedOut>
              <SignInButton>
                <p className="text-black cursor-pointer">Sign In</p>
              </SignInButton>
            </SignedOut>
        </div>
      </div>
    </nav>
  )
}

export default TopBar;
