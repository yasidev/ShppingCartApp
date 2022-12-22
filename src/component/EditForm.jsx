import { Button, Form, Input, InputNumber, Slider } from "antd";
import React, { useState } from "react";

export default function EditForm({ editData, finishHandler }) {
  const [name, setName] = useState(editData.name);
  const [price, setPrice] = useState(editData.price);
  const [discount, setDiscount] = useState(editData.discount);
  const [count, setCount] = useState(editData.count);
  const formatter = (value) => `${value}%`;
  return (
    <>
      <Form onFinish={finishHandler} initialValues={editData}>
        <Form.Item
          label="name"
          name="name"
          labelCol={{ span: 24 }}
          labelAlign="left"
          rules={[{ required: true, message: "name is required!" }]}
        >
          <Input
            placeholder="Edit your product name"
            size="large"
            onChange={(value) => setName(value)}
          />
        </Form.Item>
        <Form.Item
          label="price"
          name="price"
          labelAlign="left"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "price is required!" }]}
        >
          <InputNumber
            size="large"
            controls={false}
            min={0}
            style={{ width: "100%" }}
            placeholder="Enter price"
            onChange={(value) => setPrice(value)}
          />
        </Form.Item>
        <Form.Item
          label="count"
          name="count"
          labelAlign="left"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "count is required!" }]}
        >
          <InputNumber
            size="large"
            controls={false}
            min={1}
            style={{ width: "100%" }}
            placeholder="Enter count"
            onChange={(value) => setCount(value)}
          />
        </Form.Item>
        <Form.Item
          label="discount"
          name="discount"
          labelAlign="left"
          labelCol={{ span: 24 }}
        >
          <Slider
            min={0}
            max={100}
            onChange={(value) => setDiscount(value)}
            tooltip={{
              formatter,
            }}
          />
        </Form.Item>
        <Form.Item>
          <span>Final Price: </span>
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>
            {count * (price - (price * discount) / 100)} $
          </span>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100px" }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
