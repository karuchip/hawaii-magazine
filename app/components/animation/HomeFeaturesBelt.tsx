import { useEffect, useRef, useState } from "react";

export default function FeaturesBelt() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFixed(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`homeFeaturesBelt ${fixed ? "fixed top-0 left-0 w-full z-50 bg-white" : ""}`}
    >
      <p className="en text-mask">Features</p>
    </div>
  );
}
