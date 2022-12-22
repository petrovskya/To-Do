import { update } from "./update.js";
import {deleteTaskToDo, deleteTaskIn, deleteTaskDone, moveOnTaskToDo, moveOnTaskIn, moveBackTask, moveBackTaskIn} from "../index.js";
export function getCardToDoEl(card){
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
export function getCardInPrEl(card){
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
export function getCardDoneEl(card){
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