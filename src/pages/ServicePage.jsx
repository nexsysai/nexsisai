import StatsSection from "../components/StatsSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";
import WebIcon from "../assets/icons/web-application.webp";
import SeoIcon from "../assets/icons/seo.webp";
import UiIcon from "../assets/icons/web-design.webp";
import MobIcon from "../assets/icons/mobile-app.webp";
import ServiceImg from "../assets/icons/speaker.webp";
import ServiceImg2 from "../assets/servicePage.webp";
import Project1 from "../assets/project/Project1.webp";
import Project2 from "../assets/project/Project2.webp";
import Project3 from "../assets/project/Project3.webp";
import Project4 from "../assets/project/Project4.webp";
import Project5 from "../assets/project/Project5.webp";
import { Link } from "react-router";

const services = [
  {
    id: 1,
    title: "Mobile Applications",
    description: "The simplest but robust technology to accompany with you",
    icon: MobIcon,
    bgColor: "bg-[#F1E8FF]",
  },
  {
    id: 2,
    title: "Web Applications",
    description:
      "Platform independant business solutions for maximum availability",
    icon: WebIcon,
    bgColor: "bg-[#FFF2F2]",
  },
  {
    id: 3,
    title: "SEO",
    description: "Let the world find you on top of others Lorem, ipsum dolor.",
    icon: SeoIcon,
    bgColor: "bg-[#E2F3FF]",
  },
  {
    id: 4,
    title: "UI/UX Solutions",
    description:
      "User-focused designs that enhance experience and simplify digital interactions.",
    icon: UiIcon,
    bgColor: "bg-[#FFE7FB]",
  },
];

const projects = [
  {
    image: Project1,
    title: "E-commerce Website for TrendKart",
    description:
      "Developed a full-featured e-commerce platform with secure payments, product filters, and admin dashboard for TrendKart, a growing fashion brand.",
  },
  {
    image: Project2,
    title: "Portfolio Website for a Creative Designer",
    description:
      "Designed and built a responsive personal portfolio website for a freelance designer, showcasing projects, testimonials, and blog integration.",
  },
  {
    image: Project3,
    title: "Booking App for Local Salons",
    description:
      "Created a mobile-friendly salon appointment booking app with real-time availability, customer login, and payment gateway integration.",
  },
  {
    image: Project4,
    title: "Startup Landing Page for FinVerse",
    description:
      "Built a clean and conversion-focused landing page for FinVerse, a fintech startup offering micro-investment tools to young investors.",
  },
  {
    image: Project5,
    title: "Dashboard for EdTech Admin Panel",
    description:
      "Developed a modern dashboard for an EdTech platform with analytics, course management, and user activity tracking for instructors.",
  },
];

const ServicePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="bg-[#1090cb3b] dark:bg-primary-dark flex flex-col items-center justify-start gap-4 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <img
            src={ServiceImg}
            alt="Services"
            className="bg-white p-2 rounded-full mt-20"
            loading="lazy"
          />
          <h1 className="text-3xl font-semibold dark:text-primary-light">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="max-w-2xl text-center text-[#696969] dark:text-primary-gray px-2">
            At Nexsys AI, we don't just offer services — we craft custom digital
            solutions that fuel innovation, accelerate growth, and future-proof
            your business.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="bg-white dark:bg-transparent grid grid-cols-1 md:grid-cols-2 rounded-lg mt-10 mb-10"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-10 flex items-center justify-center gap-4 `}
            >
              <img
                src={service.icon}
                alt={service.title}
                className={`h-16 p-2 rounded-md ${service.bgColor} mr-4`}
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium dark:text-white ">
                  {service.title}
                </h3>
                <p className="text-sm text-[#797979] max-w-sm dark:text-primary-gray">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-3 py-3 flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="px-2 md:w-1/2 md:ml-8 lg:ml-32"
        >
          <h1 className="text-xl font-semibold tracking-wider my-3 lg:text-3xl dark:text-primary-light">
            <span className="text-primary">Crafting Digital </span>Solutions for
            a
            <br />
            Smarter Tomorrow.{" "}
          </h1>
          <p className="text-sm text-[#545454] dark:text-primary-gray my-3 lg:max-w-lg lg:text-md lg:mb-5 leading-relaxed">
            At Nexsys AI, we offer a full spectrum of technology services
            designed to help businesses innovate, grow, and lead in the digital
            age. Our solutions are tailored to your unique needs, blending
            creativity, strategy, and technology for real impact.
            <br />
            <br />
            Have a project in mind? Let’s work together to bring your ideas to
            life and create innovative solutions that drive success. Reach out
            today!
          </p>
          <button
            type="button"
            className="border border-primary p-3 rounded-md text-primary text-sm hover:bg-primary hover:text-white hover:border-transparent"
          >
            <Link to="/contact">Contact Us</Link>
          </button>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 "
        >
          <img
            src={ServiceImg2}
            alt="Service"
            className="max-w-sm md:max-w-lg lg:max-w-3xl"
            loading="lazy"
          />
        </motion.div>
      </div>
      <StatsSection />

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="py-10 px-10"
      >
        <h2 className="text-3xl font-normal text-start mb-8 dark:text-primary-light">
          Our Latest Projects
        </h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg px-3 flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center w-full h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded-t-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-4  flex flex-col items-center justify-center w-full ">
                <h3 className="text-md font-semibold mb-2  dark:text-primary-light">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-72 dark:text-primary-gray">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default ServicePage;
