'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }

  const words = [
    'kyoukai',
    'ouki',
    'shin',
    'youtanwa',
    'kanki',
    'tou',
    'eisei',
    'syouheikun',
    'bajiou',
  ]
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
  const message = [
    `まだまだですね！`
  ]
  
  const clickHere = document.getElementById('clickHere');
  clickHere.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', k => {
    if (k.key !== word[loc]) {
      return;
    }
    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);
    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        let reload = document.getElementById('reload');
        reload.textContent = 'Try Again! Please Refresh This Page!'

        if (elapsedTime <= 13) {
          result.textContent = `${elapsedTime} 秒！\n 君が天下の大将軍だ！！`;
          console.log('');
          `${reload}`;
        } else if (elapsedTime <= 15) {
          result.textContent = `${elapsedTime}秒！\n 1000人将に任命だ！！`;
          `${reload}`;
        } else {
          result.textContent = `${elapsedTime}秒！\n 歩兵から出直して来い！`
          `${reload}`;
          return;
        }
      }
      setWord();
    }
  });
 
}
