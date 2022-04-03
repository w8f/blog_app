import Header from "../Header/Header";
import { Meta, Story } from "@storybook/react";

export default {
  component: Header,
  title: "Header",
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
    <>
      <dt>Default</dt>
      <dd>
        <Header categories={categories} />
      </dd>
    </>
  );
};
