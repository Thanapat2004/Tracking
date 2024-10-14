import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <div className="w-full max-w-[800px] mx-auto relative">
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://www.prosoftgps.com/upload/6155/FKvHx9JXpp.jpg"
          alt="image 1"
          className="h-64 w-full object-cover"
        />
        <img
          src="https://www.scbeic.com/stocks/product/f0x0/do/bh/eqcxdobh5j/banner_note_logistic.jpg"
          alt="image 2"
          className="h-64 w-full object-cover"
        />
        <img
          src="https://image.makewebeasy.net/makeweb/0/YnsuUfFEb/DefaultData/car_logistics.jpg?v=202405291424"
          alt="image 3"
          className="h-64 w-full object-cover"
        />

      </Carousel>
    </div>
  );
}

export default CarouselCustomNavigation;
