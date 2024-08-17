const UI = {
    date: document.querySelectorAll('.date'),
    am_pm: document.querySelectorAll('.am-pm'),
    second: document.querySelectorAll('.hand--second'),
    minute: document.querySelectorAll('.hand--minute'),
    hour: document.querySelectorAll('.hand--hour'),
  }

const delay = [
  [0,0] , [3,30]
];
    
  function updateClock(){
    // GETTING TIME
    for(i=0;i<2;i++){
      var date = new Date();

      var now = new Date(date.getTime() + delay[i][0]*60*60*1000 + delay[i][1]*60*1000);

      // const date = now.getDate();
      const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
      const minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
      const hours = (now.getHours() + now.getMinutes() / 60) / 12 * 360;
      // UI Update

      UI.date[i].textContent = now.getDate();
      UI.am_pm[i].textContent = now.getHours() > 12 ? 'PM' : 'AM';
      UI.second[i].style.transform = `rotate(${seconds}deg)`;
      UI.minute[i].style.transform = `rotate(${minutes}deg)`;
      UI.hour[i].style.transform = `rotate(${hours}deg)`;
    }
    requestAnimationFrame(updateClock);
  }
  
  requestAnimationFrame(updateClock);