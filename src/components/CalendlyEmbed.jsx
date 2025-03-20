import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/salesworx-ai?hide_gdpr_banner=1&primary_color=207c97"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CalendlyEmbed;
