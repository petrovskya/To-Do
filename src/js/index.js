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
const cardContent = document.querySelectorAll('.card-content');
const newTaskWrap = document.querySelector('.new-task-wrap');
const cardCloseBtn = document.querySelector('.card-close-btn');
const cancelBtn = document.querySelector('.task-btn-cancel');
const deleteAllBtn = document.querySelectorAll('.task-btn-delete-all');





let newTaskTitle = document.querySelector('.new-task-title');
let newTaskDesc = document.querySelector('.new-task-desc');
let newTaskAuthor = document.querySelector('.new-task-author');

let totalToDo = document.querySelectorAll('.score');

const toDo = [];
const inProgress = [];
const done = [];

function clearPopUp(){
  clearValue(newTaskTitle);
  clearValue(newTaskDesc);
  clearValue(newTaskAuthor);
}
function clearValue(elem) {
  elem.value = '';
}

let Task = function(title, desc, author, status, date) {
  this.title = title;
  this.desc = desc;
  this.author = author;
  this.status = status;
  this.date = date;
}

function render(task){
  return `
    <div class="task" data-status="toDo">
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

const createTask = function() {
  let taskDate = toFullDate(day, month, year);
  let status = 'toDo';
  let newTask = new Task(newTaskTitle.value, newTaskDesc.value, newTaskAuthor.value, status, taskDate);
  cardContent.forEach((item) => {
    if(item.dataset.status == 'toDo'){
      item.innerHTML += render(newTask);
    }
  });
  toDo.push(newTask);
  console.log(toDo);
  totalToDo.forEach((item) => {
    if(item.dataset.status == 'toDo'){
      item.innerHTML = toDo.length;
    };
  });
  clearPopUp();
}

taskBtnAdd.addEventListener('click', () => newTaskWrap.classList.add('active'));

cardCloseBtn.addEventListener('click', function(){
  newTaskWrap.classList.toggle('active');
});

cancelBtn.addEventListener('click', () => {
  clearPopUp();
});

const taskBtnNew = document.querySelector('.task-btn-new');
taskBtnNew.addEventListener('click', createTask);

function deleteTasks(status, arr){
  arr.splice(0, arr.length);
  let taskDivs = document.querySelectorAll('.task');
  taskDivs.forEach((item) => {
    if(item.dataset.status == status) {
      item.remove();
    }
  });
  totalToDo.forEach((item) => {
    if(item.dataset.status == status){
      item.innerHTML = arr.length;
    };
  });
}
deleteAllBtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    if(e.currentTarget.dataset.status == 'toDo'){
      deleteTasks('toDo', toDo);
    }else if(e.currentTarget.dataset.status == 'inProgress'){
      deleteTasks('inProgress', inProgress);
    } else if(e.currentTarget.dataset.status == 'done'){
      deleteTasks('done', done);
    };
  });
});

