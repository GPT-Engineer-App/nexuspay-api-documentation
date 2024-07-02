import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { HelpCircle, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const logoUrl = "https://marcroland84.wordpress.com/wp-content/uploads/2024/07/img_7181-1.png?w=510";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.to} asChild>
                  <NavLink to={item.to} className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <UserMenu />
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <footer className="sticky bottom-0 flex h-16 items-center gap-4 border-t bg-background px-4 md:px-6 justify-between">
          <div className="flex flex-col">
            <span>&copy; 2024 NexusPay</span>
            <span>Email: info@nexuspay.com</span>
            <span>Website: www.nexuspay.com</span>
          </div>
          <nav className="flex gap-4">
            <NavLink to="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service" className="text-muted-foreground hover:text-foreground">Terms of Service</NavLink>
            <NavLink to="/contact-us" className="text-muted-foreground hover:text-foreground">Contact Us</NavLink>
          </nav>
        </footer>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden md:flex md:flex-col md:w-64 md:border-r bg-muted/40">
    <div className="flex h-16 items-center border-b px-4">
      <NavLink to="/" className="flex items-center gap-2 font-semibold">
        <img src={logoUrl} alt="NexusPay Logo" className="h-8 w-8" />
        <span>NexusPay</span>
      </NavLink>
    </div>
    <nav className="flex-1 p-4">
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.icon}
          {item.title}
        </NavItem>
      ))}
    </nav>
  </div>
);

const UserMenu = () => (
  <Button variant="secondary" size="icon" className="rounded-full" onClick={() => alert('Nexuspay Support agent pop-up')}>
    <HelpCircle className="h-full w-full" />
    <span className="sr-only">Toggle help menu</span>
  </Button>
);

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;