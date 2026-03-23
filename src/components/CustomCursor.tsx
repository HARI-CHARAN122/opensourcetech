import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile to disable custom cursor
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsMobile(true);
      return;
    }

    // Hide the default operating system cursor
    document.body.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        scale: isHovering ? 1.15 : 1,
        rotate: isHovering ? -10 : 0,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      style={{
        filter: "drop-shadow(0px 4px 8px rgba(236, 72, 153, 0.4))",
      }}
    >
      <MousePointer2 
        size={28} 
        color="#fff" 
        className="fill-pink-500" 
      />
    </motion.div>
  );
};

export default CustomCursor;
