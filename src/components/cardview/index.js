import { CaretLeftOutlined, CaretRightOutlined, CaretUpOutlined, EyeInvisibleOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Skeleton, Space, Spin, Badge } from 'antd';
import Meta from 'antd/lib/card/Meta';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class CardComponent extends Component {

    onUpVote = (data) => {
        this.props.onUpVote(data);
    }

    onHide = (data) => {
        this.props.onHide(data);
    }


    PaginationComponent = ({ isMobileView, onNext, onPrevious }) => {
        let btnSize = isMobileView ? 'small' : 'middle';
        return (
            <div>
                <div class="customCard paginationContainer" >
                    <Space size={10}>
                        <Button type="primary" onClick={onPrevious} shape="round" icon={<CaretLeftOutlined />} size={btnSize}>
                            Previous
                    </Button>

                        <Button type="primary" onClick={onNext} shape="round" icon={<CaretRightOutlined />} size={btnSize}>
                            Next
                    </Button>
                    </Space>
                </div>
                <div class="clearfix" />
            </div>
        )
    }

    CustomCardComponent = ({ data, cardsPerRow, isLoading, currentTheme }) => {
        let rows = [];
        for (let i = 0; i < data.length; i += cardsPerRow) {
            let cols = [];
            for (let j = i; j < i + cardsPerRow && j < data.length; j++) {
                let col = <Col span={24 / cardsPerRow}>
                    <Card style={{ margin: '8px 0px', background: currentTheme.textContrast }}
                        actions={[
                            <Badge count={data[j].points} showZero overflowCount={Number.MAX_VALUE}>
                                <CaretUpOutlined key="upvote" style={{ fontSize: '20px' }} onClick={() => this.onUpVote(data[j])} />
                            </Badge>,
                            <EyeInvisibleOutlined key="hide" onClick={() => this.onHide(data[j])} />,
                            <a href={data[j].url} target="_blank" rel="noopener noreferrer"><LinkOutlined key="link" /></a>
                        ]}>
                        <Skeleton loading={isLoading} avatar active>
                            <Meta
                                title={
                                    <span style={{ color: currentTheme.textPrimary }} title={data[j].title}>{data[j].title || 'N/A'}</span>
                                }
                                description={<span><span style={{ color: '#1890ff' }}>by {data[j].author}</span> <span style={{ color: '#B2B2B2' }}>{moment(data[j].created_at).fromNow()}</span></span>}
                            />
                        </Skeleton>
                    </Card>
                </Col>
                cols.push(col);
            }

            let row = (
                <Row gutter={16}>
                    {cols}
                </Row>
            )

            rows.push(row);
        }

        return rows;
    }

    render() {
        return (
            <div>
                {
                    this.props.isLoading ?
                        <div className="spinnerContainer">
                            <Spin />
                        </div>
                        :
                        <div>
                            <this.CustomCardComponent {...this.props} />
                            <this.PaginationComponent {...this.props} />
                        </div>
                }
            </div>
        );
    }
}

CardComponent.propTypes = {
    data: PropTypes.object.isRequired,
    cardsPerRow: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    currentTheme: PropTypes.object.isRequired,
    onUpVote: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
    isMobileView: PropTypes.bool.isRequired,
}