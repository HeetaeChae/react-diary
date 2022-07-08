import React, { useState, useRef } from 'react';
import './DiaryEdit.css';

const DiaryEdit = () => {
  const [state, setState] = useState({
    title: '',
    contents: '',
    emotion: 1,
  });
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const inputRef = useRef();
  const textareaRef = useRef();

  return (
    <div className="DiaryEdit">
      <h1>오늘의 일기</h1>
      <div className="DiaryEdit__input">
        <div>
          <input
            placeholder="제목을 입력해주세요."
            name="title"
            value={state.title}
            onChange={onChange}
            ref={inputRef}
          />
        </div>
        <div>
          <textarea
            placeholder="내용을 입력해주세요."
            name="contents"
            value={state.contents}
            onChange={onChange}
            ref={textareaRef}
          />
        </div>
      </div>
      <div className="DiaryEdit__emotion">
        <div>오늘의 감정점수는?</div>
        <select name="emotion" value={state.emotion} onChange={onChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className="DiaryEdit__submit">
        <div>일기 저장하기</div>
        <button>저장</button>
      </div>
    </div>
  );
};

export default DiaryEdit;
