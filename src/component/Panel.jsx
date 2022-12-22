import { Button, Form, Input, InputNumber, Slider } from "antd";
import React from "react";
import { useState } from "react";
import { uid } from "uid";

export default function Panel({ setFormData }) {
  const[name,setName] =useState('')
  const [price,setPrice] = useState(0)
  const [discount,setDiscount] = useState(0)
  const [count,setCount] = useState(1)
  const formatter = (value) => `${value}%`;

  function finishHandler(values){
    setFormData((prev)=>[
      ...prev,{
        ...values,
        id: uid()
      }
    ]
    )
    console.log(values)
  }

  return (
    <Form onFinish={finishHandler} initialValues={{discount:0}}>
      <Form.Item
        label="name"
        name="name"
        labelCol={{ span: 24 }}
        labelAlign="left"
        rules={[{ required: true, message: "name is required!" }]}
      >
        <Input placeholder="Enter your product name" size="large" onChange={(value)=>setName(value)}/>
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
         onChange={(value)=>setPrice(value)}
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
          onChange={(value)=>setCount(value)}
        />
      </Form.Item>
      <Form.Item
        label="discount"
        name="discount"
        labelAlign="left"
        labelCol={{ span: 24 }}
      >
        <Slider min={0} max={100} onChange={(value)=>setDiscount(value)} tooltip={{
              formatter,
            }}/>
      </Form.Item>
      <Form.Item>
        <span>Final Price: </span>
        <span style={{fontWeight:"bold" ,fontSize:"24px"}}>{count *(price- (price*discount/100))} $</span>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: "100px" }}
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}
