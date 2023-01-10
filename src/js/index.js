import {getDate} from "./modules/getDate.js";
import {clearPopUp} from "./modules/clearPopUp.js";

let toDo = [];
let inProgress = [];
let done = [];
const cardContentToDo = document.querySelector('.card-content__to-do');
const cardContentIn = document.querySelector('.card-content__in');
const cardContentDone = document.querySelector('.card-content__done');
export {toDo, inProgress, done, cardContentToDo, cardContentIn, cardContentDone};
import {outToDo, outInProgress, outDone} from "./modules/out.js";
import { deleteTasks } from "./modules/deleteTasks.js";
import { getCardToDoEl, getCardInPrEl, getCardDoneEl } from "./modules/getCardsElements.js";
import { renderToDo } from "./modules/renderToDo.js";
import { renderInProgress } from "./modules/renderInProgress.js";
import { renderDone } from "./modules/renderDone.js";
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
    elem.style.borderColor = 'rgb(0, 28, 61)';
    return true;
  } else {
    elem.style.borderColor = 'red';
  }
}

const setData = () => {
  let strToDo = JSON.stringify(toDo);
  let strInP = JSON.stringify(inProgress);
  let strDone = JSON.stringify(done);
  localStorage.setItem('toDo', strToDo);
  localStorage.setItem('inProgress',strInP);
  localStorage.setItem('done',strDone);
} 
const getData = () => {
  let fromToDo = localStorage.getItem('toDo');
  let fromInPr = localStorage.getItem('inProgress');
  let fromDone = localStorage.getItem('done');
  let dataToDo = JSON.parse(fromToDo);
  let dataInPr = JSON.parse(fromInPr);
  let dataDone = JSON.parse(fromDone);
  cardContentToDo.innerHTML = "";
  if (dataToDo) {
    // dataToDo.forEach((task, idx) => {
    //   cardContentToDo.innerHTML += renderToDo(task, idx);
    // });
    toDo = dataToDo;
    cardContentToDo.innerHTML = '';
    dataToDo.forEach((task, idx) => cardContentToDo.innerHTML += renderToDo(task, idx));
    getCardToDoEl(cardContentToDo);
    countTotal();

  } else {
    cardContentToDo.innerHTML = "";
  }
  if (dataInPr) {
    // dataInPr.forEach((task, idx) => {
    //   cardContentIn.innerHTML += renderInProgress(task, idx);
    // });
    inProgress = dataInPr;
    cardContentIn.innerHTML = '';
    dataInPr.forEach((task, idx) => cardContentIn.innerHTML += renderInProgress(task, idx));
    getCardInPrEl(cardContentIn);
    countTotal();

  } else {
    cardContentIn.innerHTML = "";
  }
  if (dataDone) {
    // dataDone.forEach((task, idx) => {
    //   cardContentDone.innerHTML += renderDone(task, idx);
    // });
    done = dataDone;
    cardContentDone.innerHTML = '';
    dataDone.forEach((task, idx) => cardContentDone.innerHTML += renderDone(task, idx));
    getCardDoneEl(cardContentDone);
    countTotal();

  } else {
    cardContentDone.innerHTML = "";
  }
}


getData();
countTotal();



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

const createTask = function() {
  if(isValid(newTaskTitle)){
    let taskDate = getDate();
    let newTask = new Task(newTaskTitle.value, newTaskDesc.value, newTaskAuthor.value, taskDate);
    toDo.push(newTask);
    
    setData();
    getData();
    
    // outToDo();
    clearPopUp([newTaskAuthor, newTaskDesc, newTaskTitle]);
    // getCardToDoEl(cardContentToDo);
  }
}

export function deleteTaskToDo(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  toDo.splice(thisTask, 1);
  // removeUser(toDo);
  thisTask.remove();
  setData(toDo);
  getData();
  // getCardToDoEl(cardContentToDo);
  countTotal();
}
export function moveOnTaskToDo(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  inProgress.push(toDo[id]);
  toDo.splice(id, 1);
  // removeUser(toDo);
  thisTask.remove();
  setData();
  getData();
  // outInProgress();
  // getCardToDoEl(cardContentToDo);
  // getCardInPrEl(cardContentIn);
}

export function deleteTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  inProgress.splice(thisTask, 1);
  thisTask.remove();
  // getCardInPrEl(cardContentIn);
  setData();
  getData();
  countTotal();
  
}
export function deleteTaskDone(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  done.splice(thisTask, 1);
  thisTask.remove();
  // getCardDoneEl(cardContentDone);
  setData();
  getData();
  countTotal();
}

export function moveBackTask(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  toDo.push(inProgress[id]);
  inProgress.splice(id, 1);
  thisTask.remove();
  // getCardInPrEl(cardContentIn);
  // outToDo();
  // getCardToDoEl(cardContentToDo);
  setData();
  getData();
  countTotal();
}
export function moveOnTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  done.push(inProgress[id]);
  inProgress.splice(id, 1);
  thisTask.remove();
  // getCardInPrEl(cardContentIn);
  // outDone();
  // getCardDoneEl(cardContentDone);
  setData();
  getData();
  countTotal();
}

export function moveBackTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  inProgress.push(done[id]);
  done.splice(id, 1);
  thisTask.remove();
  // getCardDoneEl(cardContentDone);
  // outInProgress();
  // getCardInPrEl(cardContentIn);
  setData();
  getData();
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