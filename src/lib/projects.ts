import * as fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";

const projectsDirectory = path.join(process.cwd(), "src/projects");

export type Project = {
  date: string;
  title: string;
  img: string;
  vid: string;
  width: number;
  height: number;
  id: string;
};
export type ProjectData = Project & {
  contentHtml: string;
};

export function getSortedProjectsData(locale: string) {
  const fileNames = fs.readdirSync(projectsDirectory + "/" + locale);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, locale, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        img: string;
        vid: string;
        width: number;
        height: number;
      }),
    };
  });

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getProjectData(id: string, locale: string) {
  const fullPath = path.join(projectsDirectory, locale, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      img: string;
      vid: string;
      width: number;
      height: number;
    }),
  };
}
