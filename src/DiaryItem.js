import React from 'react';
import './DiaryItem.css';

const DiaryItem = ({ it }) => {
  const { title, contents, emotion, created_date } = it;
  const handleRomove = () => {};
  const handleChange = () => {};
  return (
    <div className="DiaryItem">
      <div className="DiaryItem__header">
        <div className="DiaryItem__header--title">제목 : {title}</div>
        <div>기분 : {emotion}</div>
        <div className="DiaryItem__header--date">
          날짜 : {new Date(created_date).toLocaleString()}
        </div>
      </div>
      <div className="DiaryItem__contents">{contents}</div>
      <div className="DiaryItem__button">
        <button className="DiaryItem__button--remove">수정</button>
        <button className="DiaryItem__button--change">삭제</button>
      </div>
    </div>
  );
};

export default DiaryItem;
