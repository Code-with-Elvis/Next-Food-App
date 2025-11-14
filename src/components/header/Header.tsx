import imgLogo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import SmallScreenNav from "./SmallScreenNav";

const Header = () => {
  return (
    <header className="h-18 flex items-center">
      <div className="meal-container flex-1 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={imgLogo}
            alt="Logo"
            width={52}
            height={52}
            priority
            className="h-13 w-auto"
          />
          <span className="font-bold whitespace-nowrap">Food KE</span>
        </Link>
        {/* Add navigation links here */}
        <nav className="hidden sm:block">
          <ul className="flex items-center">
            <li>
              <Link
                href="/meals"
                className="inline-block px-3 hover:text-primary transition-colors ease-in-out duration-100"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="inline-block px-3 hover:text-primary transition-colors ease-in-out duration-100"
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
        {/* Add theme component & small screen menu here */}
        <div className="flex items-center space-x-4">
          <SmallScreenNav />
          <Theme />
        </div>
      </div>
    </header>
  );
};
export default Header;
