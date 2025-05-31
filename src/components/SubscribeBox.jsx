import React, { useState } from "react";
import { motion } from "framer-motion"; // fixed incorrect import
import Img1 from "../assets/star.png";
import Img2 from "../assets/cc.png";

const SubscribeBox = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    // Here, you could integrate with a real API
    console.log("Subscribed email:", email);

    setStatus("success");
    setEmail(""); // clear input
    setTimeout(() => setStatus(""), 3000); // reset message after 3s
  };

  return (
    <div className="relative bg-[#E8F4FA] dark:bg-primary-dark flex flex-col items-center py-20 px-2 dark:border-t dark:border-gray-600">
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center mb-10 text-xl font-semibold lg:text-3xl lg:w-1/3 dark:text-primary-light"
      >
        Let’s build the future— reach out to us today.
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-3 items-center lg:flex-row"
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border-2 p-2 rounded-md w-64 lg:w-96 lg:p-4 text-sm"
        />
        <button
          type="button"
          onClick={handleSubscribe}
          className="bg-black text-white p-2 rounded-md lg:px-5"
        >
          Subscribe
        </button>
      </motion.div>
      {status === "success" && (
        <p className="text-green-600 text-sm mt-2">Subscribed successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2">Please enter a valid email.</p>
      )}
      <img
        src={Img1}
        alt="star"
        className="h-20 w-auto absolute -top-10 left-0"
        loading="lazy"
      />
      <img
        src={Img2}
        alt="decoration"
        className="h-16 w-auto absolute bottom-1 right-10 lg:top-24 lg:right-24"
        loading="lazy"
      />
    </div>
  );
};

export default SubscribeBox;
