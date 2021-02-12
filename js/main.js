'use strict';

{
  // function setWord() {
  //   word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  //   target.textContent = word;
  //   loc = 0;
  // }
  // const words = [
  //   'red',
  //   'blue',
  //   'yellow',
  // ]

  // let word;
  // let loc = 0;
  // let startTime;
  // let isPlaying = false;
  // const target = document.getElementById('target');

  // document.addEventListener('click', () => {
  //   if (isPlaying === true) {
  //     return;
  //   }
  //   isPlaying = true;
  //   startTime = Date.now();
  //   setWord();
  // });

  // document.addEventListener('keydown', l => {
  //   if (l.key !== word[loc]) {
  //     return;
  //   }
  //   loc++;
  //   target.textContent = '_'.repeat(loc) + word.substring(loc);  
    
  //   if (loc === word.length) {
  //     if (words.length === 0) {
  //       let elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
  //       const result = document.getElementById('result');
  //       result.textContent = `Finished! ${elapsedTime} seconds!`;
  //       return;
  //     }
  //     setWord();
  //   } 
  // });
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
 
  document.addEventListener('click', () => {
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
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }
      setWord();
    }
  });
}
