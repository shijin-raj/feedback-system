import './App.css';
import { Button, DatePicker, Input } from 'antd';
import StarRating from './components/rating';
import { useState } from 'react';

function App() {
  const [showRating,setShowRating] = useState(true);

  const handleRateBtn = ()=>{
    setShowRating(!showRating);
  }
  return (
    <div style={{ padding: 20,display:'flex',alignItems:'center',justifyContent:'center' }}>
     
      {showRating?(    <StarRating setShowRating={setShowRating}></StarRating>):( <Button type="primary"
      onClick={handleRateBtn}
      >Rate</Button>)}
  </div>
  );
}

export default App;
