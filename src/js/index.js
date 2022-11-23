const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
function toFullDate(day, month, year) {
  if(day <= 9) {
    day = '0' + day;
  }
  if(month <= 9) {
    month = '0' + month;
  }
  return `${day}.${month}.${year}`;
}
let currentDate = document.querySelector('.date');
currentDate.textContent = toFullDate(day, month, year);

const mainWrap = document.querySelector('.main-wrap');
const taskBtnAdd = document.querySelector('.task-btn-add');
console.log(taskBtnAdd);
const cardToDo = document.querySelector('.toDo');
const newTaskWrap = document.querySelector('.new-task-wrap');
const cardCloseBtn = document.querySelector('.card-close-btn');
const deleteAllBtn = document.querySelector('.task-btn-delete-all');

taskBtnAdd.addEventListener('click', function() {
  newTaskWrap.classList.add('active');
});


function render(task){
  return `
  <div class="task">
    <div class="task-header">
      <span class="task-status">${task.status}</span>
      <p class="task-date">${task.date}</p>
    </div>
    <div class="task-title">${task.title}</div>
    <div class="task-desc">${task.desc}</div>
    <div class="task-author">${task.author}</div>
    <div class="task-options">
      <button class="task-btn-move-on">
        <i class="fa-regular fa-circle-right"></i>
      </button>
      <button class="task-btn-delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>            
  </div>
  `  
}

let Task = function(title, desc, author, status, date) {
  this.title = title;
  this.desc = desc;
  this.author = author;
  this.status = status;
  this.date = date;
}

let newTaskTitle = document.querySelector('.new-task-title');
let newTaskDesc = document.querySelector('.new-task-desc');
let newTaskAuthor = document.querySelector('.new-task-author');
let tasks = [];
console.log(taskBtnAdd);
const createTask = function() {
  let taskDate = toFullDate(day, month, year);
  let status = 'to do';
  let newTask = new Task(newTaskTitle.value, newTaskDesc.value, newTaskAuthor.value, status, taskDate);
  cardToDo.innerHTML += render(newTask);
  tasks.push(newTask);
  console.log(taskBtnAdd);
}
cardCloseBtn.addEventListener('click', function() {
  newTaskWrap.classList.toggle('active');
  console.log(taskBtnAdd);
});
console.log(taskBtnAdd);


const taskBtnNew = document.querySelector('.task-btn-new');
taskBtnNew.addEventListener('click', createTask);
