import React from "react";
import { motion } from "motion/react";
import AnimatedSections from "../components/AnimatedSection";
import { Link } from "react-router";
import { DynamicSlider } from "../components/DynamicSlider";
import { FaJsSquare } from "react-icons/fa";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { FaWordpress } from "react-icons/fa6";
import WebIcon from "../assets/icons/web-application.webp";
import SeoIcon from "../assets/icons/seo.webp";
import UiIcon from "../assets/icons/web-design.webp";
import MobIcon from "../assets/icons/mobile-app.webp";
import HeroImg from "../assets/heroImage.webp";
import BottomImg from "../assets/bottomImage.png";
import SideImg from "../assets/sideImage.png";
import Client1 from "../assets/members/ceo.webp";
import Client2 from "../assets/members/coo.webp";
import Client3 from "../assets/members/lead.webp";

const services = [
  {
    id: 1,
    title: "Web Application",
    description: "Responsive, modern websites.",
    icon: WebIcon,
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    title: "SEO",
    description: "Boost online visibility.",
    icon: SeoIcon,
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs.",
    icon: UiIcon,
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    title: "Mobile Applications",
    description: "Powerful mobile apps.",
    icon: MobIcon,
    bgColor: "bg-orange-100",
  },
];

const testimonials = [
  {
    name: "John Kabras",
    description:
      "“Working with this team has been a game-changer for us. Their dedication and innovation helped us scale our business exponentially. As CEO, I can confidently say they are the best in the industry.”",
    image: Client1,
    rating: 4.5,
  },
  {
    name: "Philips Shene Moris",
    description:
      "“The level of professionalism and expertise shown by the team has been unmatched. They’ve consistently delivered beyond expectations. I’m proud to work with such a talented group of people.”",
    image: Client2,
    rating: 4,
  },
  {
    name: "Equarn Shamir Mohomad",
    description:
      "“As a Tech Lead, it's rare to come across a team that is as forward-thinking and dedicated as this one. They always prioritize cutting-edge solutions while maintaining quality and efficiency. Simply outstanding!”",
    image: Client3,
    rating: 5,
  },
];

const logos = [
  {
    id: 0,
    logo: <FaJsSquare />,
    color: "text-yellow-500", // JavaScript color (light mode)
    darkColor: "text-yellow-300", // Adjusted color for dark mode
  },
  {
    id: 1,
    logo: <RiReactjsLine />,
    color: "text-blue-500", // React color (light mode)
    darkColor: "text-blue-400", // Adjusted color for dark mode
  },
  {
    id: 2,
    logo: <DiNodejs />,
    color: "text-green-600", // Node.js color (light mode)
    darkColor: "text-green-500", // Adjusted color for dark mode
  },
  {
    id: 3,
    logo: <RiNextjsLine />,
    color: "text-black", // Next.js color (light mode)
    darkColor: "text-white", // Adjusted color for dark mode
  },
  {
    id: 4,
    logo: <SiMongodb />,
    color: "text-green-800", // MongoDB color (light mode)
    darkColor: "text-green-700", // Adjusted color for dark mode
  },
  {
    id: 5,
    logo: <SiMysql />,
    color: "text-blue-600", // MySQL color (light mode)
    darkColor: "text-blue-500", // Adjusted color for dark mode
  },
  {
    id: 6,
    logo: <SiExpress />,
    color: "text-gray-800", // Express color (light mode)
    darkColor: "text-white", // Adjusted color for dark mode
  },
  {
    id: 7,
    logo: <FaWordpress />,
    color: "text-blue-700", // WordPress color (light mode)
    darkColor: "text-blue-600", // Adjusted color for dark mode
  },
];

