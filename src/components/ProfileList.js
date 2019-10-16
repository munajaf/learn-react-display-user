import React from 'react';
import {Avatar, Card, Col, Row, Descriptions, Statistic, Icon} from "antd";
import {Meta} from "antd/es/list/Item";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ProfileList(props) {
    return (
        <div>
            <Card>
                <Row type="flex" justify="center">
                    <Col span={4}><Avatar size={120} src={props.dataSource.picture.large} /></Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Account Balance" bordered={false}>
                            <Statistic prefix={<Icon type="arrow-up" />} valueStyle={{ color: '#3f8600' }} value={getRandomInt(100,99999)} precision={2} />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Feedback" bordered={false}>
                            <Statistic valueStyle={{ color: '#3f8600' }} value={getRandomInt(100,99999)} prefix={<Icon type="like" />} />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Completed Project" bordered={false}>
                            <Statistic valueStyle={{ color: '#3f8600' }} value={getRandomInt(100,99999)} prefix={<Icon type="check" />} />

                        </Card>
                    </Col>
                </Row>

                <Descriptions title="User Info">
                    <Descriptions.Item label="Full Name">{props.dataSource.name.first} {props.dataSource.name.last}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">{props.dataSource.phone}</Descriptions.Item>
                    <Descriptions.Item label="Live">{props.dataSource.location.country}</Descriptions.Item>
                    <Descriptions.Item label="Gender">{props.dataSource.gender}</Descriptions.Item>
                    <Descriptions.Item label="Date Of Birth">{props.dataSource.dob.date}</Descriptions.Item>
                    <Descriptions.Item label="Age">{props.dataSource.dob.age}</Descriptions.Item>
                    <Descriptions.Item label="Address" span={2}>
                        {props.dataSource.location.street.number}, {props.dataSource.location.street.name}, {props.dataSource.location.city}, {props.dataSource.location.country}, {props.dataSource.location.postcode}
                    </Descriptions.Item>
                </Descriptions>
            </Card>
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card hoverable title="Project 1" bordered={false} cover={<img alt="example" src="https://picsum.photos/200/300?random=1" />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable title="Project 2" bordered={false} cover={<img alt="example" src="https://picsum.photos/200/300?random=2" />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable title="Project 3" bordered={false} cover={<img alt="example" src="https://picsum.photos/200/300?random=3" />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProfileList;