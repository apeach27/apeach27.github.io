/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "도현도현";
  let [글제목, setTitle] = useState(['겨울 코트 추천', '맛집 추천', '코딩공부']);
  let [좋아요, setCount] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [mTitle, setmTitle] = useState(0);
  let [input, setInput] = useState('');
  // 날짜시간
  let month = new Date().getMonth();
  let day = new Date().getDate();
  let time = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let today = String(month+1) + "월" + String(day) +"일" + String(time) +"시" + String(min) +"분" + String(sec) + "초";
  let [날짜,날짜변경] = useState([today,today,today]);
  let [오늘,오늘저장] = useState([0,0,0]);

  let num = [1, 2]
  let [a, c] = [1, 2];
  // 참고. Destructuring 문법

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'pink', fontSize:'16px'}}>ReactBlog</h4>
      </div>
      <h4>{post}</h4> 

      { // map 함수
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h4 onClick={()=>{ setModal(!modal); setmTitle(i); 오늘저장(i) }}>{ 글제목[i] } 
              <span onClick={ (e)=>{ e.stopPropagation(); // 이벤트 버블링 방지
                let copy = [...좋아요];
                copy[i] += 1;
                setCount(copy) }} style={{cursor:'pointer'}}> 💘
              </span> {좋아요[i]}
            </h4>
            <p className="date">{날짜[i]} 발행 <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i, 1);
              setTitle(copy);
            }}>삭제</button></p>
          </div>
          )
        })
      }

      <input type="text" onChange={(e)=>{ setInput(e.target.value); console.log(input); }} placeholder="글을 입력하세요"  style={{marginTop:'30px'}}/>
      <button onClick={ input == '' ? null : ()=>{
        let copy = [...글제목];
        copy.unshift(input);
        setTitle(copy);
        let copy1 = [...따봉];
        copy1.unshift(0);
        let copy2 = [...날짜];
        copy2.unshift(today);
        날짜변경(copy2);
      }}>등록</button>

      {
        modal == true ? <Modal 날짜={날짜} 오늘={오늘} 글제목={글제목} mTitle={mTitle} /> : null
      }

    </div>
  );
}

// 컴포넌트 만들기
function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.글제목[props.mTitle]}</h4>
      <p>{props.날짜[props.오늘]}</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  )
}

export default App;
