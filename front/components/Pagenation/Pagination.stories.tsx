import Pagenation from "./Pagenation";
import { Meta, Story } from "@storybook/react";

export default {
  component: Pagenation,
  title: "Pagenation",
} as Meta;

export const Default: Story = () => {
  return (
    <>
      <dt>Default</dt>
      <dd>
        <Pagenation totalCount={40} />
      </dd>
    </>
  );
};
