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
import Ground from "../svg/Ground"
import ProjectCard from "./ProjectCard"
import { Badge } from "../ui/badge"

import ProjectDrawer from "./ProjectDrawer"
import ProjectCarousel from "./ProjectCarousel"
import { VRBody, VRFooter } from "./ProjectSections/VR/VR"
import {
  PortfolioBody,
  PortfolioFooter,
} from "./ProjectSections/Portfolio/Portfolio"
import {
  FinancialBody,
  FinancialFooter,
} from "./ProjectSections/Financial/Financial"
import {
  BathroomRemodelBody,
  BathroomRemodelFooter,
} from "./ProjectSections/BRemodel/BathroomRemodel"
import { BenchBody, BenchFooter } from "./ProjectSections/Garage/Bench"
import { ControlsBody, ControlsFooter } from "./ProjectSections/Garage/Controls"
import { RoachBody, RoachFooter } from "./ProjectSections/Roach/Roach"
import { VWBuildBody, VWBuildFooter } from "./ProjectSections/VWBuild/VWBuild"

export default function Projects() {
  return (
    <div id="projects" className="ms-20 me-20">
      <div>
        <p className="text-sm text-muted">// What I have built</p>
        <p className="font-serif text-4xl text-muted-foreground">Projects</p>
      </div>

      <div className="mt-5 flex flex-row items-center justify-start gap-2">
        <Accordion
          type="single"
          collapsible
          className="max-h-120 flex-1 flex-col rounded-lg border"
          defaultValue="Test"
        >
          <AccordionItem
            className="max-h-120 border-b px-4 last:border-b-0"
            value="Test"
          >
            <AccordionTrigger className="pb-2">
              <Terminal
                className="rounded-sm bg-teal-900"
                height={27}
                width={30}
              />
              Software
            </AccordionTrigger>
            <Separator />
            <AccordionContent className="flex max-h-120 min-h-60 flex-row flex-wrap items-start justify-center gap-3 overflow-y-auto">
              <div className="flex-col">
                <ProjectDrawer
                  title="Three.js VR Environment"
                  description="Three degree of freedom VR space environment created in Three.js as a way to explore three.js with a quick and simple project."
                  body={<VRBody />}
                  footer={<VRFooter />}
                >
                  <ProjectCard
                    title="Three.js VR Environment"
                    description="Super simple 3 degree of freedom VR environment built with Three.js"
                    className="text-left hover:bg-mist-900"
                  >
                    <Badge className="bg-mist-800 text-green-300">
                      JavaScript
                    </Badge>
                    <Badge className="ms-1 bg-mist-800 text-green-300">
                      Three.js
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
              <div className="flex-col">
                <ProjectDrawer
                  title="Personal Portfolio"
                  description="Portfolio Description"
                  body={<PortfolioBody />}
                  footer={<PortfolioFooter />}
                >
                  <ProjectCard
                    title="Portfolio site"
                    description="This site! Built with React and Shadcn-ui, hosted on [Enter cloud provider here]"
                    className="text-left hover:bg-mist-900"
                  >
                    <Badge className="bg-mist-800 text-green-300">React</Badge>
                    <Badge className="ms-1 bg-mist-800 text-green-300">
                      Shadcn-ui
                    </Badge>
                    <Badge className="ms-1 bg-mist-800 text-green-300">
                      Tailwind
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
              <div className="flex-col">
                <ProjectDrawer
                  title="Financial Data Dashboard"
                  description="Financial dashboard"
                  body={<FinancialBody />}
                  footer={<FinancialFooter />}
                >
                  <ProjectCard
                    title="Financial Data Dashboard"
                    description="A dashboard for visualizing financial data, built with React"
                    className="text-left hover:bg-mist-900"
                  >
                    <Badge className="bg-mist-800 text-green-300">React</Badge>
                    <Badge className="ms-1 bg-mist-800 text-green-300">
                      Shadcn-ui
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="max-h-120 flex-1 flex-col rounded-lg border"
          defaultValue="Test"
        >
          <AccordionItem
            className="max-h-120border-b px-4 last:border-b-0"
            value="Test"
          >
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
            <AccordionContent className="flex max-h-120 min-h-60 flex-row flex-wrap items-start justify-center gap-3 overflow-y-auto">
              <div className="flex-col">
                <ProjectDrawer
                  title="Bathroom Remodel"
                  description="Remodel Description"
                  body={<BathroomRemodelBody />}
                  footer={<BathroomRemodelFooter />}
                >
                  <ProjectCard
                    title="Bathroom Remodel"
                    description="Remodel of a bathroom in my house, including tiling, plumbing, and carpentry work"
                    className="text-left hover:bg-amber-950/10"
                  >
                    <Badge className="bg-amber-800 text-amber-300">
                      Tiling
                    </Badge>
                    <Badge className="ms-1 bg-amber-800 text-amber-300">
                      Plumbing
                    </Badge>
                    <Badge className="ms-1 bg-amber-800 text-amber-300">
                      Electrical
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
              <div className="flex-col">
                <ProjectDrawer
                  title="Garage Upgrade (Work Bench)"
                  description="Garage Description"
                  body={<BenchBody />}
                  footer={<BenchFooter />}
                >
                  <ProjectCard
                    title="Garage Upgrade (Bench)"
                    description="Upgrading the storage and adding a workbench to the garage."
                    className="text-left hover:bg-amber-950/10"
                  >
                    <Badge className="bg-amber-800 text-amber-300">
                      Carpentry
                    </Badge>
                    <Badge className="ms-1 bg-amber-800 text-amber-300">
                      Storage
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-5 flex flex-row items-center justify-start gap-2">
        <Accordion
          type="single"
          collapsible
          className="max-h-120 flex-1 flex-col rounded-lg border"
          defaultValue="Test"
        >
          <AccordionItem
            className="max-h-120 border-b px-4 last:border-b-0"
            value="Test"
          >
            <AccordionTrigger className="pb-2">
              <FiveSpeed
                className="rounded-sm bg-olive-700"
                color="oklch(58% 0.031 107.3)"
              />
              Automotive
            </AccordionTrigger>
            <Separator />
            <AccordionContent className="flex max-h-120 min-h-60 flex-row flex-wrap items-start justify-center gap-3 overflow-y-auto">
              <div className="flex-col">
                <ProjectDrawer
                  title="Volkswagen Build"
                  description="Volkswagen Build Description"
                  body={<VWBuildBody />}
                  footer={<VWBuildFooter />}
                >
                  <ProjectCard
                    title="Volkswagen Build Project"
                    description="A track-focused build of a MK4 VW Jetta, including suspension, brake, and engine upgrades"
                    className="text-left hover:bg-olive-900"
                  >
                    <Badge className="bg-olive-700 text-olive-400">
                      Suspension
                    </Badge>
                    <Badge className="ms-1 bg-olive-700 text-olive-400">
                      Brakes
                    </Badge>
                    <Badge className="ms-1 bg-olive-700 text-olive-400">
                      Engine
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="max-h-120 flex-1 flex-col rounded-lg border"
          defaultValue="Test"
        >
          <AccordionItem
            className="max-h-120 border-b px-4 last:border-b-0"
            value="Test"
          >
            <AccordionTrigger className="pb-2">
              <Ground />
              Robotics / Embedded
            </AccordionTrigger>
            <Separator />
            <AccordionContent className="flex max-h-120 min-h-60 flex-row flex-wrap items-start justify-center gap-3 overflow-y-auto">
              <div className="flex-col">
                <ProjectDrawer
                  title="Roach Bot"
                  description="Roach Bot Description"
                  body={<RoachBody />}
                  footer={<RoachFooter />}
                >
                  <ProjectCard
                    title="Roach Bot"
                    description="A small, insect-inspired robot built with an Arduino microcontroller and various sensors and actuators"
                    className="text-left hover:bg-mist-900"
                  >
                    <Badge className="bg-blue-900/50 text-blue-300">
                      Arduino UN0 R3
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
              <div className="flex-col">
                <ProjectDrawer
                  title="Garage Upgrade (Controls)"
                  description="Garage Upgrade Description"
                  body={<ControlsBody />}
                  footer={<ControlsFooter />}
                >
                  <ProjectCard
                    title="Garage Upgrade (Controls)"
                    description="Upgrade of my garage, including motion sensored, automated, and touch pad, controlled lighting and shop tools"
                    className="text-left hover:bg-mist-900"
                  >
                    <Badge className="bg-blue-900/50 text-blue-300">
                      Arduino UN0 R3
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
