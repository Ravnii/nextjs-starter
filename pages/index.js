import { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/calendar`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No calendar data</p>;

  return (
    <div className="home">
      <h1>Sandbjerglejrens Infoskærm</h1>
      <div className="card-grid">
        {data.map((event) => {
          return (
            <Calendar
              key={event.id}
              summary={event.summary}
              start={event.start}
              end={event.end}
            />
          );
        })}
      </div>
    </div>
  );
}
