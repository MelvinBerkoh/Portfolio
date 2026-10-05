import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background:
            "linear-gradient(145deg, #111827 0%, #0b1220 100%)",
          border: "3px solid #4195f5",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          fontSize: 27,
          fontWeight: 800,
          letterSpacing: "-0.08em",
        }}
      >
        <span style={{ color: "#ffffff" }}>M</span>
        <span style={{ color: "#60a5fa" }}>B</span>
      </div>
    ),
    {
      ...size,
    },
  );
}
