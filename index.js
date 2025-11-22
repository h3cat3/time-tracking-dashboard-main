const container = document.getElementById('todos-container'); 
const dailyBtn = document.getElementById('daily-btn'); 
const weeklyBtn =document.getElementById('weekly-btn'); 
const monthlyBtn = document.getElementById('monthly-btn');
const workCT = document.getElementById('current-work'); 
const workPT = document.getElementById('previous-work'); 
const playCT = document.getElementById('current-play'); 
const playPT = document.getElementById('previous-play'); 
const studyCT = document.getElementById('current-study'); 
const studyPT = document.getElementById('previous-study'); 
const exerciseCT = document.getElementById('current-exercise'); 
const exercisePT = document.getElementById('previous-exercise'); 
const socialCT = document.getElementById('current-social'); 
const socialPT = document.getElementById('previous-social'); 
const selfCareCT = document.getElementById('current-self-care'); 
const selfCarePT = document.getElementById('previous-self-care');

let timeFrame = "daily";

function fetchData() { fetch('/data.json').then((response) => {
  if(!response.ok) return console.log('Oops! Something went wrong.');
  return response.json(); 
}).then((data) => { 
  populateDOM(data); 
}); 
}

const populateDOM = (data) => {
  data.forEach((item) => { 
    appendItem(item); 
  });
}

dailyBtn.addEventListener('click', () => { 
  dailyBtn.style.color = 'white'; 
  weeklyBtn.style.color = 'var(--Purple500)'; 
  monthlyBtn.style.color = 'var(--Purple500)'; 
  timeFrame = "daily"; fetchData(); 
})

weeklyBtn.addEventListener('click', () => { 
  dailyBtn.style.color = 'var(--Purple500)'; 
  weeklyBtn.style.color = 'white'; 
  monthlyBtn.style.color = 'var(--Purple500)'; 
  timeFrame = "weekly"; fetchData(); 
})

monthlyBtn.addEventListener('click', () => { 
  dailyBtn.style.color = 'var(--Purple500)'; 
  weeklyBtn.style.color = 'var(--Purple500)'; 
  monthlyBtn.style.color = 'white'; timeFrame = "monthly"; 
  fetchData(); 
})

const appendItem = (item) => { 
  if (item.title === "Work" ) { 
    if (timeFrame  === "daily") { 
      workCT.innerText =`${item.timeframes.daily.current}`; 
      workPT.innerText =`The day befor - ${item.timeframes.daily.previous}`; 
    } else if (timeFrame === "weekly") { 
      workCT.innerText = `${item.timeframes.weekly.current}`; 
      workPT.innerText = `Last week - ${item.timeframes.weekly.previous}`; 
    } else if (timeFrame === "monthly") { 
      workCT.innerText = `${item.timeframes.monthly.current}`; 
      workPT.innerText = `Last month - ${item.timeframes.monthly.previous}`; 
    }
  } 
  if (item.title === "Play" ) { 
    if (timeFrame  === "daily"){ 
      playCT.innerText = `${item.timeframes.daily.current}`; 
      playPT.innerText = `The day befor - ${item.timeframes.daily.previous}`; 
    } else if (timeFrame === "weekly") { 
      playCT.innerText = `${item.timeframes.weekly.current}`; 
      playPT.innerText = `Last week - ${item.timeframes.weekly.previous}`; 
    } else if (timeFrame === "monthly") { 
      playCT.innerText = `${item.timeframes.monthly.current}`; 
      playPT.innerText = `Last month - ${item.timeframes.monthly.previous}`; 
    } 
  } 
  if (item.title === "Study" ) { 
    if (timeFrame  === "daily"){ 
      studyCT.innerText = `${item.timeframes.daily.current}`; 
      studyPT.innerText = `The day befor - ${item.timeframes.daily.previous}`; 
    } else if (timeFrame === "weekly") { 
      studyCT.innerText = `${item.timeframes.weekly.current}`; 
      studyPT.innerText = `Last week - ${item.timeframes.weekly.previous}`; 
    } else if (timeFrame === "monthly") { 
      studyCT.innerText = `${item.timeframes.monthly.current}`; 
      studyPT.innerText = `Last month - ${item.timeframes.monthly.previous}`; 
    } 
  } 
  if (item.title === "Exercise" ) { 
    if (timeFrame  === "daily"){ 
      exerciseCT.innerText = `${item.timeframes.daily.current}`; 
      exercisePT.innerText = `The day befor - ${item.timeframes.daily.previous}`; 
    } else if (timeFrame === "weekly") { 
      exerciseCT.innerText = `${item.timeframes.weekly.current}`; 
      exercisePT.innerText = `Last week - ${item.timeframes.weekly.previous}`; 
    } else if (timeFrame === "monthly") { 
      exerciseCT.innerText = `${item.timeframes.monthly.current}`; 
      exercisePT.innerText = `Last month - ${item.timeframes.monthly.previous}`; 
    } 
  } 
  if (item.title === "Social" ) { 
    if (timeFrame  === "daily"){ 
      socialCT.innerText = `${item.timeframes.daily.current}`; 
      socialPT.innerText = `The day befor - ${item.timeframes.daily.previous}`; 
    } else if (timeFrame === "weekly") { 
      socialCT.innerText = `${item.timeframes.weekly.current}`; 
      socialPT.innerText = `Last week - ${item.timeframes.weekly.previous}`; 
    } else if (timeFrame === "monthly") { 
      socialCT.innerText = `${item.timeframes.monthly.current}`; 
      socialPT.innerText = `Last month - ${item.timeframes.monthly.previous}`; 
    } 
  } 
  if (item.title === "Self Care" ) { 
    if (timeFrame  === "daily"){ 
      selfCareCT.innerText = `${item.timeframes.daily.current}`; 
      selfCarePT.innerText = `The day befor - ${item.timeframes.daily.previous}`; 
    } else if (timeFrame === "weekly") { 
      selfCareCT.innerText = `${item.timeframes.weekly.current}`; 
      selfCarePT.innerText = `Last week - ${item.timeframes.weekly.previous}`; 
    } else if (timeFrame === "monthly") { 
      selfCareCT.innerText = `${item.timeframes.monthly.current}`; 
      selfCarePT.innerText = `Last month - ${item.timeframes.monthly.previous}`; 
    } 
  }
};
document.addEventListener('DOMContentLoaded', () => { fetchData(); });

