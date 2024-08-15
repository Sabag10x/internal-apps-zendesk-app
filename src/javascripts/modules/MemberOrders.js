import * as React from 'react';
import {getKittingOrderUrl, getOrderUrl} from '../lib/utils';
import {Card, Row, Table, Typography, Descriptions, Collapse, Badge, Alert} from 'antd';

export const MemberOrders = ({orders}) => {
  const items = React.useMemo(
    () =>
      orders.map((order) => ({
        key: order.id,
        label: (
          <Row justify="space-between">
            <Typography.Link href={getOrderUrl(order)} target="_blank">
              {order.order_type}
            </Typography.Link>
            <Badge count={order.status} color="pink" />
          </Row>
        ),
        children: (
          <Descriptions title="Order details" column={1}>
            <Descriptions.Item label="Shipping address">{order.shipping_address ?? 'N/A'}</Descriptions.Item>
            <Descriptions.Item label="Kitting Order ID">
              {order.kitting_order_id ? (
                <Typography.Link href={getKittingOrderUrl(order)} target="_blank">
                  {order.kitting_order_id}
                </Typography.Link>
              ) : (
                'N/A'
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Products">
              <Table
                dataSource={order.items}
                key={(row) => row.sku}
                columns={[
                  {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                  },
                  {
                    title: 'SKU',
                    dataIndex: 'sku',
                    key: 'sku',
                  },
                  {
                    title: 'Quantity',
                    dataIndex: 'quantity',
                    key: 'quantity',
                  },
                ]}
              />
            </Descriptions.Item>
          </Descriptions>
        ),
      })),
    [orders]
  );

  return (
    <Card title="Member orders" style={{width: '100%'}}>
      {orders.length ? (
        <Collapse accordion items={items} />
      ) : (
        <Alert message="No orders found" type="info" showIcon style={{padding: '1rem'}} />
      )}
    </Card>
  );
};
