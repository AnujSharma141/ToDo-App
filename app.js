let index = 1;
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
    let cancel = document.createElement("div");
    cancel.className = "cross";
    cancel.innerHTML = '<img src="close.png" id="close-icon" />';
    items.appendChild(cancel);
    document.querySelector(".two").appendChild(items);

    index++;
  }
}
document.querySelector("#close-icon").onclick = function() {
  cancel();
};
function cancel() {
  console.log("hi");
}
//function done()
