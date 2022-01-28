import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { Button, Checkbox } from "antd";
import styles from "./[id].module.css";

export default function Post({ postData }) {
  const plainOptions = ["Apple", "Pear", "Orange"];
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <div className={styles.post_btn}>
        <Checkbox.Group options={plainOptions} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
