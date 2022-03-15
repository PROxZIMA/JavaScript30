const itemKey = 'LOCAL TAPAS';
const form = document.getElementById('add-items');
const itemsList = document.getElementById('plates');
const items = JSON.parse(localStorage.getItem(itemKey)) || [];

const addChild = (item, i) => {
  const li = document.createElement('li');
  li.innerHTML = `
  <input type="checkbox" id="item-${i}" ${item.booked ? 'checked' : ''} />
  <label data-index=${i} for="item-${i}">${item.name}</label>
  `;
  itemsList.appendChild(li);
}

items.forEach((item, i) => {
  addChild(item, i);
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = {
    name: e.target["item"].value.trim(),
    booked: false,
  };

  if (!item.name) {
    alert(`Item can't be empty`)
    return;
  }

  items.push(item);
  addChild(item, items.length - 1);
  localStorage.setItem(itemKey, JSON.stringify(items));
});

itemsList.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'LABEL') return;

  const index = e.target.dataset.index;
  items[index].booked = !items[index].booked;
  e.target.control.checked = !items[index].booked;

  localStorage.setItem(itemKey, JSON.stringify(items));
});
