'use strict';

{
  //準備
  let cursorR = 4;  //カーソルの半径
  const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

  //上記のdivタグをマウスに追従させる処理
  document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });
  
  // stalker
  const stalker = document.getElementById('stalker'); 
  let hovFlag = false;

  document.addEventListener('mousemove', function (e) {
    if(!hovFlag) {
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
  });

  const linkElem = document.querySelectorAll('a:not(.no_stick_), button, input, #clickHere');
  for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
      hovFlag = true;

      stalker.classList.add('hov_');

      let rect = e.target.getBoundingClientRect();
      let posX = rect.left + (rect.width / 2);
      let posY = rect.top + (rect.height / 2);

      stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    linkElem[i].addEventListener('mouseout', function (e) {
      hovFlag = false;
      stalker.classList.remove('hov_');
    });
  }

  //上記のdivタグをマウスに追従させる処理
  document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });

  // typing
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
