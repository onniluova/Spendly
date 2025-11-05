import * as Plot from "@observablehq/plot";
import { useEffect, useRef } from "react";

interface PlotFigureProps {
  options: Plot.PlotOptions;
}

export default function DisplayCharts({ options }: PlotFigureProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const plot = Plot.plot(options);
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(plot);
      
      return () => plot.remove();
    }
  }, [options]);

  return <div ref={containerRef} />;
}