const ServiceCard = ({ title, description, icon, bgColor }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 p-5 z-10 `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={`p-3 bg-white rounded-2xl ${bgColor}`}>
        <img src={icon} alt={title} className="h-10 w-10 " loading="lazy" />
      </div>
      <div>
        <h3 className="text-md font-medium dark:text-primary-light">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-primary-gray">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
const HomePage = () => {
  return (
    <div>
      {/* bg-[#1090cb46] */}
      <div className="container mx-auto dark:bg-[#1E1E1E]">
        <img
          src={SideImg}
          className="absolute right-0 bottom-10 h-[40vh] w-[40px] md:h-[50vh] md:w-[50px] lg:h-[60vh] lg:w-[60px]"
          loading="lazy"
        />
        {/* hero section  */}
        <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:px-5">
          {/* lef side  */}
          <motion.div
            className="flex flex-col gap-4 px-4 pt-8 lg:w-1/2 lg:gap-9"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          >
            <h1 className="text-2xl tracking-wide font-semibold md:text-4xl dark:text-white">
              Empowering <span className="text-[#34befe]">Businesses</span> with
              Innovative IT Solutions
            </h1>
            <p className="text-sm md:text-lg dark:text-white">
              At Nexsys AI, we specialize in delivering cutting-edge web,
              mobile, and software solutions tailored to your business needs.
              From startups to enterprises, we help you grow with technology
              that drives results.{" "}
            </p>
            <div className="flex gap-3 items-center">
              <button
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#1090CB] px-4 py-2 rounded-md capitalize text-white border border-transparent hover:bg-white hover:border-[#1090CB] hover:text-[#1090CB] transition duration-300 ease-in-out"
              >
                Get Started
              </button>

              <button className="border border-[#1090CB] px-4 py-2 rounded-md capitalize text-[#1090CB] bg-white hover:bg-[#1090CB] hover:text-white hover:border-transparent transition duration-300 ease-in-out">
                <Link to="/about">View More</Link>
              </button>
            </div>
          </motion.div>

          {/* right side */}
          <motion.div
            className="relative flex justify-center items-center py-3 lg:w-1/2 mt-20"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
          >
            <div className="absolute inset-0 flex justify-center items-center ">
              {/* Blur Circle */}
              <div className="w-64 h-64 bg-[#e7e19f] dark:bg-white z-10 blur-3xl rounded-full"></div>
            </div>
            <div className="max-w-auto md:max-w-lg z-20">
              <img src={HeroImg} alt="Hero Image" loading="lazy" />
            </div>
          </motion.div>
          <img
            src={BottomImg}
            className="absolute left-0 bottom-0 h-[40vh] w-[40px] md:h-[50vh] md:w-[50px] lg:h-[70vh] lg:w-[60px] lg:-bottom-56"
            loading="lazy"
          />
        </div>
        {/* hero section end */}
      </div>

      {/* service card section  */}
      <motion.div
        className="flex justify-center items-center bg-white dark:bg-primary-dark py-5 border-b-2 dark:border-t dark:border-gray-600 dark:border-b"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        id="services"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </motion.div>
      {/* service card section end  */}

      <div>
        <div className="text-center py-24 px-6">
          <h1 className="text-3xl font-semibold dark:text-primary-light">
            Transforming Ideas into Digital Realities.{" "}
          </h1>
          <p className="py-5 font-light dark:text-primary-gray">
            We bridge imagination and technology to create powerful solutions
            that drive growth and inspire change.
          </p>
        </div>
        <AnimatedSections />
      </div>

      {/* technologies marquee start */}
      <div className="px-10 overflow-hidden">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold dark:text-primary-light"
        >
          Technologies & Tools We Use
        </motion.h2>
        <motion.div className="flex gap-3 animate-marquee">
          {logos.concat(logos).map((item, index) => (
            <div
              key={index}
              className="h-40 w-auto mr-36 flex justify-center items-center"
            >
              {/* Apply light mode color and dark mode color using Tailwind */}
              <div className={`text-6xl ${item.color} dark:${item.darkColor}`}>
                {item.logo}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* technologies marquee end */}

      <div>
        {/* <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
> */}

        <div>
          <DynamicSlider
            customStyle=" py-12"
            sectionTitle="What Our Clients Say"
            imageShape="round"
            imageSize="medium"
            textSize="small"
            layout="testimonial"
            keyMapping={testimonials}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
