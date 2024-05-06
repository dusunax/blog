import fs from "fs";
import path from "path";
import PDFSlideList from "@/components/gallery/PDFSlideList";
import ImageSlideList from "@/components/gallery/ImageSlideList";
import { PDF_DIR_PATHS, SLIDES_DIR_PATHS } from "@/constant/path";

export const metadata = generateMetadata();

function generateMetadata() {
  return {
    title: "Gallery",
    description: "A gallery of slides",
  };
}

export default async function GalleryPage() {
  const pdfFileList = await getPdfFileList();
  const groupedFileList = (
    await Promise.all(SLIDES_DIR_PATHS.map(getDirFileList))
  ).flat();

  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Gallery</h1>
      <hr />

      <h2 id="slides">Slides</h2>
      <PDFSlideList fileList={pdfFileList} />
      <ImageSlideList fileList={groupedFileList} />
    </section>
  );
}

export interface FileType {
  name: string;
  files: string[];
  filePath: string;
  fileExt: string;
}

async function getPdfFileList() {
  let PDFFiles: FileType[] = [];

  PDF_DIR_PATHS.forEach((path) => {
    const filePaths = fs.readdirSync(path);
    filePaths.forEach((file) => {
      PDFFiles.push({
        name: file.split(".")[0],
        files: [file],
        filePath: `${path.split("./public")[1]}/${file}`,
        fileExt: file.split(".").pop() || "",
      });
    });
  });

  return PDFFiles.filter((file) => file.fileExt === "pdf");
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
        });
      }
    }
  }
  return groupedFiles;
}
