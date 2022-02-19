import Category from "../Category/Category";
import { CategoryProps } from "../../interfaces/index";
import { Meta, Story } from "@storybook/react";

export default {
  component: Category,
  title: "Category",
} as Meta;

const Template: Story<CategoryProps> = (args) => <Category {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "1",
  name: "TypeScript",
  image: {
    url: "https://images.microcms-assets.io/assets/797f5c01c5ba4a20a0888ddda0fecbe1/f2cbae8993c44d0896f8792496416b59/nextjsimage.png",
    height: "100",
    width: "100",
  },
};

export const NoImage = Template.bind({});

NoImage.args = {
  id: "2",
  name: "NoImageCategory",
};
