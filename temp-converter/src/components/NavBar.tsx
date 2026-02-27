import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import { Link } from "react-router"

export default function NavBar() {
  return (
    <div className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        <h1 className="text-lg font-bold">TempApp</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">

            <NavigationMenuItem>
              <Link
                to="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Temperature Converter
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/team"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Team Directory
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}