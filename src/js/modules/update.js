export function update(elem) {
  elem.forEach((item) => {
    item.forEach((el,idx) => {      
      el.setAttribute('id', idx);
    });
  });
}

