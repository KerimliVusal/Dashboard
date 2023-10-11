import React from 'react';
import { Row, Col, Progress, Card, Typography,Space } from 'antd';
import { BarChartOutlined, LineChartOutlined } from '@ant-design/icons';
import styles from './styles.module.scss'

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div className={styles.dahsboard}>
      <Title level={2}>Forecast & Recommendation</Title>
      <Row>
        <Col>
        <p className={styles.ocuppancy}>Currently Recomended Occupancy :</p>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
        <p className={styles.percentage}><span>50</span> % of 37 people</p>
        <Card style={{ width: '100%' }}>
            <Progress percent={50} />
          </Card>
        <Space wrap>
                  <Progress type="circle" className={styles.pieChart} strokeColor='yellow' percent={55} size={150}  format={(percent) => `${percent} Days`} />
                  <Progress type="circle"  className={styles.pieChart} strokeColor='rgb(20, 182, 2)' percent={75} size={150}  format={(percent) => `${percent} Likely`} />
                  <Progress type="circle"  className={styles.pieChart} strokeColor='rgb(20, 182, 2)' size={150} percent={90} format={() => 'Yes'}  />
                </Space>
        
        </Col>
        <Col span={12}>
          <Card title="Charts" style={{ width: '100%' }}>
            <Row>
              <Col span={6}>
                
                <BarChartOutlined style={{ fontSize: '24px' }} />
              </Col>
              <Col span={18}>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <LineChartOutlined style={{ fontSize: '24px' }} />
              </Col>
              <Col span={18}>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Title level={3}>More Details</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Progress 2" style={{ width: '100%' }}>
            <Progress percent={75} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Progress 3" style={{ width: '100%' }}>
            <Progress percent={25} />
          </Card>
        </Col>
      </Row>

      {/* Additional content as needed */}
    </div>
  );
};

export default Dashboard;