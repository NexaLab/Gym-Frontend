import React from 'react'
import { Layout, Card, Col, Typography, Rate, Row } from 'antd'
import "./CustomCard.css"

const { Text } = Typography

function CustomCard({ title, message, rating, date }) {
    return (
        <Layout className='main-card'>
            <Card
                size="small"
                className='card-box'>
                <Layout style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', marginBottom: 30 }}>
                    <Text className='titlecard' >{title}</Text>
                    <Layout className='card-extra'>
                        <Rate disabled allowHalf defaultValue={rating} />
                        <Text
                            style={{
                                color: "gray"
                            }}>{date}</Text>
                    </Layout>
                </Layout>
                <Text style={{
                    color: "gray"
                }}>{message}</Text>
            </Card>







        </Layout>
    )
}

export default CustomCard