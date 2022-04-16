import Category from "../Category/Category";
import { Meta, Story } from "@storybook/react";

export default {
  component: Category,
  title: "Category",
} as Meta;

const defaultArgs = {
  id: "1",
  name: "TypeScript",
  image: {
    url: "https://images.microcms-assets.io/assets/797f5c01c5ba4a20a0888ddda0fecbe1/f2cbae8993c44d0896f8792496416b59/nextjsimage.png",
    height: "100",
    width: "100",
  },
};

export const Default: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      <dd>
        <Category {...defaultArgs} />
      </dd>
    </dl>
  );
};
