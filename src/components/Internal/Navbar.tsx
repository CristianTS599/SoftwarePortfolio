import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navLinkCss = ["nav-lnk-crsr"]

export default function Navbar() {
  return (
    <>
      <NavigationMenu className="ms-10 mt-5">
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <h4 className="scroll-m-20 font-mono text-xl font-semibold tracking-tight">
              CTS.dev
            </h4>
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
