import { Footer } from "../Footer";
import { Meta, Story } from "@storybook/react";

export default {
  component: Footer,
  title: "Footer",
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {};
