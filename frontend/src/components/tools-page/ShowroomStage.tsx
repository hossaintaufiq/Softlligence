"use client";

import { useState } from "react";

const paints = [
  { name: "Snow White Pearl", body: "#eef0f4", shade: "#b9bfcb" },
  { name: "Aurora Black", body: "#23262d", shade: "#0c0d10" },
  { name: "Gravity Blue", body: "#3452f0", shade: "#1d2f9c" },
  { name: "Glacier Green", body: "#5e8f86", shade: "#365a53" },
  { name: "Signal Red", body: "#d23b3b", shade: "#8c1f22" },
];

const trims = ["STD", "X-Line"] as const;

function Wheel({ cx, xline }: { cx: number; xline: boolean }) {
  return (
    <g transform={`translate(${cx} 170)`}>
      <circle r="30" fill="#15171c" />
      <circle r="21" fill={xline ? "#2b2e35" : "#9aa1ad"} />
      <g className="sr-spin">
        {[0, 72, 144, 216, 288].map((a) => (
          <rect
            key={a}
            x="-2.4"
            y="-20"
            width="4.8"
            height="17"
            rx="2"
            fill={xline ? "#5b6170" : "#dfe3ea"}
            transform={`rotate(${a})`}
          />
        ))}
      </g>
      <circle r="5" fill={xline ? "#9aa1ad" : "#2b2e35"} />
    </g>
  );
}

/**
 * Showroom configurator preview: a drivable car illustration with live paint and trim switching,
 * echoing the 3D configurator that ships with the platform.
 */
export function ShowroomStage() {
  const [paint, setPaint] = useState(2);
  const [trim, setTrim] = useState<(typeof trims)[number]>("X-Line");
  const p = paints[paint];
  const xline = trim === "X-Line";

  return (
    <div className="mock sr" role="group" aria-label="Showroom 3D configurator preview">
      <div className="mock__chrome" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>Showroom · 3D configurator</span>
        <em>Preview</em>
      </div>

      <div className="sr-stage">
        <div className="sr-sky" aria-hidden="true" />
        <div className="sr-road" aria-hidden="true">
          <span />
        </div>
        <span className="sr-badge" aria-hidden="true">
          Pick a trim and colour
        </span>

        <svg
          className="sr-car"
          viewBox="0 0 460 210"
          role="img"
          aria-label={`Car in ${p.name}, ${trim} trim`}
        >
          <defs>
            <linearGradient id="sr-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={p.body} />
              <stop offset="1" stopColor={p.shade} />
            </linearGradient>
            <linearGradient id="sr-glass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#9fb4d8" />
              <stop offset="1" stopColor="#2a3446" />
            </linearGradient>
            <linearGradient id="sr-sheen" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fff" stopOpacity="0" />
              <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <clipPath id="sr-clip">
              <path d="M28 150 C26 122 40 108 70 102 L130 92 C160 60 196 44 250 42 L322 44 C352 46 372 62 392 92 L420 98 C440 104 446 120 444 150 Z" />
            </clipPath>
          </defs>

          <ellipse cx="230" cy="196" rx="200" ry="9" fill="#000" opacity="0.28" />

          <g className="sr-body">
            {/* Body */}
            <path
              d="M28 150 C26 122 40 108 70 102 L130 92 C160 60 196 44 250 42 L322 44 C352 46 372 62 392 92 L420 98 C440 104 446 120 444 150 Z"
              fill="url(#sr-body)"
            />
            {/* Sheen sweep */}
            <g clipPath="url(#sr-clip)">
              <rect className="sr-sheen" x="-120" y="30" width="90" height="140" fill="url(#sr-sheen)" />
            </g>
            {/* Windows */}
            <path d="M146 94 C170 68 196 56 236 54 L238 94 Z" fill="url(#sr-glass)" />
            <path d="M248 54 L318 56 C342 58 358 72 372 94 L248 94 Z" fill="url(#sr-glass)" />
            {/* Roof rails for X-Line */}
            {xline && <path d="M190 46 L330 46" stroke="#15171c" strokeWidth="5" strokeLinecap="round" />}
            {/* Character line and door seams */}
            <path d="M60 120 L430 116" stroke="#000" strokeOpacity="0.18" strokeWidth="2" />
            <path d="M242 96 L242 148 M140 96 L136 148 M352 96 L356 146" stroke="#000" strokeOpacity="0.2" />
            {/* Lights */}
            <path d="M420 104 L442 112 L440 120 L416 116 Z" fill="#fff8d6" className="sr-lamp" />
            <path d="M30 112 L46 108 L46 118 L30 120 Z" fill="#ff4d4d" />
            {/* Lower cladding */}
            <path
              d="M28 150 L444 150 L440 160 L32 160 Z"
              fill={xline ? "#15171c" : p.shade}
              opacity={xline ? 1 : 0.6}
            />
            {/* Arches */}
            <path d="M80 160 A42 42 0 0 1 164 160" fill="#0b0c0f" />
            <path d="M304 160 A42 42 0 0 1 388 160" fill="#0b0c0f" />
          </g>

          <Wheel cx={122} xline={xline} />
          <Wheel cx={346} xline={xline} />
        </svg>
      </div>

      <div className="sr-controls">
        <div className="sr-trims" role="radiogroup" aria-label="Trim">
          {trims.map((t) => (
            <button
              key={t}
              type="button"
              role="radio"
              aria-checked={trim === t}
              className={trim === t ? "is-on" : undefined}
              onClick={() => setTrim(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="sr-paints" role="radiogroup" aria-label="Paint colour">
          {paints.map((c, i) => (
            <button
              key={c.name}
              type="button"
              role="radio"
              aria-checked={paint === i}
              aria-label={c.name}
              title={c.name}
              className={paint === i ? "is-on" : undefined}
              style={{ "--swatch": c.body } as React.CSSProperties}
              onClick={() => setPaint(i)}
            />
          ))}
        </div>
        <p className="sr-name">{p.name}</p>
      </div>
    </div>
  );
}
