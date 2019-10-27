let index = 1;
let i = 0;
function sub() {
  let input = document.querySelector(".input");
  let p = [];
  if (input.value != "") {
    p[index] = input.value;
    input.value = "";
    console.log(index, p[index]);
    let items = document.createElement("div");
    let done = document.createElement("div");
    done.className = "tick";
    items.appendChild(done);
    let itemsText = document.createElement("div");
    itemsText.className = "item-text";
    itemsText.innerHTML = p[index];
    items.appendChild(itemsText);
    items.className = "teth";
    items.id = index;
// done line
    items.onclick = function() {
      done.style.cssText =
        "  height: 2px; width: 200px; margin-left:2vw; border-radius: 0%;  transition: 0.3s;";
    };
    let cancel = document.createElement("div");
    cancel.className = "cross";
    cancel.innerHTML = '<img src="close.png" id="close-icon" />';
// close item 
    cancel.onclick = function() {
      cancel.parentElement.remove();
    };
    items.appendChild(cancel);
    document.querySelector(".two").appendChild(items);
    index++;
  }
}
