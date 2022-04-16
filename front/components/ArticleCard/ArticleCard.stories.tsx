import ArticleCard from "../ArticleCard/ArticleCard";
import { Meta, Story } from "@storybook/react";

export default {
  component: ArticleCard,
  title: "ArticleCard",
} as Meta;

const image = {
  url: "https://images.microcms-assets.io/assets/797f5c01c5ba4a20a0888ddda0fecbe1/f2cbae8993c44d0896f8792496416b59/nextjsimage.png",
  height: "100",
  width: "100",
};

const tooManyCategories = [...Array(15)].map((_, i) => {
  return {
    id: "" + i,
    name: "category",
    image: image,
  };
});

const defaultArgs = {
  id: "1",
  title: "default blog title (Assume 2 lines at most)",
  publishedAt: "2022-02-01",
  updatedAt: "2022-02-01",
  body: "<h1>hogehoge</h1>",
  categories: [
    {
      id: "1",
      name: "hoge",
      image: image,
    },
    {
      id: "2",
      name: "fuga",
      image: image,
    },
  ],
};

const longTitleArgs = {
  id: "1",
  title:
    "This is a very long title. It is very, very long. There is more to come. It's a really, really long title. It will go on a little bit longer. It's almost over. Almost there. It's almost over.",
  publishedAt: "2022-02-01",
  updatedAt: "2022-02-01",
  body: "<h1>hogehoge</h1>",
  categories: [
    {
      id: "1",
      name: "hoge",
      image: image,
    },
    {
      id: "2",
      name: "fuga",
      image: image,
    },
  ],
};

const manyCategory = {
  id: "1",
  title: "Too many category case",
  publishedAt: "2022-02-01",
  updatedAt: "2022-02-01",
  body: "<h1>hogehoge</h1>",
  categories: tooManyCategories,
};

const NoCategoryArgs = {
  id: "1",
  title: "No category case",
  publishedAt: "2022-02-01",
  updatedAt: "2022-02-01",
  body: "<h1>hogehoge</h1>",
  categories: [],
};

export const Default: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd style={{ margin: "2px" }}>
        <ArticleCard {...defaultArgs} />
      </dd>
    </dl>
  );
};

export const LongTitle: Story = () => {
  return (
    <dl>
      <dt>LongTitle</dt>
      <dd style={{ margin: "2px" }}>
        <ArticleCard {...longTitleArgs} />
      </dd>
    </dl>
  );
};

export const TooManyCategory: Story = () => {
  return (
    <dl>
      <dt>TooManyCategory</dt>
      <dd style={{ margin: "2px" }}>
        <ArticleCard {...manyCategory} />
      </dd>
    </dl>
  );
};

export const NoCategory: Story = () => {
  return (
    <dl>
      <dt>NoCategory</dt>
      <dd style={{ margin: "2px" }}>
        <ArticleCard {...NoCategoryArgs} />
      </dd>
    </dl>
  );
};
