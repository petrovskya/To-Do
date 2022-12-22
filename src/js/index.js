import {getDate} from "./modules/getDate.js";
import {clearPopUp} from "./modules/clearPopUp.js";

const toDo = [];
const inProgress = [];
const done = [];
const cardContentToDo = document.querySelector('.card-content__to-do');
const cardContentIn = document.querySelector('.card-content__in');
const cardContentDone = document.querySelector('.card-content__done');
export {toDo, inProgress, done, cardContentToDo, cardContentIn, cardContentDone};
import {outToDo, outInProgress, outDone} from "./modules/out.js";
import { update } from "./modules/update.js";
import { deleteTasks } from "./modules/deleteTasks.js";

let currentDate = document.querySelector('.date');
currentDate.textContent = getDate();

const mainWrap = document.querySelector('.main-wrap');
const taskBtnAdd = document.querySelector('.task-btn-add');

const newTaskWrap = document.querySelector('.new-task-wrap');
const cardCloseBtn = document.querySelector('.card-close-btn');
const clearBtn = document.querySelector('.task-btn-clear');
const deleteAllBtn = document.querySelectorAll('.task-btn-delete-all');

let newTaskTitle = document.querySelector('.new-task-title');
let newTaskDesc = document.querySelector('.new-task-desc');
let newTaskAuthor = document.querySelector('.new-task-author');




export function countTotal(){
  let totalToDo = document.querySelectorAll('.score');
  totalToDo.forEach((item) => {
    if(item.dataset.status == 'toDo'){
      item.innerHTML = toDo.length;
    } else if(item.dataset.status == 'inProgress'){
      item.innerHTML = inProgress.length;
    } else if(item.dataset.status == 'done'){
      item.innerHTML = done.length;
    } 
  });
}

// const isValid = function () {
//   let elements = document.querySelectorAll('.valid');
//   elements.forEach((item) => {
//     item.addEventListener('blur', () => {
//       if(!item.value){
//         item.value = null;
//         item.setAttribute('placeholder', 'Fill in the field!');
//         item.style.borderColor = 'red';
//       }
//     });
//     item.addEventListener('focus', () => {
//       if(item.getAttribute('id') == 'title') {
//         item.setAttribute('placeholder', 'Enter title for your note');
//       } else if(item.getAttribute('id') == 'desc') {
//         item.setAttribute('placeholder', 'Enter description for your note');
//       } else if(item.getAttribute('id') == 'author') {
//         item.setAttribute('placeholder', "Enter author's name");
//       }
//       item.style.borderColo = 'rgb(65, 112, 184)';
//     });
    
//   });
// }
function isValid(elem) {
  if(elem.value){
    return true;
  }
}

// const setData = () => {
//   let strToDo = JSON.stringify(toDo);
//   let strInP = JSON.stringify(inProgress);
//   let strDone = JSON.stringify(done);
//   localStorage.setItem('toDo', strToDo);
//   localStorage.setItem('inProgress',strInP);
//   localStorage.setItem('done',strDone);
// } 
// const getData = () => {
//   let from = localStorage.getItem('toDo');
//   let data = JSON.parse(from);
//   cardContentToDo.innerHTML = "";
//   if (data) {
//     sortItem(data);
//     countTotal();

//   } else {
//     cardContentToDo.innerHTML = "";
//   }
// }
// const sortItem = (data) => {
//   data.forEach((task, idx) => {
//     cardContentToDo.innerHTML += renderToDo(task, idx);
//   });
// };
// const removeUser = (array) => {
//   localStorage.removeItem(array);
//   setData(array);
//   getData();
// };

// getData();


// let moveOnBtns = cardContentToDo.querySelectorAll('.task-btn-move-on'); 
// let deleteTaskBtns = cardContentToDo.querySelectorAll('.task-btn-delete'); 
// deleteTaskBtns.forEach((item) => {
//   item.addEventListener('click', deleteTaskToDo);
// });
// moveOnBtns.forEach((item) => {
//   item.addEventListener('click', moveOnTaskToDo);
// });
// countTotal();

let Task = function(title, desc, author, date) {
  this.title = title;
  this.desc = desc;
  this.author = author;
  this.date = date;
}

