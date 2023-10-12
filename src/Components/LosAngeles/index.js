import React, { useState } from 'react';
import { Row, Col, Progress, Card, Typography, Space } from 'antd';
import { CChart } from '@coreui/react-chartjs'
import styles from '../Dashboard/styles.module.scss'

const { Title } = Typography;

const LosAngeles = () => {

  return (
    <div>
        <Row>
 <Col span={24} className={styles.dahsboard2}>
          <Title level={2} className={styles.dahsboard2Header} style={{ marginLeft: '30px' }}>Los Angeles Office</Title>
          <Row>
            <Col span={24} className={styles.office} style={{ marginLeft: '30px' }}>
              <p> 40 shared desks +39 private Offices Maximum capacity :96 people
              </p>
            </Col>
            <Col span={24}>
              <p className={styles.ocuppancy} style={{ marginLeft: '30px' }}>Current Office Occupancy</p>
              <p className={styles.percentage} style={{ marginLeft: '30px' }}><span>50</span> % of 48 people</p>
              <Col style={{ textAlign: 'center' }}>
                <Card style={{ border: 'none' }}>
                  <Progress percent={50} style={{ width: '90%' }} />
                </Card>
              </Col>
            </Col>
           <Col span={24 } style={{display:'flex',justifyContent:'center'}}>
           <CChart
           style={{width:'50%'}}
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }}
  labels="months"
  options={{
    plugins: {
      legend: {
        labels: {
        //   color: getStyle('--cui-body-color'),
        }
      }
    },
    scales: {
      x: {
        grid: {
        //   color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
        //   color: getStyle('--cui-body-color'),
        },
      },
      y: {
        grid: {
        //   color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
        //   color: getStyle('--cui-body-color'),
        },
      },
    },
  }}
/>
           </Col>
          </Row>


        </Col>
        </Row>
    </div>
  );
}; export default LosAngeles