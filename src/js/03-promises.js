import Notiflix from 'notiflix';

const elForm = document.querySelector('.form');

elForm.addEventListener('submit', event => {
  event.preventDefault();
  const elDelay = document.querySelector('input[name="delay"]');
  const elStep = document.querySelector('input[name="step"]');
  const elAmount = document.querySelector('input[name="amount"]');

  const initialDelay = parseInt(elDelay.value);
  const step = parseInt(elStep.value);
  const amount = parseInt(elAmount.value);

  const promises = [];

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const delay = initialDelay + (i - 1) * step;

    const promise = createPromise(position, delay);
    promises.push(promise);

    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
