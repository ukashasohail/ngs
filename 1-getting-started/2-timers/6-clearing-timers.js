const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);

// console.log(timerId);
clearTimeout(timerId);
