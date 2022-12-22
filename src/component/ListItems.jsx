import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tag, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;

export default function ListItems({ formData, setFormData, setEditData }) {
  function deleteHandler(id) {
    let data = formData.filter((item) => item.id !== id);
    setFormData(data);
  }
  function editHandler(item) {
    setEditData(item);
  }
  return (
    <div className="listItems">
      {formData.map((item) => (
        <Row gutter={4}>
          <Col span={4}>
            <Text type="secondary">Name:</Text>
            <Title level={3}>{item?.name}</Title>
          </Col>
          <Col span={4}>
            <Text type="secondary">Price:</Text>
            <Title level={3}>{item.price * item.count}$</Title>
          </Col>
          <Col span={4}>
            <Text type="secondary">Count:</Text>
            <Title level={3}>{item.count}</Title>
          </Col>
          <Col span={4}>
            <Text type="secondary">Discount:</Text>
            <Tag color={"#108ee9"} className="tag">
              {item.discount}%
            </Tag>
          </Col>
          <Col span={4}>
            <Text type="secondary">Final Price:</Text>
            <Title level={3}>
              {item.count * (item.price - (item.price * item.discount) / 100)} $
            </Title>
          </Col>
          <Col span={4}>
            <Text type="secondary">Actions:</Text>
            <div>
            <Button
              size="middle"
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => deleteHandler(item.id)}
            />
            <Button
              size="middle"
              type="text"
              icon={<EditOutlined />}
              onClick={() => editHandler(item)}
            />
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}
