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
        " transition: 0.3s; animation:giga 0.9s; height: 2px; width: 400px; margin-left:2vw; border-radius: 0%;";
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

(function (exports) {
  function urlsToAbsolute(nodeList) {
      if (!nodeList.length) {
          return [];
      }
      var attrName = 'href';
      if (nodeList[0].__proto__ === HTMLImageElement.prototype
      || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
          attrName = 'src';
      }
      nodeList = [].map.call(nodeList, function (el, i) {
          var attr = el.getAttribute(attrName);
          if (!attr) {
              return;
          }
          var absURL = /^(https?|data):/i.test(attr);
          if (absURL) {
              return el;
          } else {
              return el;
          }
      });
      return nodeList;
  }

  function screenshotPage() {
      urlsToAbsolute(document.images);
      urlsToAbsolute(document.querySelectorAll("link[rel='stylesheet']"));
      var screenshot = document.documentElement.cloneNode(true);
      var b = document.createElement('base');
      b.href = document.location.protocol + '//' + location.host;
      var head = screenshot.querySelector('head');
      head.insertBefore(b, head.firstChild);
      screenshot.style.pointerEvents = 'none';
      screenshot.style.overflow = 'hidden';
      screenshot.style.webkitUserSelect = 'none';
      screenshot.style.mozUserSelect = 'none';
      screenshot.style.msUserSelect = 'none';
      screenshot.style.oUserSelect = 'none';
      screenshot.style.userSelect = 'none';
      screenshot.dataset.scrollX = window.scrollX;
      screenshot.dataset.scrollY = window.scrollY;
      var script = document.createElement('script');
      script.textContent = '(' + addOnPageLoad_.toString() + ')();';
      screenshot.querySelector('body').appendChild(script);
      var blob = new Blob([screenshot.outerHTML], {
          type: 'text/html'
      });
      return blob;
  }

  function addOnPageLoad_() {
      window.addEventListener('DOMContentLoaded', function (e) {
          var scrollX = document.documentElement.dataset.scrollX || 0;
          var scrollY = document.documentElement.dataset.scrollY || 0;
          window.scrollTo(scrollX, scrollY);
      });
  }

  function generate() {
      window.URL = window.URL || window.webkitURL;
      window.open(window.URL.createObjectURL(screenshotPage()));
  }
  exports.screenshotPage = screenshotPage;
  exports.generate = generate;
})(window);