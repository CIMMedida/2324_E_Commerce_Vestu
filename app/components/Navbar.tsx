"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { client } from "../lib/sanity";

// Aqui se cambian los links de jonathan y esther

async function getLinks() {
  const query = `*[_type == "designer" ] {
        _id,
        name
      }`;

  const data = await client.fetch(query);

  const links = [{name: 'Home',  href: '/'}];

  data.map((user: any) => {
    links.push({name: user.name,   href: '/' + user.name})
  })
  return links;
}

// const links = [
//   {name: 'Home',  href: '/'},
//   {name: 'Men',   href: '/Men'},
//   {name: 'Women', href: '/Women'},
//   {name: 'Teens', href: '/Teens'},
// ]
export default async function Navbar() {
  const pathname = usePathname()
  const { handleCartClick } = useShoppingCart();
  const links = await getLinks();

  return (
    <header style={{height: 60, marginTop: 40}} className="mb-8">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            La Tienda<span style={{color: 'rgba(232, 195, 158)'}} className="text-primary">En Casa</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        {/* <div className="flex divide-x ">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div> */}
      </div>
    </header>
  );
}