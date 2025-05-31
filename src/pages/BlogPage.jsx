import { IoIosSearch } from "react-icons/io";
import { motion } from "motion/react";
import Project1 from "../assets/project/p1.png";
import Project2 from "../assets/project/p2.png";
import Project3 from "../assets/project/p3.png";
import Blog1 from "../assets/blog/b2.png";
import Blog2 from "../assets/blog/b3.png";
import Blog3 from "../assets/blog/b4.png";
import Blog4 from "../assets/blog/b1.png";

const Card = ({ image, title, text, name, date }) => {
  return (
    <div className="bg-white rounded-lg p-6 max-w-xs">
      <motion.img
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        src={image}
        alt={title}
        className="max-w-md h-60 rounded-lg object-cover mb-4"
        loading="lazy"
      />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{text}</p>
        <div className="flex items-center">
          <img
            src="/members/ceo.png" // Replace with actual profile image source
            alt={name}
            className="w-10 h-10 rounded-full object-cover mr-3"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const BlogPage = () => {
  const cards = [
    {
      image: Blog1,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      name: "Name here",
      date: "20.12.2020",
    },
    {
      image: Blog2,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      name: "Name here",
      date: "20.12.2020",
    },
    {
      image: Blog3,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      name: "Name here",
      date: "20.12.2020",
    },
    {
      image: Project1,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      name: "Name here",
      date: "20.12.2020",
    },
    {
      image: Project2,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      name: "Name here",
      date: "20.12.2020",
    },
    {
      image: Project3,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .",
      name: "Name here",
      date: "20.12.2020",
    },
    // Add more card objects as needed
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-center leading-relaxed tracking-wider md:text-4xl md:font-bold md:tracking-wider md:leading-relaxed dark:text-primary-light"
        >
          Latest news <br /> <span className="text-primary ">Updates</span>
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="text-[#777777] text-sm max-w-56 py-3"
        >
          Lorem Ipsum is simply dummy text of the printing .
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex gap-2 items-center bg-[#F1F1F1] px-6 text-[#727272] rounded-md text-xs md:max-w-lg"
        >
          <IoIosSearch size={20} />
          <input
            type="text"
            value=""
            placeholder="Search"
            className="bg-[#F1F1F1] w-full h-10 text-sm outline-none"
          />
        </motion.div>
      </div>
      <div className="md:flex md:px-20 md:py-3 lg:gap-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center md:w1/2"
        >
          <img
            src={Blog4}
            alt="blog"
            className="max-w-sm rounded-md lg:max-w-xl"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="px-3 md:w1/2 mt-8"
        >
          <h1 className="text-lg font-semibold leading-relaxed my-3 lg:max-w-md lg:text-xl lg:tracking-wider dark:text-primary-light">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <p className="text-[#727272] text-sm leading-relaxed lg:max-w-md lg:tracking-wider lg:leading-relaxed lg:my-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the .
          </p>
          <div className="flex items-center justify-between my-5">
            <div className="flex items-end">
              <img
                src="/src/assets/members/ceo.png"
                alt="Avatar"
                className="h-12 w-12 rounded-full"
                loading="lazy"
              />
              <div className="flex flex-col items-center text-sm px-2">
                <p className="font-medium dark:text-primary-light">Name Here</p>
                <p className="text-[#7B7B7B]">20.12.2025</p>
              </div>
            </div>
            <span className="text-xs text-primary">Read More</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  my-20 justify-items-center lg:gap-4"
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </motion.div>
    </div>
  );
};

export default BlogPage;
