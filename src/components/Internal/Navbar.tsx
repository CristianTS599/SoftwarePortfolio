import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import ListItem from "@/components/ui/list-item.tsx"

export default function Navbar() {
  return (
    <>
      <NavigationMenu className="ms-10 mt-5">
        <NavigationMenuList>
          <NavigationMenuItem>
            <h4 className="scroll-m-20 font-mono text-xl font-semibold tracking-tight">
              CTS.Portfolio
            </h4>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger> Navigate This Page </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem title="Item 1" href="/item1">
                  Description for Item 1
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger> Projects </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem title="Item 2" href="/item2">
                  Description for Item 2
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/item3"> Item 3 </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
