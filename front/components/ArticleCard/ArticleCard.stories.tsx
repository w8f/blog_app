import ArticleCard from "../ArticleCard/ArticleCard";
import { Blog } from "../../interfaces/index";
import { Meta, Story } from "@storybook/react";

export default {
  component: ArticleCard,
  title: "ArticleCard",
} as Meta;

const Template: Story<Blog> = (args) => <ArticleCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "1",
  title: "default blog title",
  publishedAt: "2022-02-01",
  updatedAt: "2022-02-01",
  body: "<h1>hogehoge</h1>",
  categories: [
    {
      name: "hoge",
      image: {
        url: "https://images.microcms-assets.io/assets/797f5c01c5ba4a20a0888ddda0fecbe1/f2cbae8993c44d0896f8792496416b59/nextjsimage.png",
        height: "100",
        width: "100",
      },
    },
    {
      name: "fuga",
      image: {
        url: "https://images.microcms-assets.io/assets/797f5c01c5ba4a20a0888ddda0fecbe1/f2cbae8993c44d0896f8792496416b59/nextjsimage.png",
        height: "100",
        width: "100",
      },
    },
  ],
};

export const NoImage = Template.bind({});

NoImage.args = {
  id: "2",
  title: "No image blog title",
  publishedAt: "2022-02-01",
  updatedAt: "2022-02-01",
  body: "<h1>hogehoge</h1>",
  categories: [
    {
      name: "hoge",
      image: {
        url: "",
        height: "100",
        width: "100",
      },
    },
    {
      name: "fuga",
      image: {
        url: "https://images.microcms-assets.io/assets/797f5c01c5ba4a20a0888ddda0fecbe1/f2cbae8993c44d0896f8792496416b59/nextjsimage.png",
        height: "100",
        width: "100",
      },
    },
  ],
};
