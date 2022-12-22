
import {renderToDo} from "./renderToDo.js";
import {renderInProgress} from "./renderInProgress.js";
import {renderDone} from "./renderDone.js";
import {countTotal, toDo, inProgress, done, cardContentToDo, cardContentIn, cardContentDone } from "../index.js";


export function outToDo(){
  cardContentToDo.innerHTML = '';
  toDo.forEach((task, idx) => cardContentToDo.innerHTML += renderToDo(task, idx));
  countTotal(); 
}
export function outInProgress(){
  cardContentIn.innerHTML = '';
  inProgress.forEach((task, idx) => cardContentIn.innerHTML += renderInProgress(task, idx));
  countTotal();
}
export function outDone(){
  cardContentDone.innerHTML = '';
  done.forEach((task, idx) => cardContentDone.innerHTML += renderDone(task, idx));
  countTotal();
}
