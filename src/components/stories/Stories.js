import React, { useEffect, useState } from 'react';
import { Story } from './Story';
import { getStories } from '../api';

export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories().then((ids) => setStoryIds(ids));
  }, []);


  return storyIds
    .slice(0, 20)
    .map((storyId, i) => <Story key={i} storyId={storyId} />);
};
