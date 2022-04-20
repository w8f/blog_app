import { MenuBar } from "../MenuBar";
import { Meta, Story } from "@storybook/react";

export default {
  component: MenuBar,
  title: "MenuBar",
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
        <MenuBar categories={categories} />
      </dd>
    </dl>
  );
};
