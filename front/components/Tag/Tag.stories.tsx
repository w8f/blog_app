import Tag from "../Tag/Tag";
import { TagProps } from "../../interfaces/index";
import { Meta, Story } from "@storybook/react";

export default {
  component: Tag,
  title: "Tag",
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "default",
  bgColor: "bg-gray-200",
};
