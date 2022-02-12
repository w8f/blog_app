import Header from "../Header/Header";
import { Meta, Story } from "@storybook/react";

export default {
  component: Header,
  title: "header",
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};
