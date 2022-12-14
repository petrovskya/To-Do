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
const cardContentToDo = document.querySelector('.card-content__to-do');
const cardContentIn = document.querySelector('.card-content__in');
const cardContentDone = document.querySelector('.card-content__done');
const newTaskWrap = document.querySelector('.new-task-wrap');
const cardCloseBtn = document.querySelector('.card-close-btn');
const cancelBtn = document.querySelector('.task-btn-cancel');
const deleteAllBtn = document.querySelectorAll('.task-btn-delete-all');

let newTaskTitle = document.querySelector('.new-task-title');
let newTaskDesc = document.querySelector('.new-task-desc');
let newTaskAuthor = document.querySelector('.new-task-author');

let totalToDo = document.querySelectorAll('.score');
function countTotal(status, arr){
  totalToDo.forEach((item) => {
    if(item.dataset.status == status){
      item.innerHTML = arr.length;
    }
  });
}

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

function render(task, idx){
  return `
    <div class="task" data-status="toDo" id="${idx}">
      <div class="task-header">
        <span class="task-status">${task.status}</span>
        <p class="task-date">${task.date}</p>
      </div>
      <div class="task-title">${task.title}</div>
      <div class="task-desc">${task.desc}</div>
      <div class="task-author">${task.author}</div>
      <div class="task-options">
        <button class="task-btn-move-on" id="${idx}">
          <i class="fa-regular fa-circle-right"></i>
        </button>
        <button class="task-btn-delete" id="${idx}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>            
    </div>
  `  
}

function outToDo(){
  cardContentToDo.innerHTML = '';
  toDo.forEach((task, idx) => cardContentToDo.innerHTML += render(task, idx));
}
function outInProgress(){
  cardContentIn.innerHTML = '';
  inProgress.forEach((task, idx) => cardContentIn.innerHTML += render(task, idx));
}
function outDone(){
  cardContentDone.innerHTML = '';
  done.forEach((task, idx) => cardContentDone.innerHTML += render(task, idx));
}


const createTask = function() {
  let taskDate = toFullDate(day, month, year);
  let newTask = new Task(newTaskTitle.value, newTaskDesc.value, newTaskAuthor.value, 'toDo', taskDate);
  toDo.push(newTask);
  outToDo();
  countTotal('toDo', toDo);
  clearPopUp();
  
  let moveOnBtns = document.querySelectorAll('.task-btn-move-on'); 
  let deleteTaskBtns = document.querySelectorAll('.task-btn-delete'); 
  deleteTaskBtns.forEach((item) => {
    item.addEventListener('click', deleteTask);
  });
  moveOnBtns.forEach((item) => {
    item.addEventListener('click', moveOnTask);
  });
}

function deleteTask(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  toDo.splice(thisTask, 1);
  thisTask.remove();
  let taskDivs = document.querySelectorAll('.task');
  let deleteTaskBtns = document.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = document.querySelectorAll('.task-btn-move-on'); 
  taskDivs.forEach((item,idx) => {
    item.setAttribute('id', idx);
  });
  deleteTaskBtns.forEach((btn, idx) => {
    btn.setAttribute('id', idx);
  });
  moveOnBtns.forEach((btn, idx) => {
    btn.setAttribute('id', idx);
  });
  countTotal('toDo', toDo);
}
function moveOnTask(e){

  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  console.log(id);
  inProgress.push(toDo[id]);
  console.log(inProgress);
  toDo.splice(id, 1);
  console.log(toDo);
  thisTask.remove();
  let taskDivs = document.querySelectorAll('.task');
  let deleteTaskBtns = document.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = document.querySelectorAll('.task-btn-move-on'); 
  taskDivs.forEach((item,idx) => {
    item.setAttribute('id', idx);
  });
  deleteTaskBtns.forEach((btn, idx) => {
    btn.setAttribute('id', idx);
  });
  moveOnBtns.forEach((btn, idx) => {
    btn.setAttribute('id', idx);
  });
  countTotal('toDo', toDo);
  countTotal('inProgress', inProgress);
  outInProgress();

}

taskBtnAdd.addEventListener('click', () => newTaskWrap.classList.add('active'));

cardCloseBtn.addEventListener('click', function(){
  newTaskWrap.classList.toggle('active');
});

cancelBtn.addEventListener('click', clearPopUp());

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
  countTotal('toDo', toDo);
  countTotal('inProgress', inProgress);
  countTotal('done', done);
}
deleteAllBtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    if(e.currentTarget.dataset.status == 'toDo'){
      deleteTasks('toDo', toDo);
    }else if(e.currentTarget.dataset.status == 'inProgress'){
      deleteTasks('inProgress', inProgress);
    } else if(e.currentTarget.dataset.status == 'done'){
      deleteTasks('done', done);
    }
  });
});

