import React, { useState } from 'react';
import './style.css';

import DiaryEdit from './DiaryEdit';
import DiaryList from './DiaryList';
import DiaryAnalysis from './DiaryAnalysis';

export default function App() {
  const [diaryList, setDiaryList] = useState([
    {
      id: 1,
      title: '공부하기',
      contents: '리액트 공부를 했다.',
      emotion: 5,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      title: '씻기',
      contents: '씻었다.',
      emotion: 3,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      title: '자기',
      contents: '침대에서 잠을 잤다.',
      emotion: 1,
      created_date: new Date().getTime(),
    },
  ]);
  return (
    <div>
      <DiaryEdit />
      <DiaryAnalysis data={diaryList} />
      <DiaryList diaryList={diaryList} />
    </div>
  );
}
