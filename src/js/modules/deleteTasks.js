import { countTotal } from "../index.js";
export function deleteTasks(arr, divs){
  arr.splice(0, arr.length);
  let taskDivs = divs.querySelectorAll('.task');
  taskDivs.forEach((item) =>item.remove());
  countTotal();
}