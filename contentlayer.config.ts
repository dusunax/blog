import { defineDocumentType } from "contentlayer/source-files";
import { spawn } from "node:child_process";
import { makeSource } from "contentlayer/source-remote-files";

const Docs = defineDocumentType(() => ({
  name: "docs",
  filePathPattern: `docs/**/*.md`,
  contentType: "markdown",
  fields: {
    raw: {
      type: "string",
      required: false,
    },
    type: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
    code: {
      type: "string",
      resolve: (doc) => doc.raw,
    },
  },
}));

const React = defineDocumentType(() => ({
  name: "react",
  filePathPattern: `react/**/*.md`,
  contentType: "markdown",
  fields: {
    raw: {
      type: "string",
      required: false,
    },
    type: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/react/react-deep-dive/${doc._raw.flattenedPath}`,
    },
    code: {
      type: "string",
      resolve: (doc) => doc.raw,
    },
  },
}));

const syncContentFromGit = async (contentDir: string) => {
  const syncRun = async () => {
    const gitUrl = "https://github.com/dusunax/javascript.git";
    await runBashCommand(`
      if [ -d  "${contentDir}" ];
        then
          cd "${contentDir}"; git pull; rm -rf .github # .github
        else
          git clone ${gitUrl} ${contentDir}; rm -rf .github # .github;
      fi
    `);
  };

  let wasCancelled = false;
  let syncInterval: NodeJS.Timeout | undefined;

  const syncLoop = async () => {
    console.log("Syncing content files from git");

    await syncRun();

    if (wasCancelled) return;

    syncInterval = setTimeout(syncLoop, 1000 * 60);
  };

  // Block until the first sync is done
  await syncLoop();

  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};

const runBashCommand = (command: string) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, [], { shell: true });

    child.stdout.setEncoding("utf8");
    child.stdout.on("data", (data) => process.stdout.write(data));

    child.stderr.setEncoding("utf8");
    child.stderr.on("data", (data) => process.stderr.write(data));

    child.on("close", function (code) {
      if (code === 0) {
        resolve(void 0);
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });

export default makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: "r",
  contentDirInclude: ["docs", "react"],
  documentTypes: [Docs, React],
  disableImportAliasWarning: true,
});
