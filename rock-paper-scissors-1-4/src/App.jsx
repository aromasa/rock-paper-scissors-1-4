import { useState, useEffect } from 'react';
import './App.css';
import { Box } from './components/Box';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 존재
// 3. 버튼을 클릭하면 클린한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 아이템을 선택한다.
// 5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 정한다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다.(이기면-초록, 지면-빨강, 비기면-검정)

const choiceObjs = {
  rock: {
    name: 'Rock',
    img: 'https://previews.123rf.com/images/barmaliejus/barmaliejus1511/barmaliejus151100003/55195807-rock-stone-isolated-on-white.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://m.dbprint.kr/web/product/big/202205/4f26ed90759076605f880a56f2beb361.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://m.bibon.co.kr/web/product/big/202101/833fa88eae073a583699cc737f0b8a91.jpg',
  },
}

const choiceList = [
  {buttonName: '가위', buttonValue: 'scissors'}, 
  {buttonName: '바위', buttonValue: 'rock'}, 
  {buttonName: '보', buttonValue: 'paper'}
];

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const handleClick = (buttonValue)=> {
    
    // User
    setUserSelect(choiceObjs[buttonValue]);

    const computerChoice = Object.values(choiceObjs);
    
    // Computer
    setComputerSelect(computerChoice[Math.trunc(Math.random() * computerChoice.length)]);
  };

  // useEffect(()=>{

  //   console.log(userSelect);
  //   console.log(computerSelect);

  // }, [userSelect, computerSelect]);

  return (
    <>
      <div className="container">
        <Box title="You" item={userSelect}/>
        <Box title="Computer" item={computerSelect}/>
      </div>

      <div className='button-container'>
        {choiceList.map(({buttonName, buttonValue}, i) => (
          <button onClick={() => handleClick(buttonValue)} type='button' key={i} className='button'>{buttonName}</button>
        ))}
      </div>
    </>
  );
}

export default App;
