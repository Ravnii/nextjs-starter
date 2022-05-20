import React from 'react';
import SmallCard from '../components/SmallCard';

export default function Calendar({ id, summary, start, end }) {
  return (
    <div className="calendar">
      <SmallCard key={id} summary={summary} start={start} end={end} />
    </div>
  );
}
