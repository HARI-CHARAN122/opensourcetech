import FloatingGradientShapes from "./FloatingGradientShapes";
import GradientGlowBlobs from "./GradientGlowBlobs";
import GridPatternOverlay from "./GridPatternOverlay";

const SiteBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <GradientGlowBlobs />
      <FloatingGradientShapes />
      <GridPatternOverlay />
    </div>
  );
};

export default SiteBackground;
