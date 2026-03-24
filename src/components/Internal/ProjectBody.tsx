import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

import { Card, CardContent } from "../ui/card"

export default function ProjectBody() {
  return (
    <>
      <Carousel
        opts={{ align: "start" }}
        className="w-full sm:max-w-xs md:max-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: 15 }).map((_, idx) => (
            <CarouselItem key={idx} className="basis-1/7 lg:basis-1/10">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{idx + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
