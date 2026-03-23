const GridPatternOverlay = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]"
    >
      <div className="grid-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/40" />
    </div>
  );
};

export default GridPatternOverlay;
