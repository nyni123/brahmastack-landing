import Image from "next/image";

/** Primary mark: company logo (also used for favicon via layout metadata). */
const LOGO_SRC = "/main-logo.png";

type BrandLogoProps = {
  width: number;
  height: number;
  alt: string;
  /** When true, loads above-the-fold (nav). */
  priority?: boolean;
};

/**
 * Brahma Stack wordmark + monogram from `public/main-logo.png`.
 * @author Cursor
 */
export function BrandLogo({ width, height, alt, priority }: BrandLogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className="brand-logo-img"
    />
  );
}
