'use client';

import { useRotateYValues } from "@/utils/customHooks";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { AI, Motion, Gears, Code, Cube } from "../globals/Icons";

const ITEMS = [
 
  {
    title: "Frontend Dev",
    description: "Build interactive, visually compelling web pages.",
    icon: (
      <Code className="h-6 w-6" />
    ),
    id: 2,
  },
  {
    title: "UI Design",
    description: "Design intuitive user interfaces and experiences.",
    icon: (
      <Cube className="h-6 w-6" />
    ),
    id: 3,
  },
  {
    title: "Motion Design",
    description: "Create engaging animations and transitions.",
    icon: (
      <Motion className="h-6 w-6" />

    ),
    id: 4,
  },
  {
    title: "Project Management",
    description: "Manage product lifecycle, from conception to launch.",
    icon: (
      <Cube className="h-6 w-6" />
    ),
    id: 1,
  },
  {
    title: "Design Engineer",
    description: "Focusing on details, design systems, and code.",
    icon: (
      <Gears className="h-6 w-6" />
    ),
    id: 5,
  },
];
const ITEM_WIDTH = 200;
const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const CONTAINER_WIDTH = ITEM_WIDTH + GAP;

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};



export default function Subtle3DCarousel() {
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, ITEMS.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const leftConstraint = -((ITEM_WIDTH + GAP) * (ITEMS.length - 1));

  const rotateYValues = useRotateYValues(x, ITEMS, ITEM_WIDTH, GAP);


  return (
    <div className="relative overflow-hidden p-4 ">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{
          left: leftConstraint,
          right: 0,
        }}
        style={{
          width: ITEM_WIDTH,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: currentIndex * ITEM_WIDTH + ITEM_WIDTH / 2,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * (ITEM_WIDTH + GAP)) }}
        transition={SPRING_OPTIONS}
      >
        {ITEMS.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex shrink-0 flex-col items-start justify-between rounded-3xl cursor-grab	 border border-2 border-mauve-light-6/40 backdrop-blur-3xl bg-black/10"
            style={{
              width: ITEM_WIDTH,
              height: "100%",
              rotateY: rotateYValues[index],
            }}
            transition={SPRING_OPTIONS}
          >
            <div className="mb-4 px-5 pt-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                {item.icon}
              </span>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-1 text-sm font-medium text-mauve-light-12 dark:text-mauve-dark-12">
                {item.title}
              </div>
              <p className="text-sm text-mauve-light-11 dark:text-mauve-dark-11">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex w-full justify-center">
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {ITEMS.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-150  ${
                currentIndex === index
                  ? "bg-gray-50"
                  : "bg-gray-400"
              }`}
              animate={{ scale: currentIndex === index ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
              transition={{
                duration: 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
