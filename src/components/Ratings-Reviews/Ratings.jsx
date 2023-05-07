import React, { useEffect } from 'react'
import {Layout, Typography, Progress,Row, Col} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons';
import "./Ratings.css"
import CustomCard from '../CustomCard/CustomCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviews } from '../../Services/ReviewSlice';
import ReviewSlice from '../../Services/ReviewSlice';

const {Header} = Layout;
const {Text} = Typography;

function Ratings() {

  const dispatch=useDispatch();

  const ratingData = useSelector(state => state.ReviewSlice)

  useEffect(() => {
   dispatch(getAllReviews()) 
  }, [])


  return (
    <Layout className='main'>
      <Header className='header'>Ratings and Reviews <ArrowRightOutlined style={{marginLeft: 10}}/> </Header>

        <Layout className='ratings'>


            <Layout className='rating-left'>
              <Text className='rating-text'>Ratings and Reviews</Text>
              <Text style={{fontSize: 20, marginTop: 7, fontWeight: 700,}}>{ratingData.data[0] && (ratingData.data[0].averageRating).toFixed(2)}</Text>
              <Text style={{fontSize: 15,}}>{ratingData.data[0] && ratingData.data[0].numberOfReviews} Ratings</Text>
              <Text style={{fontSize: 16, marginTop: 60, fontWeight: 600,}}>{ratingData.data[0] && ratingData.data[0].numberOfReviews} Reviews</Text>
            </Layout>


            <Layout className='stars'>
              <Text style={{color: "#8323ff", marginBottom: 10}}>★★★★★</Text>
              <Text style={{color: "#8323ff", marginBottom: 8}}>★★★★</Text>
              <Text style={{color: "#8323ff", marginBottom: 7}}>★★★</Text>
              <Text style={{color: "#8323ff", marginBottom: 8}}>★★</Text>
              <Text style={{color: "#8323ff"}}>★</Text>
            </Layout>


            <Layout className='progress-bar'>
              <Progress percent={100} showInfo={false} />
              <Progress percent={100} showInfo={false} />
              <Progress percent={100} showInfo={false} />
              <Progress percent={100} showInfo={false} />
              <Progress percent={100} showInfo={false} />
            </Layout>


        </Layout>

        <Layout className='review-card'>
          {ratingData.data.map(review =>{
            return (
            <CustomCard title={review.firstName} rating={review.rating} message={review.comment} date={review.date} />
            )
          })}
        </Layout>
    </Layout>
    )
}

export default Ratings;