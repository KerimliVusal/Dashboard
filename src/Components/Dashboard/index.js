import React, { useState } from 'react';
import { Row, Col, Progress, Card, Typography, Space,Select } from 'antd';
import { AlertOutlined,BugOutlined, RedditOutlined,DeploymentUnitOutlined } from '@ant-design/icons';
import { Slider } from '@mui/material';
import { CChart } from '@coreui/react-chartjs'
import styles from './styles.module.scss'

const { Title } = Typography;

const Dashboard = () => {
  const handleChange = (value) => {
  };
  return (
    <div>
      <Row gutter={[16, 16]} className={styles.dahsboard}>
        <Col span={14} className={styles.dahsboard1} >
          <Title level={2} style={{ marginLeft: '20px' }} >Forecast & Recommendation</Title>
          <Col>
            <p className={styles.ocuppancy} style={{ marginLeft: '20px', marginBottom: '10px' }}>Currently Recomended Occupancy :</p>
          </Col>
          <p className={styles.percentage} style={{ marginLeft: '30px' }}><span>50</span> % of 37 people</p>
          <Col style={{ textAlign: 'right' }}>
            <Card style={{ border: 'none' }}>
              <Progress percent={50} style={{ width: '100%' }} />
            </Card>
            <span style={{border:'1px solid #efefee',padding:'5px',marginRight:'10px',borderRadius:'5px'}}>{'75'}</span>
            <Select
              labelInValue
              defaultValue={{
                value: 'People',
                label: 'People',
              }}
              style={{
                width: 100,
              }}
              onChange={handleChange}
              options={[
                {
                  value: 'jack',
                  label: 'Jack (100)',
                },
                {
                  value: 'lucy',
                  label: 'People (101)',
                },
              ]}
            />
          </Col>
          <Col span={24} style={{ textAlign: 'center' }} >
            <Space wrap >
              <Col span={24} style={{ display: 'flex', margin: '0 auto' }}>
                <span>
                  <p className={styles.barTitle}>4 weeks</p>
                  <CChart
                    type="doughnut"
                    style={{ width: '150px', textAlign: 'center' }}
                    data={{
                      datasets: [
                        {
                          backgroundColor: ['#41B883', '#ff9'],
                          data: [30, 70],
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
                  />                </span>
                <span>
                  <p className={styles.barTitle}>8 weeks</p>
                  <CChart
                    type="doughnut"
                    style={{ width: '150px', textAlign: 'center' }}
                    data={{
                      datasets: [
                        {
                          backgroundColor: ['#41B883', '#ff9'],
                          data: [70, 30],
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
                  />                   </span>
                <span>
                  <p className={styles.barTitle}>12 weeks</p>
                  <CChart
                    type="doughnut"
                    style={{ width: '150px', textAlign: 'center' }}
                    data={{
                      datasets: [
                        {
                          backgroundColor: ['#41B883', '#ff9'],
                          data: [90, 10],
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
                  />                   </span>
              </Col>
            </Space>
            <Col>
              <p style={{ textAlign: 'center', color: 'rgb(3, 3, 76)', fontSize: '18px' }}>Maximum Recomended Opurtunity For Vaccation Rate and Mask Compliiance Rate</p>
            </Col>
          </Col>
          <Col style={{ textAlign: 'center', marginTop: '20px' }}
          >
            <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Employees vaccinated :</span>
              <span>{'38% (34people)vaccinated'}</span>

            </Col>
            <Slider
              defaultValue={38}
              aria-label="Default"
              valueLabelDisplay="auto"
              style={{ width: '90%' }}
            />
            <Col style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <Col span={9} className={styles.dahsboard2}>
          <Col span={24} style={{display:'flex'}}>
            <Col span={12}>
          <Title level={2} className={styles.dahsboard2Header} style={{ marginLeft: '30px' }}>Dallas Office 
</Title>
</Col>
<Col span={12} style={{marginTop:'10px'}} >
<span style={{border:'1px solid #efefee',padding:'5px',borderRadius:'5px',fontSize:'16px'}}>{'View details'}</span>
</Col>
</Col>
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
                <p>Heaven Guidelines <BugOutlined /> </p>
              </Col>
              <Col span={12} className={styles.notMet}><span><p>Not met</p></span></Col>
            </Col>
            <Col span={24} className={styles.criteria}>
              <Col span={12} className={styles.guidelines}>
                <p>Country state Guidlines <AlertOutlined /> </p>
              </Col>
              <Col span={12} className={styles.Met}><span ><p>Met</p></span></Col>
            </Col>
            <Col span={24} className={styles.criteria}>

              <Col span={10} className={styles.guidelines}>
                <p> <BugOutlined className={styles.guidelineicon} /> </p>
              </Col>
              <Col span={12} className={styles.estimate}><span >Esyimate office infection rate</span></Col>
            </Col>
            <Col span={24} className={styles.criteria}>

              <Col span={10} className={styles.guidelines}>
                <p> <AlertOutlined className={styles.guidelineicon} /> </p>
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
                <p> <DeploymentUnitOutlined className={styles.guidelineicon} /> </p>
              </Col>
              <Col span={12} className={styles.estimate}><span >Esyimate office infection rate</span></Col>
            </Col>
          </Row>


        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>

        </Col>

      </Row>

      {/* Additional content as needed */}
    </div>
  );
};

export default Dashboard;