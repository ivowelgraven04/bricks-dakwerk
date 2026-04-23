import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bricks Dakwerken — Vakmanschap in dak- en kluswerkzaamheden";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 85% 0%, rgba(209,122,71,0.35) 0%, rgba(10,10,10,0) 60%), radial-gradient(circle at 0% 100%, rgba(209,122,71,0.18) 0%, rgba(10,10,10,0) 55%), linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="42" height="42" viewBox="0 0 44 44" fill="none">
              <path
                d="M8 22 L22 10 L36 22"
                stroke="#D17A47"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="13"
                y="22"
                width="18"
                height="12"
                stroke="#D17A47"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "0.08em" }}>
              BRICKS
            </div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginTop: 2,
              }}
            >
              Dak- & Kluswerkzaamheden
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#D17A47",
              fontWeight: 600,
            }}
          >
            Zuid-Limburg · Sinds jaren actief
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginTop: 18,
            }}
          >
            Vakmanschap in dak- en
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#D17A47",
            }}
          >
            kluswerkzaamheden.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 1000,
              lineHeight: 1.35,
              marginTop: 22,
            }}
          >
            Dakbedekking · Onderhoud · Isolatie · Ontmossen · Plastisol · Reparaties
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 600,
            }}
          >
            www.bricksdakwerk.nl
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 22,
              color: "#fff",
              background: "#D17A47",
              padding: "12px 24px",
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            Bel 06-48041380
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
