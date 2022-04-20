import { Tag } from "./Tag";
import { TagProps } from "../../interfaces";
import { Meta, Story } from "@storybook/react";

export default {
  component: Tag,
  title: "Tag",
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "1",
  name: "default",
  bgColor: "bg-gray-200",
};
