import React, { useState } from 'react';
import { Row, Col, Progress, Card, Typography, Space } from 'antd';
import { BarChartOutlined, RedditOutlined } from '@ant-design/icons';
import { Slider } from '@mui/material';
import styles from '../Dashboard/styles.module.scss'

const { Title } = Typography;

const Dallas = () => {

  return (
    <div>
        <Row>
 <Col span={24} className={styles.dahsboard2}>
          <Title level={2} className={styles.dahsboard2Header} style={{ marginLeft: '30px' }}>Dallas Office</Title>
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
            <Col style={{ padding: '10px' }}>
              <h2 style={{ marginLeft: '25px' }} >Criteria for increaing occupancy :</h2>
            </Col>
            <Col span={24} className={styles.criteria}>

              <Col span={12} className={styles.guidelines}>
                <p>Heaven Guidelines <BarChartOutlined /> </p>
              </Col>
              <Col span={12} className={styles.notMet}><span><p>Not met</p></span></Col>
            </Col>
            <Col span={24} className={styles.criteria}>
              <Col span={12} className={styles.guidelines}>
                <p>Country state Guidlines <BarChartOutlined /> </p>
              </Col>
              <Col span={12} className={styles.Met}><span ><p>Met</p></span></Col>
            </Col>
            <Col span={24} className={styles.criteria}>

              <Col span={10} className={styles.guidelines}>
                <p> <RedditOutlined className={styles.guidelineicon} /> </p>
              </Col>
              <Col span={12} className={styles.estimate}><span >Esyimate office infection rate</span></Col>
            </Col>
            <Col span={24} className={styles.criteria}>

              <Col span={10} className={styles.guidelines}>
                <p> <RedditOutlined className={styles.guidelineicon} /> </p>
              </Col>
              <Col span={12} className={styles.estimate}><span >Esyimate office infection rate</span></Col>
            </Col>
            <Col span={24} className={styles.criteria}>

              <Col span={10} className={styles.guidelines}>
                <p> <RedditOutlined className={styles.guidelineicon} /> </p>
              </Col>
              <Col span={12} className={styles.estimate}><span >Esyimate office infection rate</span></Col>
            </Col>
            <Col span={24} className={styles.criteria}>

              <Col span={10} className={styles.guidelines}>
                <p> <RedditOutlined className={styles.guidelineicon} /> </p>
              </Col>
              <Col span={12} className={styles.estimate}><span >Esyimate office infection rate</span></Col>
            </Col>
          </Row>


        </Col>
        </Row>
    </div>
  );
}; export default Dallas