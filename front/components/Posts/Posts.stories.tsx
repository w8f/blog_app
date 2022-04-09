import Post from "./Posts";
import { Meta, Story } from "@storybook/react";

export default {
  component: Post,
  title: "Post",
} as Meta;

const blogs = [...Array(8)].map((_, i) => {
  return {
    id: "" + i,
    title: `test title ${i}`,
    publishedAt: "2022-02-01",
    updatedAt: "2022-02-01",
    body: "<></>",
    categories: [
      {
        id: "" + i,
        name: "category",
        image: {
          url: "https://hoge.jp",
          height: "300",
          width: "300",
        },
      },
    ],
  };
});

export const Default: Story = () => {
  return (
    <>
      <dt>Default</dt>
      <dd>
        <Post totalCount={blogs.length} blogs={blogs} />
      </dd>
    </>
  );
};
