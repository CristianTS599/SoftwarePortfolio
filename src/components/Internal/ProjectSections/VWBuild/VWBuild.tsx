import ProjectCarousel from "../../ProjectCarousel"

function VWBuildBody() {
  return (
    <div className="text-3xl">
      <ProjectCarousel />
    </div>
  )
}

function VWBuildFooter() {
  return (
    <>
      <div className="text-muted">Hello VWBuild Footer!</div>
    </>
  )
}

export { VWBuildBody, VWBuildFooter }
