import Footer from "../Footer/Footer";
import { Meta, Story } from "@storybook/react";

export default {
  component: Footer,
  title: "footer",
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {};
