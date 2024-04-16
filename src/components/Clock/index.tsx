import './index.scss';
import { useEffect, useState } from 'react';

const Clock = (): JSX.Element => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options as Intl.DateTimeFormatOptions);
  };

  const formatTime = (date: Date) => {
    const options  = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('fr-FR', options as Intl.DateTimeFormatOptions);
  };

  return (
    <div className='Clock'>
      <p className='Clock__Time'>{formatTime(dateTime)}</p>
      <p className='Clock__Date'>{formatDate(dateTime)}</p>
    </div>
  );
};

export default Clock;
