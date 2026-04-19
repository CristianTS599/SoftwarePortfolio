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
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Build image paths once
  const imagePaths = Array.from({ length: imgCount }).map(
    (_, idx) => `${imgPath}/${imgPrefix}${idx + 1}.${imgExt}`
  )

  // Preload all images before rendering carousel
  useEffect(() => {
    let loaded = 0
    imagePaths.forEach((src) => {
      const img = new window.Image()
      img.onload = () => {
        loaded++
        if (loaded === imagePaths.length) {
          setImagesLoaded(true)
        }
      }
      img.onerror = () => {
        loaded++
        if (loaded === imagePaths.length) {
          setImagesLoaded(true) // show carousel even if some fail
        }
      }
      img.src = src
    })
  }, [imgPath, imgCount, imgPrefix, imgExt])

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    return () => {
      api.off("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }
  }, [api])

  if (!imagesLoaded) {
    return (
      <div className="flex h-48 items-center justify-center px-[4rem]">
        <span className="text-sm" style={{ color: "var(--main-text)" }}>
          Loading images...
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center px-[4rem]">
      <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {imagePaths.map((src, idx) => (
            <CarouselItem key={idx} className="md:basis-1/7 lg:basis-1/5">
              <div className="p-1">
                <Card className="w-fit">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src={src}
                      alt={`${imgAlt} Image ${idx + 1} of ${imgCount}`}
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
          className="text-sm text-muted"
          style={{ color: "var(--main-text)" }}
        >
          Slide {current} of {count}
        </span>
      </div>
    </div>
  )
}
