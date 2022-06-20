  const getNumber = (counter) => {
    return parseFloat(counter.dataset.countTo);
  };
  const getSpeed = (counter) => {
    return parseFloat(counter.dataset.duration);
  };

  const getPrefix = (counter) => {
      return counter.dataset.prefix !== undefined ? counter.dataset.prefix : "";
  }

  const getExtra = (counter) => {
    return counter.dataset.extra !== undefined ? counter.dataset.extra : "";
}  
  
  const updateTex = (counter, text) => {
    counter.textContent = text;
  };
  
  const animate = (counter, countTo, duration, prefix, extra) => {
    let startTime = null;
  
    let currentTime = Date.now();
  
    const step = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }
  
      const progress = Math.min((currentTime - startTime) / duration, 1);
  
      const currentNum = Math.floor(progress * countTo);
  
      updateTex(counter, currentNum);
  
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
        counter.textContent = prefix + counter.textContent + extra;
      }
    };
  
    window.requestAnimationFrame(step);
  };
  
  const counters = document.querySelectorAll('.counter');
  console.log(counters);
  counters.forEach((counter) => {
    const countTo = getNumber(counter);
    const animationDuration = getSpeed(counter);
    const extra = getExtra(counter);
    const prefix = getPrefix(counter);
    animate(counter, countTo, animationDuration, prefix, extra);
  });