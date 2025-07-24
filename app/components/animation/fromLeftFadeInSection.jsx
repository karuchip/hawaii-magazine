import {useEffect, useRef, useState} from "react"

const FromLeftFadeInSection = ({children}) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target)
          }
        });
      },
      {threshold: 0.2}
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [])

  return (
    <div
      className={`from-left-fade-in ${isVisible? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  )

}

export default FromLeftFadeInSection
