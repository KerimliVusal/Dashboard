import React from 'react';
import { Row, Col} from 'antd';
import styles from './styles.module.scss'


const Footers = () => {

  return (
    <div>
        <Row className={styles.footer}>
        <Col span={24} >
         
            <p>
                made by vusal kerimli 😉
            </p>
        </Col>
        </Row>
    </div>
  );
}; export default Footers