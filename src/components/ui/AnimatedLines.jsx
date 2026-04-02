import React, { useRef, useEffect, useState, useMemo } from 'react';

const LINES = 18;
const W = 1200;
const H = 700;
const CX = W / 2;

function buildPath(i) {
  const t = i / (LINES - 1);
  const spread = W * 0.47 * (1 - t * 0.65);
  const peakY  = H * 0.04 + t * H * 0.40;
  const ctrlY  = peakY + (H - peakY) * 0.35;
  const lx = CX - spread;
  const rx = CX + spread;
  return `M ${lx},${H} C ${lx},${ctrlY} ${CX},${peakY} ${CX},${peakY} C ${CX},${peakY} ${rx},${ctrlY} ${rx},${H}`;
}

function Tracer({ d, duration, delay, color, opacity, uid }) {
  const ref = useRef(null);
  const [len, setLen] = useState(0);

  useEffect(() => {
    if (ref.current) setLen(ref.current.getTotalLength());
  }, [d]);

  const dashLen = len * 0.07;
  const keyframe = useMemo(() => `@keyframes tr_${uid} {
    from { stroke-dashoffset: ${len + dashLen}; }
    to   { stroke-dashoffset: ${-(len + dashLen)}; }
  }`, [uid, len, dashLen]);

  return (
    <>
      <path ref={ref} d={d} fill="none" stroke="transparent" strokeWidth="0" />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          opacity,
          strokeDasharray: `${dashLen} ${len}`,
          strokeDashoffset: len + dashLen,
          animation: `tr_${uid} ${duration}s linear ${delay}s infinite`,
        }}
      />
      {len > 0 && <style>{keyframe}</style>}
    </>
  );
}

export default function AnimatedLines({
  className = '',
  lineColor = 'rgba(255,255,255,0.12)',
  tracerColor = '#c9a96e',
}) {
  const tracers = [
    { lineIndex: 1,  duration: 5, delay: 0,   opacity: 1   },
    { lineIndex: 6,  duration: 7, delay: 2,   opacity: 0.5 },
    { lineIndex: 13, duration: 6, delay: 3.5, opacity: 0.3 },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Static arch lines */}
        {Array.from({ length: LINES }, (_, i) => (
          <path
            key={i}
            d={buildPath(i)}
            fill="none"
            stroke={lineColor}
            strokeWidth="1"
          />
        ))}

        {/* Animated tracers */}
        {tracers.map((t, i) => (
          <Tracer
            key={i}
            d={buildPath(t.lineIndex)}
            duration={t.duration}
            delay={t.delay}
            color={tracerColor}
            opacity={t.opacity}
            uid={`anim${i}`}
          />
        ))}
      </svg>
    </div>
  );
}
