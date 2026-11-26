"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { ProjectScreen } from "@/lib/homeProjects";

type Props = {
  projectName: string;
  screens: ProjectScreen[];
  /** Fetch the visible screenshot now, even if it is still out of view. */
  preload?: boolean;
};

/** One large screen, a strip to switch between screens, and a full-size viewer. */
export function ProjectScreens({ projectName, screens, preload = false }: Props) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  /* A screenshot is requested the first time it is shown, then kept for instant switching. */
  const [seen, setSeen] = useState<number[]>([0]);
  const dialog = useRef<HTMLDialogElement>(null);
  const current = screens[active];

  const show = (index: number) => {
    const next = (index + screens.length) % screens.length;
    setActive(next);
    setSeen((list) => (list.includes(next) ? list : [...list, next]));
  };

  const enlarge = () => {
    setOpen(true);
    dialog.current?.showModal();
  };

  return (
    <div className="pshots">
      <button type="button" className="pshots__screen" onClick={enlarge}>
        {screens.map((s, i) =>
          seen.includes(i) ? (
            <Image
              key={s.src}
              src={s.src}
              alt={i === active ? s.alt : ""}
              aria-hidden={i !== active}
              fill
              sizes="(min-width: 1024px) 760px, 92vw"
              quality={75}
              loading={preload ? "eager" : "lazy"}
              className={i === active ? "is-active" : undefined}
            />
          ) : null,
        )}
        <span className="pshots__zoom">
          <Maximize2 size={14} aria-hidden="true" />
          View full size
        </span>
      </button>

      <div className="pshots__strip" role="group" aria-label={`${projectName} screens`}>
        {screens.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className="pshots__thumb"
            aria-pressed={i === active}
            onClick={() => show(i)}
          >
            <Image src={s.src} alt="" width={160} height={67} sizes="160px" quality={60} />
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="pview"
        aria-label={`${projectName} screenshots`}
        data-lenis-prevent
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") show(active + 1);
          if (e.key === "ArrowLeft") show(active - 1);
        }}
      >
        {open && (
          <div className="pview__panel">
            <div className="pview__bar">
              <p aria-live="polite">
                <b>{projectName}</b>
                <span>
                  {current.label}, {active + 1} of {screens.length}
                </span>
              </p>
              <button type="button" onClick={() => show(active - 1)} aria-label="Previous screen">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => show(active + 1)} aria-label="Next screen">
                <ChevronRight size={20} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => dialog.current?.close()} aria-label="Close">
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="pview__scroll">
              <Image src={current.src} alt={current.alt} width={1600} height={667} sizes="1600px" quality={75} />
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
