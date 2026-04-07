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
    <div>
      <Drawer direction="bottom">
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent className={`h-[${drawerHeight}]`}>
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
                  <p
                    key={idx}
                    style={{ color: "var(--main-text)" }}
                    className="text-sm text-muted"
                  >
                    {ele}
                  </p>
                )
              })}
            </DrawerDescription>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4">{body}</div>

          <DrawerFooter>
            {footer}
            <DrawerClose>
              <Button variant="outline"> Close </Button>{" "}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
