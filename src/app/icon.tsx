import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "linear-gradient(135deg, #ff8a3d, #ff5c93 55%, #a78bfa)",
          color: "#0a1022",
          fontSize: 30,
          fontWeight: 800,
          borderRadius: 14,
        }}
      >
        SM
      </div>
    ),
    size,
  );
}
