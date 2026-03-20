import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

import { Separator } from "../ui/separator"

// Icons
import Terminal from "../svg/Terminal"
import Warehouse from "../svg/Warehouse"
import FiveSpeed from "../svg/5Speed"

export default function Projects() {
  return (
    <div className="ms-20 me-20">
      <div>
        <p className="text-sm text-muted">// What I have built</p>
        <p className="font-serif text-4xl text-muted-foreground">Projects</p>
      </div>

      <div className="mt-5 flex flex-row items-center justify-start gap-5">
        <Accordion
          type="single"
          collapsible
          className="max-w-lg flex-1 flex-col rounded-lg border"
          defaultValue="Test"
        >
          <AccordionItem className="border-b px-4 last:border-b-0" value="Test">
            <AccordionTrigger className="pb-2">
              <Terminal
                className="rounded-sm bg-teal-900"
                height={27}
                width={30}
              />
              Software
            </AccordionTrigger>
            <Separator />
            <AccordionContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, doloremque.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="max-w-lg flex-1 flex-col rounded-lg border"
          defaultValue="Test"
        >
          <AccordionItem className="border-b px-4 last:border-b-0" value="Test">
            <AccordionTrigger className="pb-2">
              <Warehouse
                className="rounded-sm bg-amber-800"
                color="#a97400"
                height={27}
                width={30}
              />
              Home Improvement
            </AccordionTrigger>
            <Separator />
            <AccordionContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, doloremque.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="max-w-lg flex-1 flex-col rounded-lg border"
          defaultValue="Test"
        >
          <AccordionItem className="border-b px-4 last:border-b-0" value="Test">
            <AccordionTrigger>
              <FiveSpeed />
              Automotive
            </AccordionTrigger>
            <Separator />
            <AccordionContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, doloremque.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="max-w-lg flex-1 flex-col rounded-lg border"
          defaultValue="Test"
        >
          <AccordionItem className="border-b px-4 last:border-b-0" value="Test">
            <AccordionTrigger>Robotics / Embedded </AccordionTrigger>
            <Separator />
            <AccordionContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, doloremque.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
