import { useState, useEffect } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel"

import { Card, CardContent } from "../ui/card"

export default function ProjectCarousel({
  imgPath,
  imgCount,
  imgPrefix,
  imgExt = "jpeg",
  imgAlt = "",
}: {
  imgPath: string
  imgCount: number
  imgPrefix: string
  imgAlt: string
  imgExt?: string
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState<number>(0)
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  })

  return (
    <div className="flex flex-col justify-center px-[4rem]">
      <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {Array.from({ length: imgCount }).map((_, idx) => (
            <CarouselItem key={idx} className="md:basis-1/7 lg:basis-1/5">
              <div className="p-1">
                <Card className="w-fit">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src={`${imgPath}/${imgPrefix}${idx + 1}.${imgExt}`}
                      alt={`${imgAlt} This is Image ${idx + 1} of ${imgCount}`}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center">
        <span
          style={{ color: "var(--main-text)" }}
          className="text-sm text-muted"
        >
          Slide {current} of {count}
        </span>
      </div>
    </div>
  )
}
