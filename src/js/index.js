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
  let newTask = new Task(newTaskTitle.value, newTaskDesc.value, newTaskAuthor.value, 'to do', taskDate);
  toDo.push(newTask);
  outToDo();
  countTotal('toDo', toDo);
  clearPopUp();
  
  let moveOnBtns = document.querySelectorAll('.task-btn-move-on'); 
  let deleteTaskBtns = document.querySelectorAll('.task-btn-delete'); 
  deleteTaskBtns.forEach((item) => {
    if(item.dataset.status = 'toDo'){
      item.addEventListener('click', deleteTaskToDo);
    } else if(item.dataset.status = 'inProgress'){ 
      item.addEventListener('click', deleteTaskIn);
    } else if(item.dataset.status = 'done'){
      item.addEventListener('click', deleteTaskDone);
    }
  });
  moveOnBtns.forEach((item) => {
    if(item.dataset.status = 'toDo') {
      item.addEventListener('click', moveOnTaskToDo);
    } else if(item.dataset.status = 'inProgress'){
      item.addEventListener('click', moveOnTaskIn);
    }
  });
}

function deleteTaskToDo(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  toDo.splice(thisTask, 1);
  thisTask.remove();
  let taskDivsToDo = cardContentToDo.querySelectorAll('.task');
  let deleteTaskBtns = document.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = document.querySelectorAll('.task-btn-move-on'); 
  update(taskDivsToDo);
  update(deleteTaskBtns);
  update(moveOnBtns);
  countTotal('toDo', toDo);
}
function deleteTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  inProgress.splice(thisTask, 1);
  thisTask.remove();
  let taskDivsIn = cardContentIn.querySelectorAll('.task');
  let deleteTaskBtns = cardContentIn.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = cardContentIn.querySelectorAll('.task-btn-move-on'); 
  update(taskDivsIn);
  update(deleteTaskBtns);
  update(moveOnBtns);
  countTotal('toDo', toDo);
  countTotal('inProgress', inProgress);
}
function deleteTaskDone(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  done.splice(thisTask, 1);
  thisTask.remove();
  let taskDivsDone = cardContentDone.querySelectorAll('.task');
  let deleteTaskBtns = cardContentDone.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = cardContentDone.querySelectorAll('.task-btn-move-on'); 
  update(taskDivsDone);
  update(deleteTaskBtns);
  update(moveOnBtns);
  countTotal('toDo', toDo);
  countTotal('inProgress', inProgress);
  countTotal('done', done);
}


function moveOnTaskToDo(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  inProgress.push(toDo[id]);
  toDo.splice(id, 1);
  thisTask.remove();
  let taskDivsToDo = cardContentToDo.querySelectorAll('.task');
  let deleteTaskBtns = document.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = document.querySelectorAll('.task-btn-move-on'); 
  update(taskDivsToDo);
  update(deleteTaskBtns);
  update(moveOnBtns);
  inProgress.forEach((item) => {
    item.status = 'in progress';
  });
  outInProgress();
  let taskDivsInProgress = cardContentIn.querySelectorAll('.task');
  taskDivsInProgress.forEach((item) => {
    item.dataset.status = 'inProgress';
  });
  update(taskDivsInProgress);  
  countTotal('toDo', toDo);
  countTotal('inProgress', inProgress);
}
function moveOnTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  done.push(toDo[id]);
  inProgress.splice(id, 1);
  thisTask.remove();
  let taskDivsInProgress = cardContentIn.querySelectorAll('.task');
  let deleteTaskBtns = document.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = document.querySelectorAll('.task-btn-move-on'); 
  update(taskDivsInProgress);
  update(deleteTaskBtns);
  update(moveOnBtns);
  inProgress.forEach((item) => {
    item.status = 'done';
  });
  outDone();
  let taskDivsDone = cardContentDone.querySelectorAll('.task');
  taskDivsDone.forEach((item) => {
    item.dataset.status = 'done';
  });
  update(taskDivsDone);
  countTotal('toDo', toDo);
  countTotal('inProgress', inProgress);
  countTotal('done', done);
  
}

function update(elem) {
  elem.forEach((item,idx) => {
    item.setAttribute('id', idx);
  });
}

taskBtnAdd.addEventListener('click', () => newTaskWrap.classList.add('active'));

cardCloseBtn.addEventListener('click', function(){
  newTaskWrap.classList.toggle('active');
});

cancelBtn.addEventListener('click', clearPopUp());

const taskBtnNew = document.querySelector('.task-btn-new');
taskBtnNew.addEventListener('click', createTask);

function deleteTasks(arr, divs){
  arr.splice(0, arr.length);
  let taskDivs = divs.querySelectorAll('.task');
  taskDivs.forEach((item) =>item.remove());
  countTotal('toDo', toDo);
  countTotal('inProgress', inProgress);
  countTotal('done', done);
}
deleteAllBtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    if(e.currentTarget.dataset.status == 'toDo'){
      deleteTasks(toDo, cardContentToDo);
    }else if(e.currentTarget.dataset.status == 'inProgress'){
      deleteTasks(inProgress, cardContentIn);
    } else if(e.currentTarget.dataset.status == 'done'){
      deleteTasks(done, cardContentDone);
    }
  });
});

