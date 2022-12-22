import { Divider, Layout, Modal } from "antd";
import React from "react";
import ListItems from "./ListItems";
import Panel from "./Panel";
import TotalPrice from "./TotalPrice";
import EditForm from "./EditForm"
import { useState } from "react";
const { Sider, Content } = Layout;

export default function Main() {
    const [formData,setFormData]=useState([])
    const [editData,setEditData]=useState()
    function finishHandler(values){
     let temp = formData.filter(item => item.id !==editData.id )
     temp = [...temp, {
      ...values,
      id:editData.id
     }]
      setEditData(null)
      setFormData(temp)
      Modal.destroyAll()

    }
  return (
    <Layout className="layout">
      <Sider width={300} className="sider">
        <Panel setFormData={setFormData}/>
      </Sider>
      <Content>
        <ListItems formData={formData} setFormData={setFormData} setEditData={setEditData} />
        <Divider />
        <TotalPrice formData={formData}/>
      </Content>
      <Modal destroyOnClose={true} open={editData} title='Edit Products' footer={null} onCancel={()=>setEditData(null)}>
        <EditForm editData={editData} finishHandler={finishHandler}/>
      </Modal>
    </Layout>
  );
}
