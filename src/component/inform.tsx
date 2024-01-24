import React from "react";
import {
  Card,
  Cascader,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Inform: React.FC = () => (
  <Card title="Personal Information" style={{ maxWidth: 600, margin: "auto" }}>
    <Form {...formItemLayout} variant="filled">
      <Form.Item
        label="National ID :"
        name="National ID :"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Nick Name :"
        name="Nick Name :"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Phone Number :"
        name="Phone Number :"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Birth Date"
        name="Birth Date"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Mentions />
      </Form.Item>

      <Form.Item
        label="Nationality"
        name="Nationality"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Select />
      </Form.Item>

      <Form.Item
        label="Religion"
        name="Religion"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Cascader />
      </Form.Item>

      <Form.Item
        label="Race"
        name="Race"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <TreeSelect />
      </Form.Item>
    </Form>
  </Card>
);

export default Inform;
