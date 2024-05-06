import Image from "next/image";

interface SlideImagesProps {
  filePath: string;
  length: string;
}

export default function SlideImages({ filePath, length }: SlideImagesProps) {
  if (!length) return null;
  const array = new Array(+length).fill(0);

  return (
    <>
      {array.map((_, index) => (
        <Image
          src={`/${filePath}/${index + 1}.png`}
          width={1200}
          height={900}
          className="m-0"
          alt={"page " + index}
          key={"page " + index}
        />
      ))}
    </>
  );
}
