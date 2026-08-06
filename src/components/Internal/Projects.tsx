import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

// Icons
import Terminal from "../svg/Terminal"
import Warehouse from "../svg/Warehouse"
import FiveSpeed from "../svg/5Speed"
import Ground from "../svg/Ground"
import ProjectCard from "./ProjectCard"
import { Badge } from "../ui/badge"

import ProjectDrawer from "./ProjectDrawer"
import { MCPBody, MCPFooter } from "./ProjectSections/MCP/MCP"
import {
  GarageAutomationBody,
  GarageAutomationFooter,
} from "./ProjectSections/GarageAutomation/GarageAutomation"
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
import { VWBuildBody, VWBuildFooter } from "./ProjectSections/VWBuild/VWBuild"
import {
  TabletRackBody,
  TabletRackFooter,
} from "./ProjectSections/3D/TabletRack"

import {
  CameraMountBody,
  CameraMountFooter,
} from "./ProjectSections/3D/CameraMount"
import {
  MissingPieceBody,
  MissingPieceFooter,
} from "./ProjectSections/3D/MissingPiece"

const gridClass =
  "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"

export default function Projects() {
  return (
    <div id="projects" className="mx-5">
      <div>
        <p
          style={{ color: "var(--muted-foreground)" }}
          className="text-sm text-muted"
        >
          // What I have built
        </p>
        <h2 className="font-serif text-4xl text-muted-foreground">Projects</h2>
      </div>

      <Tabs defaultValue="software" className="mt-5">
        <TabsList className="h-auto! w-full flex-wrap justify-start sm:w-fit">
          <TabsTrigger value="software">
            <Terminal height={18} width={20} />
            Software
          </TabsTrigger>
          <TabsTrigger value="home-improvement">
            <Warehouse height={18} width={20} />
            Home Improvement
          </TabsTrigger>
          <TabsTrigger value="automotive">
            <FiveSpeed height={18} width={20} />
            Automotive
          </TabsTrigger>
          <TabsTrigger value="embedded">
            <Ground height={18} width={20} />
            Embedded / 3D Printing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="software" className="mt-5">
          <div className={gridClass}>
            <ProjectDrawer
              title="MCP Server for Manufacturing Analytics"
              description="A production Model Context Protocol (MCP) server built at Microchip Technology that connects Azure OpenAI agents to live Manufacturing Execution System (MES) data. Engineers ask questions in plain English; defect and equipment-history lookups that took minutes now take seconds. ** High-level architecture only, no proprietary details. Tap a node in the diagram to explore each component."
              body={<MCPBody />}
              footer={<MCPFooter />}
              drawerHeight="80vh"
            >
              <ProjectCard
                title="MCP Server for Manufacturing Analytics"
                description="Production MCP server connecting Azure OpenAI agents to live MES data for natural language lookups."
                className="software-hvr text-left"
                thumbnail="/ProjectImgs/MCP/MCPArch.png"
                thumbnailAlt="Architecture diagram of the MCP server connecting an AI agent to MES data"
                icon={<Terminal height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-mist-800 text-green-300">Python</Badge>
                  <Badge className="ms-1 bg-mist-800 text-green-300">
                    FastMCP
                  </Badge>
                  <Badge className="ms-1 bg-mist-800 text-green-300">
                    Azure OpenAI
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>

            <ProjectDrawer
              title="Three.js VR Environment"
              description="A three-degree-of-freedom VR space environment built with Three.js to explore 3D rendering, orbit controls, and procedural scene generation. ** Click + Drag to look around!"
              body={<VRBody />}
              footer={<VRFooter />}
              drawerHeight="80vh"
            >
              <ProjectCard
                title="Three.js VR Environment"
                description="Three-degree-of-freedom VR environment built with Three.js"
                className="software-hvr text-left"
                thumbnail="/ProjectImgs/VR/VRThumbnail.png"
                thumbnailAlt="Three.js VR scene showing several orbiting planets"
                icon={<Terminal height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-mist-800 text-green-300">
                    JavaScript
                  </Badge>
                  <Badge className="ms-1 bg-mist-800 text-green-300">
                    Three.js
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>

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
                thumbnail="/ProjectImgs/FinancialAnalysis/DbTN.png"
                thumbnailAlt="Database diagram showing the initial design for the financial dashboard"
                icon={<Terminal height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-mist-800 text-green-300">React</Badge>
                  <Badge className="ms-1 bg-mist-800 text-green-300">
                    Shadcn-ui
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>

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
                thumbnail="/ProjectImgs/Portfolio/HeroSnip.png"
                thumbnailAlt="Screenshot of the portfolio site hero section"
                icon={<Terminal height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-mist-800 text-green-300">React</Badge>
                  <Badge className="ms-1 bg-mist-800 text-green-300">
                    Shadcn-ui
                  </Badge>
                  <Badge className="ms-1 bg-mist-800 text-green-300">
                    Tailwind
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>
          </div>
        </TabsContent>

        <TabsContent value="home-improvement" className="mt-5">
          <div className={gridClass}>
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
                thumbnail="/ProjectImgs/BathRemodel/BR1.jpeg"
                thumbnailAlt="Remodeled bathroom"
                icon={<Warehouse height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-amber-950 text-orange-300">Tiling</Badge>
                  <Badge className="ms-1 bg-amber-950 text-orange-300">
                    Plumbing
                  </Badge>
                  <Badge className="ms-1 bg-amber-950 text-orange-300">
                    Electrical
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>
          </div>
        </TabsContent>

        <TabsContent value="automotive" className="mt-5">
          <div className={gridClass}>
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
                thumbnail="/ProjectImgs/VWBuild/VWB1.jpeg"
                thumbnailAlt="MK4 Volkswagen Jetta track build"
                icon={<FiveSpeed height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-olive-900 text-olive-300">
                    Suspension
                  </Badge>
                  <Badge className="ms-1 bg-olive-900 text-olive-300">
                    Brakes
                  </Badge>
                  <Badge className="ms-1 bg-olive-900 text-olive-300">
                    Engine
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>
          </div>
        </TabsContent>

        <TabsContent value="embedded" className="mt-5">
          <div className={gridClass}>
            <ProjectDrawer
              title="Garage Automation System"
              description="A voice-controlled automation system for my garage, built on a deliberate two-board split: a Raspberry Pi 5 acts as the intelligence layer — touchscreen interface, voice, and LLM reasoning — while an Arduino Uno R3 owns the primitive hardware layer, driving every sensor and output with no network awareness and no business logic. Phase 1, the hardware layer, is built and running; Phase 2, the Pi software layer, is in progress. ** High-level architecture only. Tap a node in the diagram to explore each part."
              body={<GarageAutomationBody />}
              footer={<GarageAutomationFooter />}
              drawerHeight="80vh"
            >
              <ProjectCard
                title="Garage Automation System"
                description="Voice-controlled garage automation on a two-board system: a Raspberry Pi brain driving an Arduino hardware layer."
                className="emb-hvr text-left"
                thumbnail="/ProjectImgs/GarageAutomation/GarageAutoTN.png"
                thumbnailAlt="Garage automation system hardware"
                icon={<Ground height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-sky-900 text-sky-500">Arduino</Badge>
                  <Badge className="bg-sky-900 text-sky-500">
                    Raspberry Pi
                  </Badge>
                  <Badge className="bg-sky-900 text-sky-500">Python</Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>

            <ProjectDrawer
              title="Tablet Rack"
              description="Designed and 3D printed a replacement mobile tablet rack for ComTrans, upgrading their existing setup with a more stable solution. The new design features taller support rails to prevent tablets from tipping while maintaining the original tablet capacity."
              body={<TabletRackBody />}
              footer={<TabletRackFooter />}
            >
              <ProjectCard
                title="Tablet Rack"
                description="Tablet Rack designed in Fusion 360 and printed using FlashForge Extruding 3D Printer."
                className="emb-hvr text-left"
                thumbnail="/ProjectImgs/3D/TabletRack/TR1.png"
                thumbnailAlt="3D printed tablet rack"
                icon={<Ground height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-sky-900 text-sky-500">3D Printing</Badge>
                  <Badge className="bg-sky-900 text-sky-500">
                    Fusion 360 CAD
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>

            <ProjectDrawer
              title="Camera Mount"
              description="Camera mount aimed to eliminate blind spots associated to current camera location."
              body={<CameraMountBody />}
              footer={<CameraMountFooter />}
            >
              <ProjectCard
                title="Angled Camera Mount"
                description="Camera mount designed in Fusion 360 and printed using FlashForge Extruding 3D Printer."
                className="emb-hvr text-left"
                thumbnail="/ProjectImgs/3D/CameraMount/CM1.png"
                thumbnailAlt="3D printed angled camera mount"
                icon={<Ground height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-sky-900 text-sky-500">3D Printing</Badge>
                  <Badge className="bg-sky-900 text-sky-500">
                    Fusion 360 CAD
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>

            <ProjectDrawer
              title="Missing Model Piece"
              description="A piece to a 1:8 scale model Audi went missing so I created it in Fusion 360 to replace the original."
              body={<MissingPieceBody />}
              footer={<MissingPieceFooter />}
            >
              <ProjectCard
                title="Missing Model Piece"
                description="A piece of an 1:8 scale Audi went missing so I modeled a replacement from an example piece."
                className="emb-hvr text-left"
                thumbnail="/ProjectImgs/3D/APiece/MAP1.png"
                thumbnailAlt="3D printed replacement model piece"
                icon={<Ground height={40} width={40} />}
              >
                <div className="flex flex-wrap gap-1">
                  <Badge className="bg-sky-900 text-sky-500">3D Printing</Badge>
                  <Badge className="bg-sky-900 text-sky-500">
                    Fusion 360 CAD
                  </Badge>
                </div>
              </ProjectCard>
            </ProjectDrawer>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
