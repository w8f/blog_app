import Layout from "../Layout/Layout";
import { Meta, Story } from "@storybook/react";

export default {
  component: Layout,
  title: "Layout",
} as Meta;

const categories = [...Array(10)].map((_, idx) => {
  return {
    id: `category-${idx}`,
    name: `category ${idx}`,
    image: {
      url: "/",
      height: "300",
      width: "300",
    },
  };
});

export const Default: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd>
        <Layout categories={categories}>
          <div>子コンポーネントはここに表示される</div>
        </Layout>
      </dd>
    </dl>
  );
};
