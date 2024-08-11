import React, { useState } from 'react';
import { Rate, Card, Button, Typography } from 'antd';
import { LikeFilled } from '@ant-design/icons';

function StarRating(props) {
  const [rating, setRating] = useState(0); // Default rating
  const [isVisible,setIsVisible]= useState(true);
  const [isSkipVisible,setIsSkipVisible]=useState(true);
  const [ratingMsg,setRatingMsg] = useState(""); 
  const ratingSuccessMsg = "Thanks for the rating!";
  const handleChange = (value) => {
    setRating(value);
    console.log(`Rating selected: ${value}`);
    setRatingMsg(ratingSuccessMsg);
    setIsSkipVisible(false);
    setTimeout(()=>{
      setIsVisible(false);
      setTimeout(()=>{
        resetRating();
      },700)
    },3000)
  };

  const resetRating = ()=>{
    setRating(0);
    setRatingMsg("");
    setIsSkipVisible(true);
    setTimeout(()=>{
      props.setShowRating(false);
  },1000);
  }

  const handleSkip = ()=>{
    setIsVisible(false);
    setTimeout(()=>{
      resetRating();
    },3000)
  }
  return (
    <Card title="Rate your experience" style={{ width: 300 ,
      transition: 'opacity 0.5s ease-in-out',
      opacity:isVisible?1:0
    }}>
      <Rate
        // allowHalf
        value={rating}
        onChange={handleChange}
        style={{ fontSize: '24px' }}
      />
      <div style={{ marginTop: '20px' ,display:'flex',justifyContent:'left',alignItems:'center'
      }}>
        {isSkipVisible?(<Button
        onClick={handleSkip}
        >Skip</Button>):(   <div>
            <LikeFilled></LikeFilled> {ratingMsg}
        </div>)}
      </div> 
   
      {/* <div style={{ marginTop: '10px' }}>
        <strong>Current rating: {rating}</strong>
      </div>
      */}
    </Card>
  );
}

export default StarRating;
