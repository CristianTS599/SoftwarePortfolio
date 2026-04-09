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
}: {
  imgPath: string
  imgCount: number
  imgPrefix: string
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
            <CarouselItem key={idx} className="basis-1/7 lg:basis-1/7">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src={`${imgPath}/${imgPrefix}${idx + 1}.jpeg`}
                      alt={`Bathroom Project Image ${idx + 1}`}
                      className="h-full w-full object-cover"
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
