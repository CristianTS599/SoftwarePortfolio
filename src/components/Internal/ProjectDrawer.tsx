import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"

import { Button } from "../ui/button"

/**
 *
 * @param title: main drawer title.
 * @param description: project description. Use ** as a new line separator.
 * @param body: string or node element
 * @param footer: string or node element
 * @returns
 */
export default function ProjectDrawer({
  children,
  title,
  description,
  body,
  footer,
  drawerHeight = "70vh",
}: {
  children: React.ReactNode
  title: string
  description: string
  body: string | React.ReactNode
  footer: string | React.ReactNode
  drawerHeight?: string
}) {
  return (
    <div id={`Drawer-${title.replaceAll(" ", "")}`} className="w-full">
      <Drawer direction="bottom">
        <DrawerTrigger className="w-full">{children}</DrawerTrigger>
        <DrawerContent className={`h-full md:h-[${drawerHeight}]`}>
          <DrawerHeader>
            <DrawerTitle>
              <p
                style={{ color: "var(--main-text)" }}
                className="font-serif text-3xl text-muted-foreground"
              >
                {title}
              </p>
            </DrawerTitle>
            <DrawerDescription>
              {description.split("**").map((ele, idx) => {
                return (
                  <span
                    key={idx}
                    style={{ color: "var(--main-text)" }}
                    className="text-sm text-muted"
                  >
                    {ele}
                  </span>
                )
              })}
            </DrawerDescription>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4">{body}</div>

          <DrawerFooter className="h-20">
            {footer}
            <DrawerClose asChild>
              <Button variant="outline" className="w-25 self-center">
                {" "}
                Close{" "}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
