import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        {/* 该Link组件支持在同一个 Next.js 应用程序中的两个页面之间进行客户端导航。
        客户端导航意味着使用 JavaScript进行页面转换，这比浏览器完成的默认导航要快。 */}
        <Link href="/">
          <a>Back to home</a>
        </Link>

        {/* 如果您使用<a href="…">而不是<Link href="…">这样做，
        则在链接点击时背景颜色将被清除，因为浏览器会进行完全刷新 */}
        <div>
          <a href="/">Back to home</a>
        </div>
      </h2>
    </Layout>
  );
}
