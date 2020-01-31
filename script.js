(() => {
  const fpLogo = document.getElementById('fp-logo');
  const message = document.getElementById('message');

  const workingAnimation = document.getElementById('working-animation');
  const animationText = document.getElementById('animation-text');
  workingAnimation.style.marginTop = '150px';

  function showLogo() {
    // setTimeout(() => {
      fpLogo.classList.remove('logo-phase-one');
      message.classList.add('opacity-1');
      workingAnimation.style.display = 'none';
    // }, 2000);
  }

  function startAnimation() {
    let percentage = 0;
    const interval = setInterval(() => {
      if (percentage === 100) {
        clearInterval(interval);
        loadingDots();
        return;
      }
      percentage += 10;
      animationText.textContent = percentage + '% done!';
    }, 200);
  }

  function loadingDots() {
    let dots = '';
    let timesDots = 0;
    let timesPlayed = 0;
    const interval = setInterval(() => {
      if (timesPlayed === 3) {
        clearInterval(interval);
        showLogo();
        return;
      }

      dots = '';

      if (timesDots === 3) {
        timesDots = 1;
        timesPlayed++;
      } else {
        timesDots++;
      }

      for (let i = 0; i < timesDots; i++) {
        dots += '.';
      }

      animationText.textContent = dots;
    }, 200);
  }

  setTimeout(() => {
    startAnimation();
  }, 1000);
})()