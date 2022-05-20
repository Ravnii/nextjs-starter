import React from 'react';

export default function SmallCard({ summary, start, end }) {
  const dash = '-';
  const colon = ':';
  const [first, second, third, fourth] = [4, 6, 11, 13];

  const startDate = new Date(
    start.slice(0, first) +
      dash +
      start.slice(first, second) +
      dash +
      start.slice(second, third) +
      colon +
      start.slice(third, fourth) +
      colon +
      start.slice(fourth)
  );

  const endDate = new Date(
    end.slice(0, first) +
      dash +
      end.slice(first, second) +
      dash +
      end.slice(second, third) +
      colon +
      end.slice(third, fourth) +
      colon +
      end.slice(fourth)
  );

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  const optionsTwo = {
    hour: '2-digit',
    minute: '2-digit',
  };

  const day = new Intl.DateTimeFormat('da-DK', options).format(startDate);
  const time = new Intl.DateTimeFormat('da-DK', optionsTwo).format(startDate);

  return (
    <div className="card-small">
      <h3>📅 {day}</h3>
      <h3>🕗 {time}</h3>
      <h3>🔔 {summary}</h3>
    </div>
  );
}
