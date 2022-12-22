import { Card } from "antd";
import React from "react";

export default function TotalPrice({ formData }) {

  const totalPayment = formData.reduce((total,item)=>total+(item.count * (item.price - (item.price * item.discount) / 100)) ,0)
  const totalPrice = formData.reduce((total,item)=>total+ item.count*item.price ,0)
  const totalDiscount = formData.reduce((total,item)=>total+ item.discount ,0)
  return <Card className="summary">
    <Card.Grid>
      <span>Total Price</span>
      <h3>{totalPrice} $</h3>
    </Card.Grid>
    <Card.Grid>
      <span>Total Discount:</span>
      <h3>{totalDiscount} %</h3>
    </Card.Grid>
    <Card.Grid className="total-payment"> 
      <span>Total Payment</span>
      <h3>{totalPayment} $</h3>
    </Card.Grid>
  </Card>;
}
