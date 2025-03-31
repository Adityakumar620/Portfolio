

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "2px solid #F1F1F1",
          borderTopColor: "transparent",
          animation: "spin 1s linear infinite",
        }}
      />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 20, // Reduced margin for mobile
        }}
      >
        {progress.toFixed(0)}% {/* Simplified to whole numbers */}
      </p>
    </Html>
  );
};

export default CanvasLoader;
