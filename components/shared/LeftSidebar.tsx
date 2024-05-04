"use client"
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SIDE_BAR_ITEMS = [
  { name: 'Home', icon: 'home', path: '/' },
  { name: 'Search', icon: 'search', path: '/search' },
  { name: 'Notifications', icon: 'bell', path: '/notifications' },
  { name: 'Create Post', icon: 'plus', path: '/create-post' },
  { name: 'Profile', icon: 'profile', path: '/profile' },
]

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 z-20 bg-white	flex h-screen w-fit flex-col justify-between overflow-auto border-r pb-5 pt-28 max-md:hidden;">
      <div className="flex w-full text-black flex-1 flex-col gap-6 px-6">
        {SIDE_BAR_ITEMS.map(link => {
          const isActiveLink = (pathname.includes(link.path) && link.path !== '/') || (pathname === link.path);

          return(
            <Link href={link.path} key={link.name} className={`flex gap-2 p-4 rounded ${isActiveLink ? 'bg-blue-400' : ''}`}>
              <Image src={`/assets/${link.icon}.svg`} alt={link.name} width={24} height={24} />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          )}
        )}
      </div>
    </section>
  )
}

export default LeftSidebar;
