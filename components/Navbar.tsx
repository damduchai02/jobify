import { UserButton } from "@clerk/nextjs";
import LinksDropdown from "./LinksDropdown";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-muted px-4 py-4 sm:px-16 lg:px-24">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
