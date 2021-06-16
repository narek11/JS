const time = () => {
  let time = 0;
  const interval = () => {
    time++;
    document.body.textContent = `spedziles na stronie ${time} sekund`;
  };
  return interval;
};

const start = time();
setInterval(start, 1000);
