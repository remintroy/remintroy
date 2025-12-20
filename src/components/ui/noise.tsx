export const Noise = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.4] mix-blend-soft-light"
      style={{
        backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
      }}
    />
  );
};
