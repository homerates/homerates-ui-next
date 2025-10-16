// components/Logo.tsx
export default function Logo({ variant = "icon", height = 40 }: { variant?: "icon" | "name"; height?: number }) {
  const file = variant === "icon" ? "homerates-icon.svg" : "homerates-name.svg";
  return (
    <div style={{ background: "#f0f0f0", padding: 8, display: "inline-block" }}>
      <img
        src={`/assets/${file}`}
        alt={`HomeRates ${variant}`}
        height={height}
        style={{ display: "block" }}
      />
    </div>
  );
}
