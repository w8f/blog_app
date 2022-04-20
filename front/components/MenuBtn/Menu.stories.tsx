import { MenuBtn } from "../MenuBtn";
import { Meta, Story } from "@storybook/react";

export default {
  component: MenuBtn,
  title: "MenuBtn",
} as Meta;

export const Default: Story = () => {
  return (
    <dl>
      <dt>Default</dt>
      {/* MenuBtnの高さは親要素の高さに依存(height: 100%) */}
      <dd style={{ height: 56 }}>
        <MenuBtn
          setOpenMenuBar={() => {
            console.log("onclick");
          }}
        />
      </dd>
    </dl>
  );
};
