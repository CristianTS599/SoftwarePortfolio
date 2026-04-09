import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navLinkCss = ["nav-lnk-crsr"]

import PIR from "../svg/PIR"

export default function Navbar() {
  return (
    <>
      <NavigationMenu className="md:ms-10 md:mt-5">
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <PIR />
          </NavigationMenuItem>

          <NavigationMenuItem className="ml-5">
            <a className={navLinkCss.join(" ")} href="#projects">
              {"Projects>"}
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem className="ml-5">
            <a className={navLinkCss.join(" ")} href="#experience">
              {"Experience>"}
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem className="ml-5">
            <a className={navLinkCss.join(" ")} href="#contact">
              {"Contact>"}
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
