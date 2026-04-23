import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 25%, rgba(209,122,71,0.45) 0%, rgba(10,10,10,1) 70%), linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            borderRadius: 999,
            border: "4px solid #ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 22 L22 10 L36 22"
              stroke="#D17A47"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="13"
              y="22"
              width="18"
              height="12"
              stroke="#D17A47"
              strokeWidth="3.5"
              fill="none"
            />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
