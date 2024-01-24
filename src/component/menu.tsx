import React, { useState } from "react";
import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu as AntMenu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

interface MyMenuProps {
  children: React.ReactNode;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
];

const Menu: React.FC<MyMenuProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: collapsed ? "80px" : "256px" }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <AntMenu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={[]} // แก้ไขตรงนี้
          mode="inline"
          color="light dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
};

export default Menu;
