import React from "react";

function MyComponent() {
  const backgroundStyle = {
    backgroundImage: `url(./bimg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };

  return (
    <section className="bg">
      <div style={backgroundStyle}></div>
    </section>
  );
}

export default MyComponent;
