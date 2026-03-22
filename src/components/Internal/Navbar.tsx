import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import ListItem from "@/components/ui/list-item.tsx"

import { Separator } from "../ui/separator"

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
                <ListItem title="Top" href="#hero"></ListItem>
                <Separator className="my-2" />
                <ListItem title="Projects" href="#projects"></ListItem>
                <Separator className="my-2" />
                <ListItem title="Experience" href="#experience"></ListItem>
                <Separator className="my-2" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger> Projects </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem
                  className="mt-2 text-3xl font-medium"
                  title="Software"
                  href="#Projects"
                >
                  <Separator />
                </ListItem>
                <ListItem
                  className="ms-5 mt-2"
                  title="Three.js Environment"
                  href="/item2"
                >
                  <span className="text-muted">
                    Three degree of freedom VR environment.
                  </span>
                </ListItem>
                <ListItem
                  className="ms-5 mt-2"
                  title="Software Portfolio"
                  href="/item2"
                >
                  <span className="text-muted">
                    This site! Built with React and Shadcn-ui.
                  </span>
                </ListItem>
                <ListItem
                  className="ms-5 mt-2"
                  title="Financial Dashboard"
                  href="/item2"
                >
                  <span className="text-muted">
                    A responsive financial dashboard built with React.
                  </span>
                </ListItem>
                <ListItem
                  className="mt-5 text-3xl font-medium"
                  title="Home Improvement"
                  href="#Projects"
                >
                  <Separator />
                </ListItem>
                <ListItem
                  className="ms-5 mt-2"
                  title="Bathroom Remodel"
                  href="/item2"
                >
                  <span className="text-muted">
                    A responsive financial dashboard built with React.
                  </span>
                </ListItem>
                <ListItem
                  className="ms-5 mt-2"
                  title="Garage Update"
                  href="/item2"
                >
                  <span className="text-muted">
                    A responsive financial dashboard built with React.
                  </span>
                </ListItem>
                <ListItem
                  className="mt-5 text-3xl font-medium"
                  title="Automotive"
                  href="#Projects"
                >
                  <Separator />
                </ListItem>
                <ListItem
                  className="ms-5 mt-2"
                  title="MK4 Jetta Project"
                  href="/item2"
                >
                  <span className="text-muted">Jetta</span>
                </ListItem>
                <ListItem
                  className="mt-5 text-3xl font-medium"
                  title="Robotics / Embedded"
                  href="#Projects"
                >
                  <Separator />
                </ListItem>
                <ListItem className="ms-5 mt-2" title="Roach Bot" href="/item2">
                  <span className="text-muted">Roach bot stuff.</span>
                </ListItem>
                <ListItem
                  className="ms-5 mt-2"
                  title="Garage Update"
                  href="/item2"
                >
                  <span className="text-muted">Garage jarvis project.</span>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
