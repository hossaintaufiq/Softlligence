import Image from "next/image";

/**
 * Full-bleed photographic backdrop for dark brand bands. Sits under the
 * 3D layer; a navy gradient keeps overlaid copy legible.
 * Photos: Unsplash (free licence), stored in /public/images.
 */
export function BandPhoto({ src, position = "center" }: { src: string; position?: string }) {
  return (
    <div className="band-photo" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        quality={60}
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}

/** Framed editorial photo with a gold caption chip. */
export function PhotoFrame({
  src,
  alt,
  caption,
  ratio = "16 / 10",
  sizes = "(min-width: 900px) 40vw, 92vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  sizes?: string;
}) {
  return (
    <figure className="photo-frame" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} quality={65} style={{ objectFit: "cover" }} />
      <span className="photo-frame__tint" aria-hidden="true" />
      {caption && <figcaption className="photo-frame__cap">{caption}</figcaption>}
    </figure>
  );
}
