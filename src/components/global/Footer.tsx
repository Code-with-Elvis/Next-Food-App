import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="meal-container border-t py-5 flex items-center justify-between">
        <p className="max-[520px]:text-center max-[520px]:flex-1 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Food KE. All rights reserved.
        </p>
        <div className="flex items-center text-sm space-x-4 max-[520px]:hidden">
          <Link
            href="/"
            className="hover:text-primary transform-colors duration-100 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/meals/share"
            className="hover:text-primary transform-colors duration-100 ease-in-out"
          >
            Share Meals
          </Link>
          <Link
            href="/community"
            className="hover:text-primary transform-colors duration-100 ease-in-out"
          >
            Community
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
