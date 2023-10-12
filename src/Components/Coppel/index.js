import React, { useState } from 'react';
import { Row, Col, Progress, Card, Typography, Space } from 'antd';
import { BarChartOutlined, RedditOutlined } from '@ant-design/icons';
import { Slider } from '@mui/material';
import { CChart } from '@coreui/react-chartjs'
import styles from '../Dashboard/styles.module.scss'

const { Title } = Typography;

const Coppel = () => {

  return (
    <div>
        <Row>
        <Col span={24} className={styles.dahsboard1} >
          <Title level={2} style={{ marginLeft: '20px' }} >Coppel Office</Title>
          <Col>
            <p className={styles.ocuppancy} style={{ marginLeft: '20px', marginBottom: '10px' }}>Currently Recomended Occupancy :</p>
          </Col>
          <p className={styles.percentage} style={{ marginLeft: '30px' }}><span>50</span> % of 37 people</p>
          <Col style={{ textAlign: 'center' }}>
            <Card style={{ border: 'none' }}>
              <Progress percent={50} style={{ width: '100%' }} />
            </Card>
          </Col>
          <Col span={24} style={{ textAlign: 'center',display:'flex',justifyContent:'center' }} >
          <CChart
  type="doughnut"
  style={{width:'30%',textAlign: 'center'}}
  data={{
    labels: ['Los Angeles', 'Dallas', 'Copper'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
        data: [40, 20, 80, 10],
      },
    ],
  }}
  options={{
    plugins: {
      legend: {
        labels: {
        //   color: getStyle('--cui-body-color'),
        }
      }
    },
  }}
/>
          </Col>
          <Col>
            <p style={{textAlign:'center' ,color:'rgb(3, 3, 76)',fontSize:'18px'}}>Maximum Recomended Opurtunity For Vaccation Rate and Mask Compliiance Rate</p>
            </Col>
          <Col style={{ textAlign: 'center', marginTop: '20px' }}
          >
            <Col style={{display:'flex',justifyContent:'space-between'}}>
            <span>Employees vaccinated :</span>
            <span>{'38% (34people)vaccinated'}</span>

            </Col>
            <Slider
              defaultValue={38}
              aria-label="Default"
              valueLabelDisplay="auto"
              style={{ width: '90%' }}
            />
             <Col style={{display:'flex',justifyContent:'space-between'}}>
            <span>Employees using masks :</span>
            <span>{'33% (34people)vaccinated'}</span>

            </Col>
            <Slider
              defaultValue={33}
              aria-label="Default"
              valueLabelDisplay="auto"
              style={{ width: '90%' }}
            />
          </Col>
          <Col>
          <p className={styles.recommendation}>
            Current reccomended occumpancy would be 40 shared desks +39 private Offices Maximum capacity :96 people 
            40 shared desks +39 private Offices Maximum capacity :96 people
          </p>
          </Col>
        </Col>
        </Row>
    </div>
  );
}; export default Coppel