import { motion } from "motion/react";
import { GoGoal } from "react-icons/go";
import { FaQuestion } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import Image1 from "../assets/plan-planning-strategy-bysiness-ideas-concept.webp";
import Image2 from "../assets/question-mark-icon.webp";
import Image3 from "../assets/concept-m.webp";

export const sectionsData = [
  {
    id: 0,
    icon: <GoGoal />,
    title: "Our Mission",
    description: "",
    heading: "Driven by Innovation, Empowered by Excellence.",
    text: "We specialize in crafting solutions that align with your goals. From custom tech services to strategic design, we help businesses like yours overcome obstacles and stay ahead of the curve.",
    image: Image1,
    reverse: false,
  },
  {
    id: 1,
    icon: <FaQuestion />,
    title: "Why Choose Us",
    description: "",
    heading: "Why Choose Nexsys AI?",
    text: "At Nexsys AI, we turn ideas into powerful digital experiences. With a team of seasoned experts, a passion for innovation, and a commitment to excellence, we deliver tailored IT solutions that help businesses grow and lead. We believe in transparent processes, cutting-edge technologies, and a client-first approach — ensuring your success at every stage.",
    image: Image2,
    reverse: true,
  },
  {
    id: 2,
    icon: <GrServices />,
    title: "Our Services",
    description: "",
    heading: "Solutions Designed for the Future.",
    // text: "We offer a wide range of technology services tailored to your business needs: Custom Software Development — Tailored applications built for performance and scalability. Website & App Development — Seamless, user-focused digital experiences. Cloud & Infrastructure Solutions — Secure, scalable, and future-ready cloud strategies UI/UX Design — Beautiful interfaces that connect brands with users. IT Consulting — Expert advice to align your tech with your business goals. .",
    text: "At Nexsys AI, we offer a full spectrum of IT services designed to empower your business. From custom web and mobile app development to UI/UX design and digital consulting, we provide innovative solutions that drive real results. Let us help you transform your vision into reality with technology built for success.",
    image: Image3,
    reverse: false,
  },
];

const SectionWithLine = ({
  id,
  icon,
  title,
  description,
  heading,
  text,
  image,
  reverse,
}) => {
  return (
    <div
      className={`relative flex flex-col ${
        reverse ? "md:flex-row-reverse md:gap-20" : "md:flex-row"
      } items-center justify-between gap-6 lg:py-10 md:px-9 mb-14`}
    >
      {/* Text Content */}
      <motion.div
        className={`w-11/12 md:w-1/2 tracking-widest lg:flex lg:flex-col lg:gap-6 ${
          reverse ? "" : "lg:ml-24"
        }`}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#00BCD4] w-14 h-14 md:w-16 lg:w-14 rounded-full flex items-center justify-center text-white">
            <span className="text-xl lg:text-2xl">{icon}</span>
          </div>
          <div>
            <h3 className="text-lg font-medium dark:text-primary-light">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-primary-gray">
              {description}
            </p>
          </div>
        </div>
        <h2 className="lg:max-w-sm text-2xl font-semibold text-gray-800 dark:text-primary-gray mt-4 leading-normal">
          <span className="text-[#1090CB]">
            {heading.split(" ").slice(0, 2).join(" ")}
          </span>{" "}
          {heading.split(" ").slice(2).join(" ")}
        </h2>
        <p className="lg:max-w-sm text-sm text-gray-600 dark:text-gray-500 mt-2">
          {text}
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-1/2"
      >
        <img
          src={image}
          alt={title}
          className="w-74 h-74 object-cover rounded-md"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const AnimatedSections = () => {
  return (
    <div className="relativ">
      {sectionsData.map((section) => (
        <SectionWithLine
          key={section.id}
          id={section.id}
          icon={section.icon}
          title={section.title}
          description={section.description}
          heading={section.heading}
          text={section.text}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
};

export default AnimatedSections;
