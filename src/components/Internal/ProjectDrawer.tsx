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

export default function ProjectDrawer({
  children,
  title,
  description,
  body,
  footer,
}: {
  children: React.ReactNode
  title: string
  description: string
  body: string | React.ReactNode
  footer: string
}) {
  return (
    <div>
      <Drawer direction="bottom">
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent className="h-[70vh]">
          <DrawerHeader>
            <DrawerTitle>
              <p className="font-serif text-3xl text-muted-foreground">
                {title}
              </p>
            </DrawerTitle>
            <DrawerDescription>
              <p className="text-sm text-muted">{description}</p>
            </DrawerDescription>
          </DrawerHeader>
          {body}
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
