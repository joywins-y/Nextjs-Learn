import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 其他情况，比如api接口获取数据
// export async function getSortedPostsData(){
//   const res = await fetch('https://www.fastmock.site/mock/d3bc0958488383d3a5c7f570846179fb/demo/api/test');
//   console.log(res);
//   return res.json();
// }

// 也可以直接查询数据库
// import someDatabaseSDK from 'someDatabaseSDK';
// const databaseClient = someDatabaseSDK.createClient('');
// export async function getSortedPostsData() {
//   return databaseClient.query('SELECT posts...');
// }

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }
