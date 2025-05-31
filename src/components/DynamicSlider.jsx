import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
  ],
};

export const DynamicSlider = ({
  keyMapping,
  customStyle,
  sectionTitle = "Our Team",
  imageShape = "square",
  imageSize = "large",
  textSize = "normal",
  layout = "team",
}) => {
  // Define dynamic classes based on props
  const imageClass = imageShape === "round" ? "rounded-full" : "rounded-lg";
  const imageSizeClass =
    imageSize === "small"
      ? "h-32 w-32"
      : imageSize === "medium"
      ? "h-48 w-48"
      : "h-64 w-64";
  const textSizeClass = textSize === "large" ? "text-xl" : "text-base";
  const layoutClass =
    layout === "testimonial"
      ? "flex flex-col items-center text-center"
      : "flex flex-col items-center";

  return (
    <div className={`py-12 ${customStyle}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center px-4 mb-8 dark:text-primary-light">
          {sectionTitle}
        </h2>
        <Slider {...sliderSettings}>
          {keyMapping.map((member, index) => (
            <div key={index} className="p-4">
              <div className={`flex flex-col items-center ${layoutClass}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={`mb-4 ${imageClass} ${imageSizeClass} object-cover`}
                  loading="lazy"
                />
                <div
                  className={`${
                    imageShape === "round"
                      ? "flex flex-col-reverse gap-4"
                      : "flex flex-col"
                  }`}
                >
                  <p
                    className={`text-gray-500 dark:text-primary-light ${textSizeClass}`}
                  >
                    {member.description}
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <h3
                      className={`font-medium dark:text-primary-gray ${textSizeClass}`}
                    >
                      {member.name}
                    </h3>
                    {/* Rating stars */}
                    {member.rating && (
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => {
                          // Determine if the current star should be filled, half-filled, or empty
                          if (i < Math.floor(member.rating)) {
                            // Fully filled star
                            return (
                              <IoMdStar key={i} className="text-yellow-400" />
                            );
                          } else if (
                            i < Math.ceil(member.rating) &&
                            member.rating % 1 !== 0
                          ) {
                            // Half-filled star (for non-integer ratings like 4.5)
                            return (
                              <IoMdStarHalf
                                key={i}
                                className="text-yellow-400"
                              />
                            );
                          } else {
                            // Empty star
                            return (
                              <IoMdStarOutline
                                key={i}
                                className="text-gray-300 dark:text-white"
                              />
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