function getCardToDoEl(card){
 var taskDivsToDo = card.querySelectorAll('.task');
  var moveOnBtns = card.querySelectorAll('.task-btn-move-on'); 
  var deleteTaskBtns = card.querySelectorAll('.task-btn-delete'); 
  deleteTaskBtns.forEach((item) => {
    item.addEventListener('click', deleteTaskToDo);
  });
  moveOnBtns.forEach((item) => {
    item.addEventListener('click', moveOnTaskToDo);
  });
  update([taskDivsToDo, deleteTaskBtns, moveOnBtns]);
}
function getCardInPrEl(card){
  let taskDivsInProgress = card.querySelectorAll('.task');
  let moveOnBtns = card.querySelectorAll('.task-btn-move-on'); 
  let moveBackBtns = card.querySelectorAll('.task-btn-move-back'); 
  let deleteTaskBtns = card.querySelectorAll('.task-btn-delete'); 
  deleteTaskBtns.forEach((item) => {
    item.addEventListener('click', deleteTaskIn);
  });
  moveOnBtns.forEach((item) => {
    item.addEventListener('click', moveOnTaskIn);
  });
  moveBackBtns.forEach((item) => {
    item.addEventListener('click', moveBackTask);
  });
  update([taskDivsInProgress, deleteTaskBtns, moveOnBtns, moveBackBtns]);
}
function getCardDoneEl(card){
  let taskDivsDone = card.querySelectorAll('.task');
  let moveBackBtns = card.querySelectorAll('.task-btn-move-back'); 
  let deleteTaskBtns = card.querySelectorAll('.task-btn-delete'); 
  deleteTaskBtns.forEach((item) => {
    item.addEventListener('click', deleteTaskDone);
  });
  moveBackBtns.forEach((item) => {
    item.addEventListener('click', moveBackTaskIn);
  });
  update([taskDivsDone, deleteTaskBtns, moveBackBtns]);
}
const createTask = function() {
  if(isValid(newTaskTitle) && isValid(newTaskAuthor)){
    let taskDate = getDate();
    let newTask = new Task(newTaskTitle.value, newTaskDesc.value, newTaskAuthor.value, taskDate);
    toDo.push(newTask);
    
    // setData(toDo);
    // getData();
    
    outToDo();
    clearPopUp([newTaskAuthor, newTaskDesc, newTaskTitle]);
    getCardToDoEl(cardContentToDo);
  }
}

function deleteTaskToDo(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  toDo.splice(thisTask, 1);
  // removeUser(toDo);
  thisTask.remove();
  getCardToDoEl(cardContentToDo);
  countTotal();
}
function moveOnTaskToDo(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  inProgress.push(toDo[id]);
  toDo.splice(id, 1);
  // removeUser(toDo);
  thisTask.remove();
  outInProgress();
  getCardToDoEl(cardContentToDo);
  getCardInPrEl(cardContentIn);
}

function deleteTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  inProgress.splice(thisTask, 1);
  thisTask.remove();
  getCardInPrEl(cardContentIn);
  countTotal();
  
}
function deleteTaskDone(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  done.splice(thisTask, 1);
  thisTask.remove();
  getCardDoneEl(cardContentDone);
  countTotal();
}

function moveBackTask(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  toDo.push(inProgress[id]);
  inProgress.splice(id, 1);
  thisTask.remove();
  getCardInPrEl(cardContentIn);
  outToDo();
  getCardToDoEl(cardContentToDo);
  countTotal();
}
function moveOnTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  done.push(inProgress[id]);
  inProgress.splice(id, 1);
  thisTask.remove();
  getCardInPrEl(cardContentIn);
  outDone();
  getCardDoneEl(cardContentDone);
  countTotal();
}

function moveBackTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  inProgress.push(done[id]);
  done.splice(id, 1);
  thisTask.remove();
  getCardDoneEl(cardContentDone);
  outInProgress();
  getCardInPrEl(cardContentIn);
  countTotal();
}
taskBtnAdd.addEventListener('click', () => newTaskWrap.classList.add('active'));

cardCloseBtn.addEventListener('click', function(){
  newTaskWrap.classList.toggle('active');
});

clearBtn.addEventListener('click', () => {
  clearPopUp([newTaskAuthor, newTaskDesc, newTaskTitle])});
const taskBtnNew = document.querySelector('.task-btn-new');
taskBtnNew.addEventListener('click', createTask);

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