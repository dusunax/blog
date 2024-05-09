import { FileType } from "@/app/gallery/page";
import { getBase64 } from "./getBase64";

export async function getPlaceholderList(fileList: FileType[]) {
  return await Promise.all(
    fileList
      .filter((e) => e.fileExt === "png")
      .map(async (file) => {
        const { base64, img } = await getBase64(file.filePath);
        return { filename: file.name, base64, img };
      })
  );
}
