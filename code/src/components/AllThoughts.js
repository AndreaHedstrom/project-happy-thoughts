/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

export const AllThoughts = ({ thoughts, onLikesIncrease, loading }) => {
  if (loading) {
    return <div className="Loading">Loading...</div>
  }
  const handleOnLikesIncrease = (id) => {
    onLikesIncrease(id);
  }
  return (
    <div>
      {thoughts.map((list) => (
        <div className="Thoughts" key={list._id}>
          <p className="posted-thought">{list.message}</p>
          <div className="hearts">
            <button type="button" className={(list.hearts === 0 ? 'no-like-btn' : 'like-btn')} onClick={() => handleOnLikesIncrease(list._id)}>❤️</button>
            <p className="counter">x {list.hearts}</p>
            <p className="date">
              {formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}