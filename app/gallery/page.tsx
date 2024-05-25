import fs from "fs";
import path from "path";

import { PDF_DIR_PATHS, SLIDES_DIR_PATHS } from "@/constant/path";
import { getPlaceholderList } from "@/utils/getPlaceholderList";
import { extractDateFromFilename } from "@/utils/filename";
import SlideList from "@/components/gallery/SlideList";

export const metadata = generateMetadata();

function generateMetadata() {
  return {
    title: "Gallery",
    description: "A gallery of slides",
  };
}

export default async function GalleryPage() {
  const pdfFileList = (
    await Promise.all(PDF_DIR_PATHS.map(getPdfFileList))
  ).flat();
  const pngFileList = (
    await Promise.all(SLIDES_DIR_PATHS.map(getDirFileList))
  ).flat();
  const fileList = [...pdfFileList, ...pngFileList];
  const blurDataURLs = await getPlaceholderList(fileList);

  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Gallery</h1>
      <hr />
      <SlideList fileList={fileList} placeholderList={blurDataURLs} />
    </section>
  );
}

export interface FileType {
  name: string;
  files: string[];
  filePath: string;
  fileExt: string;
  createdAt: string;
  placeholderImage?: string;
}

async function getPdfFileList(directoryPath: string) {
  const files = fs.readdirSync(directoryPath);
  const groupedFiles: FileType[] = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    groupedFiles.push({
      name: file.split(".")[0],
      files: [file],
      filePath: filePath,
      fileExt: file.split(".").pop() || "",
      createdAt: extractDateFromFilename(file.split(".")[0]),
    });
  }

  return groupedFiles.filter((file) => file.fileExt === "pdf");
}

//
async function getDirFileList(directoryPath: string) {
  const files = fs.readdirSync(directoryPath);
  const groupedFiles: FileType[] = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const subGroupedFiles = await getDirFileList(filePath);
      groupedFiles.push(...subGroupedFiles);
    } else {
      const folderName = path.basename(directoryPath);
      const existingGroup = groupedFiles.find(
        (group) => group.name === folderName
      );
      if (existingGroup) {
        existingGroup.files.push(path.parse(file).base);
      } else {
        groupedFiles.push({
          name: folderName,
          files: [path.parse(file).base],
          filePath: filePath.split("public")[1],
          fileExt: path.parse(file).ext.split(".")[1],
          createdAt: extractDateFromFilename(folderName),
        });
      }
    }
  }
  return groupedFiles;
}
