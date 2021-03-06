import { Posts } from "./Posts";
import { Meta, Story } from "@storybook/react";

export default {
  component: Posts,
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
    <dl>
      <dt>Default</dt>
      <dd>
        <Posts totalCount={blogs.length} blogs={blogs} />
      </dd>
    </dl>
  );
};
