import { ImageResponse } from "next/og";

export const alt =
  "Melvin Berkoh — Software Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #080b12 0%, #0c1425 58%, #102a56 100%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "1px solid rgba(148, 163, 184, 0.35)",
              background:
                "rgba(255, 255, 255, 0.05)",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            MB
          </div>

          <div
            style={{
              marginLeft: "22px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              Melvin Berkoh
            </span>

            <span
              style={{
                marginTop: "6px",
                fontSize: "16px",
                color: "#94a3b8",
              }}
            >
              Software Engineer
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              maxWidth: "930px",
              fontSize: "76px",
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-4px",
            }}
          >
            I build software from idea to production.
          </div>

          <div
            style={{
              marginTop: "34px",
              fontSize: "22px",
              color: "#94a3b8",
            }}
          >
            Full-stack products · Frontend systems · Data tools
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            color: "#60a5fa",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Portfolio · 2026
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}