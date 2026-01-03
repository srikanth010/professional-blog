import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

// This one already exists
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
}

// ADD THIS FUNCTION BELOW
export function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      metadata: data,
      content: content, // This is the raw markdown string
    };
  } catch (e) {
    return null; // Return null so the page can show a 404
  }
}