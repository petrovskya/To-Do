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
const cancelBtn = document.querySelector('.task-btn-cancel');
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
// const setData = (array) => {
//   let str = JSON.stringify(array);
//   localStorage.setItem('toDo', str);
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

const createTask = function() {
  if(isValid(newTaskTitle) && isValid(newTaskAuthor)){
    let taskDate = getDate();
    let newTask = new Task(newTaskTitle.value, newTaskDesc.value, newTaskAuthor.value, taskDate);
    toDo.push(newTask);
    
    // setData(toDo);
    // getData();
    
    outToDo();
    clearPopUp([newTaskAuthor, newTaskDesc, newTaskTitle]);
   
    let moveOnBtns = cardContentToDo.querySelectorAll('.task-btn-move-on'); 
    let deleteTaskBtns = cardContentToDo.querySelectorAll('.task-btn-delete'); 
    deleteTaskBtns.forEach((item) => {
      item.addEventListener('click', deleteTaskToDo);
    });
    moveOnBtns.forEach((item) => {
      item.addEventListener('click', moveOnTaskToDo);
    });
    
  }
 
}

function deleteTaskToDo(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  toDo.splice(thisTask, 1);
  // removeUser(toDo);
  thisTask.remove();
  let taskDivsToDo = cardContentToDo.querySelectorAll('.task');
  let deleteTaskBtns = cardContentToDo.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = cardContentToDo.querySelectorAll('.task-btn-move-on'); 
  update([taskDivsToDo, deleteTaskBtns, moveOnBtns]);
  countTotal();
}
function moveOnTaskToDo(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  inProgress.push(toDo[id]);
  toDo.splice(id, 1);
  // removeUser(toDo);
  thisTask.remove();
  // outToDo();
  outInProgress();
  let taskDivsToDo = cardContentToDo.querySelectorAll('.task');
  let deleteTaskBtns = cardContentToDo.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = cardContentToDo.querySelectorAll('.task-btn-move-on'); 
  update([taskDivsToDo, deleteTaskBtns, moveOnBtns]);
  let taskDivsInProgress = cardContentIn.querySelectorAll('.task');
  update([taskDivsInProgress]);  
  countTotal();
 

  let moveOnBtnsIn = cardContentIn.querySelectorAll('.task-btn-move-on');
  moveOnBtnsIn.forEach((item) => {
    item.addEventListener('click', moveOnTaskIn);
  });
  let deleteTasksBtnsIn = cardContentIn.querySelectorAll('.task-btn-delete');
  deleteTasksBtnsIn.forEach((item) => {
    item.addEventListener('click', deleteTaskIn);
  });
}


function deleteTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  inProgress.splice(thisTask, 1);
  thisTask.remove();
  let taskDivsIn = cardContentIn.querySelectorAll('.task');
  let deleteTaskBtns = cardContentIn.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = cardContentIn.querySelectorAll('.task-btn-move-on'); 

  update([taskDivsIn, deleteTaskBtns, moveOnBtns]);

  countTotal();
  
}
function deleteTaskDone(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  done.splice(thisTask, 1);
  thisTask.remove();
  let taskDivsDone = cardContentDone.querySelectorAll('.task');
  let deleteTaskBtns = cardContentDone.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = cardContentDone.querySelectorAll('.task-btn-move-on'); 
  update([taskDivsDone, deleteTaskBtns, moveOnBtns]);
  countTotal();
}


function moveOnTaskIn(e){
  let thisTask = e.currentTarget.closest('div[data-status]');
  let id = thisTask.id;
  done.push(inProgress[id]);
  inProgress.splice(id, 1);
  thisTask.remove();
  let taskDivsIn = cardContentIn.querySelectorAll('.task');
  let deleteTaskBtns = document.querySelectorAll('.task-btn-delete'); 
  let moveOnBtns = document.querySelectorAll('.task-btn-move-on'); 
  update([taskDivsIn, deleteTaskBtns, moveOnBtns]);
  outDone();
  let taskDivsDone = cardContentDone.querySelectorAll('.task');
  
  update([taskDivsDone]);
  countTotal();
    
  let deleteTasksBtnsDone = cardContentDone.querySelectorAll('.task-btn-delete');
  deleteTasksBtnsDone.forEach((item) => {
    item.addEventListener('click', deleteTaskDone);
  });
}
  


taskBtnAdd.addEventListener('click', () => newTaskWrap.classList.add('active'));

cardCloseBtn.addEventListener('click', function(){
  newTaskWrap.classList.toggle('active');
});

cancelBtn.addEventListener('click', () => {
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