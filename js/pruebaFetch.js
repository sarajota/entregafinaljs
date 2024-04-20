const calcular = document.getElementById('calcular');
const clickCountElement = document.getElementById('clickCount');

function getClickCount() {
  let clickCount = localStorage.getItem('clickCount');
  if (!clickCount) {
    clickCount = 0;
  } else {
    clickCount = JSON.parse(clickCount).count;
  }
  
  return parseInt(clickCount);
}
function updateClickCount(count) {
  clickCountElement.textContent = count;
}

function handleClick() {
  let clickCount = getClickCount();
  clickCount++;
  localStorage.setItem('clickCount', JSON.stringify({ count: clickCount }));
  updateClickCount(clickCount);
  saveClickCountToJson(clickCount);
}

function saveClickCountToJson(count) {
  const jsonData = { count: count };
  const jsonString = JSON.stringify(jsonData);

  localStorage.setItem('contador.json', jsonString);
}

calcular.addEventListener('click', handleClick);

window.addEventListener('load', () => {
  const jsonDataString = localStorage.getItem('contador.json');

  if (jsonDataString) {
    const jsonData = JSON.parse(jsonDataString);
    const clickCount = jsonData.count;
    updateClickCount(clickCount);
  }
});