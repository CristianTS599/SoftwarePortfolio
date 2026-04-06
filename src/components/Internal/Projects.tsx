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
import { VWBuildBody, VWBuildFooter } from "./ProjectSections/VWBuild/VWBuild"

export default function Projects() {
  return (
    <div id="projects" className="ms-20 me-20">
      <div>
        <p
          style={{ color: "var(--muted-foreground)" }}
          className="text-sm text-muted"
        >
          // What I have built
        </p>
        <p className="font-serif text-4xl text-muted-foreground">Projects</p>
      </div>

      <div className="mt-5 flex flex-row items-center justify-start gap-2">
        <Accordion
          id="Software"
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
              <Terminal className="rounded-sm" height={27} width={30} />
              Software
            </AccordionTrigger>
            <Separator />
            <AccordionContent className="flex max-h-120 min-h-60 flex-row flex-wrap items-start justify-center gap-3 overflow-y-auto">
              <div className="flex-col">
                <ProjectDrawer
                  title="Three.js VR Environment"
                  description="A three-degree-of-freedom VR space environment built with Three.js to explore 3D rendering, orbit controls, and procedural scene generation."
                  body={<VRBody />}
                  footer={<VRFooter />}
                  drawerHeight="80vh"
                >
                  <ProjectCard
                    title="Three.js VR Environment"
                    description="Three-degree-of-freedom VR environment built with Three.js"
                    className="software-hvr text-left"
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
                  description="Written with React, TypeScript, and Shadcn-ui, this portfolio was a remodel of my older ASP.NET Core portfolio. The goal here was to familiarize myself with Shadcn-ui while building a more modern-looking portfolio. ** See my development progress below:"
                  body={<PortfolioBody />}
                  footer={<PortfolioFooter />}
                >
                  <ProjectCard
                    title="Portfolio site"
                    description="This site, built with React and Shadcn-ui, hosted in the cloud."
                    className="software-hvr text-left"
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
                  description="Managing all income, expenses, and accounts become a challenge as more moving parts were introduced, so I want to create a personal finance tracking and analytics dashboard on web and mobile. I'm looking for a way to keep my finances in order, track spending and have a visual financial model that I can keep updated anywhere I am. This project is still in early design and feature creation stages."
                  body={<FinancialBody />}
                  footer={<FinancialFooter />}
                >
                  <ProjectCard
                    title="Financial Data Dashboard"
                    description="A personal finance tracking dashboard for managing income, accounts, and spending, built with React."
                    className="software-hvr text-left"
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
          id="HomeImprovement"
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
              <Warehouse
                className="rounded-sm bg-amber-800"
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
                  description="Bathroom remodel in my childhood home. Complete update of the bathroom including drywall repairs, painting, tile floors, updated lighting, light-reactive plug panels, vanity refinish, floor and ceiling trim, quartz countertop, and 6-panel door."
                  body={<BathroomRemodelBody />}
                  footer={<BathroomRemodelFooter />}
                >
                  <ProjectCard
                    title="Bathroom Remodel"
                    description="Complete bathroom remodel in my childhood home including tiling, plumbing, carpentry, and electrical work"
                    className="warehouse-hvr text-left"
                  >
                    <Badge className="bg-amber-950 text-orange-300">
                      Tiling
                    </Badge>
                    <Badge className="ms-1 bg-amber-950 text-orange-300">
                      Plumbing
                    </Badge>
                    <Badge className="ms-1 bg-amber-950 text-orange-300">
                      Electrical
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
              <div className="flex-col">
                <ProjectDrawer
                  title="Garage Upgrade (Work Bench)"
                  description="Space has become limited in the garage. To address this, I'm building a storage workbench running along the side wall. This is phase one of two, covering the carpentry and construction of the workbench."
                  body={<BenchBody />}
                  footer={<BenchFooter />}
                >
                  <ProjectCard
                    title="Garage Upgrade (Bench)"
                    description="Upgrading the storage and adding a workbench to the garage."
                    className="warehouse-hvr text-left"
                  >
                    <Badge className="bg-amber-950 text-orange-300">
                      Carpentry
                    </Badge>
                    <Badge className="ms-1 bg-amber-950 text-orange-300">
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
          id="Automotive"
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
              <FiveSpeed className="rounded-sm" />
              Automotive
            </AccordionTrigger>
            <Separator />
            <AccordionContent className="flex max-h-120 min-h-60 flex-row flex-wrap items-start justify-center gap-3 overflow-y-auto">
              <div className="flex-col">
                <ProjectDrawer
                  title="Volkswagen Build"
                  description="Weekend track-day car build for a naturally aspirated MK4 Volkswagen Jetta. This build is aimed at improving the performance of the car on the track while staying a daily driver. At high speeds, the focus is on suspension stabilization, lift reduction, heat dissipation, and increased power."
                  body={<VWBuildBody />}
                  footer={<VWBuildFooter />}
                >
                  <ProjectCard
                    title="Volkswagen Build Project"
                    description="A track-focused build of an MK4 Volkswagen Jetta, including suspension, brake, and engine upgrades."
                    className="auto-hvr text-left"
                  >
                    <Badge className="bg-olive-900 text-olive-300">
                      Suspension
                    </Badge>
                    <Badge className="ms-1 bg-olive-900 text-olive-300">
                      Brakes
                    </Badge>
                    <Badge className="ms-1 bg-olive-900 text-olive-300">
                      Engine
                    </Badge>
                  </ProjectCard>
                </ProjectDrawer>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          id="Embedded"
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
                  title="Garage Upgrade (Controls)"
                  description="Adding touchpad, motion, and eventually voice-controlled lighting, compressor, vacuum pump, and RFID-based tool tracking to the garage."
                  body={<ControlsBody />}
                  footer={<ControlsFooter />}
                >
                  <ProjectCard
                    title="Garage Upgrade (Controls)"
                    description="Automating garage lighting and shop tools with motion-activated, touchpad, and eventually voice-controlled systems."
                    className="emb-hvr text-left"
                  >
                    <Badge className="bg-sky-900 text-sky-500">
                      Arduino UNO R3
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
