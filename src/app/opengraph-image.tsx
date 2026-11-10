import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name}, ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a1022",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(255,92,147,0.35), transparent 50%), radial-gradient(circle at 10% 90%, rgba(167,139,250,0.3), transparent 50%)",
          color: "#edf1fc",
        }}
      >
        <div style={{ fontSize: 30, color: "#a3aecb" }}>Portfolio</div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 16, lineHeight: 1.05 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 44, marginTop: 24, color: "#ff8a3d" }}>{siteConfig.title}</div>
        <div style={{ fontSize: 28, marginTop: 32, color: "#a3aecb" }}>Next.js · Node.js · MongoDB</div>
      </div>
    ),
    size,
  );
}
