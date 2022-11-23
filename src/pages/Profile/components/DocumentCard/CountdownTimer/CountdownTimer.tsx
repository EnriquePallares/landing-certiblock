import React, { useEffect } from 'react';
export interface Countdown {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDownTimer = ({ hours = 0, minutes = 0, seconds = 0 }: Countdown) => {
  const [time, setTime] = React.useState<Countdown>({
    hours,
    minutes,
    seconds,
  });

  const tick = () => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) reset();
    else if (time.hours === 0 && time.seconds === 0) {
      setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
    } else if (time.seconds === 0) {
      setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () =>
    setTime({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      {time.hours == 0 && time.minutes == 0 && time.seconds == 0 ? (
        <p>Expirado</p>
      ) : (
        <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes
          .toString()
          .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
      )}
    </div>
  );
};

export default CountDownTimer;
