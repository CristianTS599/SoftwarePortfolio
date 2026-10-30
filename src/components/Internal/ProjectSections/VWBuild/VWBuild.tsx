import StatusBadge from "../../StatusBadge"
import ProjectCarousel from "../../ProjectCarousel"

function VWBuildBody() {
  return (
    <div id="VWBuildBody" className="text-3xl">
      <ProjectCarousel
        imgPath="/ProjectImgs/VWBuild"
        imgCount={14}
        imgPrefix="VWB"
        imgAlt="Images showing the different components I have changed on my 2004 Volkswagen Jetta."
      />
    </div>
  )
}

function VWBuildFooter() {
  return (
    <div className="flex flex-row flex-wrap">
      <StatusBadge status="WIP" statusText="Work In Progress" />
    </div>
  )
}

export { VWBuildBody, VWBuildFooter }
