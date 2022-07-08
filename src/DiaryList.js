import React from 'react';
import './DiaryList.css';

import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h1>일기 리스트</h1>
      <h3>{diaryList.length}개의 일기가 있습니다.</h3>
      {diaryList.map((it) => (
        <DiaryItem it={it} key={it.id} />
      ))}
    </div>
  );
};

export default DiaryList;
