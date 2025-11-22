
const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn =document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');

let timeFrame = "daily";

// Map titles to their DOM elements
const elementsMap = {
  Work:      { current: document.getElementById('current-work'),     previous: document.getElementById('previous-work') },
  Play:      { current: document.getElementById('current-play'),     previous: document.getElementById('previous-play') },
  Study:     { current: document.getElementById('current-study'),    previous: document.getElementById('previous-study') },
  Exercise:  { current: document.getElementById('current-exercise'), previous: document.getElementById('previous-exercise') },
  Social:    { current: document.getElementById('current-social'),   previous: document.getElementById('previous-social') },
  "Self Care": { current: document.getElementById('current-self-care'), previous: document.getElementById('previous-self-care') }
};

// Labels for previous values
const labels = {
  daily:   "The day before",
  weekly:  "Last week",
  monthly: "Last month"
};

async function fetchData() {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) throw new Error('Oops! Something went wrong.');
    const data = await response.json();
    populateDOM(data);
  } catch (error) {
    console.error(error);
  }
}

function populateDOM(data) {
  data.forEach(updateItem);
}

function updateItem(item) {
  const el = elementsMap[item.title];
  if (!el) return; // skip if no mapping

  const tf = item.timeframes[timeFrame];
  el.current.innerText  = `${tf.current}`;
  el.previous.innerText = `${labels[timeFrame]} - ${tf.previous}`;
}

// Button styling helper
function setActive(btn) {
  [dailyBtn, weeklyBtn, monthlyBtn].forEach(b => b.style.color = 'var(--Purple500)');
  btn.style.color = 'white';
}

// Event listeners
dailyBtn.addEventListener('click', () => {
  timeFrame = "daily";
  setActive(dailyBtn);
  fetchData();
});

weeklyBtn.addEventListener('click', () => {
  timeFrame = "weekly";
  setActive(weeklyBtn);
  fetchData();
});

monthlyBtn.addEventListener('click', () => {
  timeFrame = "monthly";
  setActive(monthlyBtn);
  fetchData();
});

document.addEventListener('DOMContentLoaded', fetchData);
