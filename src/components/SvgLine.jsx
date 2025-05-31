import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGLineAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative" ref={ref}>
      {/* Card 1 */}
      <div className="card relative z-10 bg-white p-6 rounded-lg shadow-lg">
        <div className="icon bg-blue-500 p-3 rounded-full text-white">🔵</div>
        <h3 className="text-lg font-bold mt-4">Card 1</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {/* SVG Line */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-50"
        viewBox="0 0 400 400"
        style={{ overflow: "visible" }}
        initial={{ strokeDashoffset: 500 }}
        animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 500 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <path
          d="M50 50 C20 120, 350 50, 350 150"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeDasharray="500"
        />
      </motion.svg>

      {/* Card 2 */}
      <div className="card relative z-10 mt-20 bg-white p-6 rounded-lg shadow-lg">
        <div className="icon bg-green-500 p-3 rounded-full text-white">🟢</div>
        <h3 className="text-lg font-bold mt-4">Card 2</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
