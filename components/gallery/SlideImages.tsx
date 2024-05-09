import Image from "next/image";
import { getBase64 } from "@/utils/getBase64";

interface SlideImagesProps {
  filePath: string;
  length: string;
}

export default async function SlideImages({
  filePath,
  length,
}: SlideImagesProps) {
  if (!length) return null;
  const array = new Array(+length).fill(0);

  return (
    <>
      {array.map(async (_, index) => {
        const src = `/${filePath}/${index + 1}.png`;
        const { base64 } = await getBase64(src);

        return (
          <Image
            src={`/${filePath}/${index + 1}.png`}
            width={860}
            height={480}
            className="m-0 mx-auto"
            alt={"page " + index}
            key={"page " + index}
            sizes="(max-width: 750px) 90vw"
            blurDataURL={base64}
            placeholder="blur"
            priority={index < 2 ? true : false}
          />
        );
      })}
    </>
  );
}
