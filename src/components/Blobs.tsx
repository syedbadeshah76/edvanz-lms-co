export default function Blobs() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="blob bg-brand-blue/40 h-[480px] w-[480px] -top-40 -left-32 animate-pulse" />
      <div
        className="blob bg-brand-purple/40 h-[520px] w-[520px] top-1/3 -right-40"
        style={{ animation: "pulse 6s ease-in-out infinite" }}
      />
      <div
        className="blob bg-brand-violet/30 h-[400px] w-[400px] bottom-0 left-1/3"
        style={{ animation: "pulse 8s ease-in-out infinite" }}
      />
    </div>
  );
}
