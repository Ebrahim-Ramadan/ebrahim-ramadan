import sizeOf from "image-size";
import { join } from "path";
import { readFile } from "fs/promises";
import { Caption } from "./caption";
import NextImage from "next/image";

export async function Image({
  src,
  alt: originalAlt,
  width = null,
  height = null,
}: {
  src: string;
  alt?: string;
  width: number | null;
  height: number | null;
}) {
  const isDataImage = src.startsWith("data:");
  const isRemoteImage = src.startsWith("http");
  if (isDataImage) {
    /* eslint-disable @next/next/no-img-element */
    return <img src={src} alt={originalAlt ?? ""} />;
  }

  let alt: string | null = null;
  let dividedBy = 100;

  if (typeof originalAlt === "string") {
    const match = originalAlt.match(/(.*) (\[(\d+)%\])?$/);
    if (match != null) {
      alt = match[1];
      dividedBy = match[3] ? parseInt(match[3]) : 100;
    }
  } else {
    alt = originalAlt ?? null;
  }

  const factor = dividedBy / 100;

  if (isRemoteImage) {
    /* eslint-disable @next/next/no-img-element */
    return (
      <span className="my-5 flex flex-col items-center">
        <img className="rounded-lg" src={src} alt={alt ?? ""} />
        {alt && <Caption>{alt}</Caption>}
      </span>
    );
  }

  if (width === null || height === null) {
    let imageBuffer: Buffer;

    if (
      !process.env.CI &&
      process.env.VERCEL_URL &&
      process.env.NODE_ENV === "production"
    ) {
      imageBuffer = Buffer.from(
        new Uint8Array(
          (await fetch(
            "https://" + process.env.VERCEL_URL + src
          ).then(res => res.arrayBuffer())) as ArrayBuffer
        )
      );
    } else {
      imageBuffer = await readFile(
        new URL(
          join(import.meta.url, "..", "..", "..", "..", "public", src)
        ).pathname
      );
    }

    const computedSize = sizeOf(imageBuffer);
    if (
      computedSize.width === undefined ||
      computedSize.height === undefined
    ) {
      throw new Error("Could not compute image size");
    }
    width = computedSize.width;
    height = computedSize.height;
  }

  return (
    <span className="my-5 flex flex-col items-center">
      <NextImage
        className="rounded-lg"
        width={width * factor}
        height={height * factor}
        alt={alt ?? ""}
        src={src}
      />

      {alt && <Caption>{alt}</Caption>}
    </span>
  );
}