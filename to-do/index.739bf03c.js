// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cVgJb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
function toFullDate(day, month, year) {
    if (day <= 9) day = "0" + day;
    if (month <= 9) month = "0" + month;
    return `${day}.${month}.${year}`;
}
let currentDate = document.querySelector(".date");
currentDate.textContent = toFullDate(day, month, year);
const mainWrap = document.querySelector(".main-wrap");
const taskBtnAdd = document.querySelector(".task-btn-add");
const cardContentToDo = document.querySelector(".card-content__to-do");
const cardContentIn = document.querySelector(".card-content__in");
const cardContentDone = document.querySelector(".card-content__done");
const newTaskWrap = document.querySelector(".new-task-wrap");
const cardCloseBtn = document.querySelector(".card-close-btn");
const cancelBtn = document.querySelector(".task-btn-cancel");
const deleteAllBtn = document.querySelectorAll(".task-btn-delete-all");
let newTaskTitle = document.querySelector(".new-task-title");
let newTaskDesc = document.querySelector(".new-task-desc");
let newTaskAuthor = document.querySelector(".new-task-author");
let totalToDo = document.querySelectorAll(".score");
function countTotal(status, arr) {
    totalToDo.forEach((item)=>{
        if (item.dataset.status == status) item.innerHTML = arr.length;
    });
}
const toDo = [];
const inProgress = [];
const done = [];
function clearPopUp() {
    clearValue(newTaskTitle);
    clearValue(newTaskDesc);
    clearValue(newTaskAuthor);
// clearValue([newTaskAuthor, newTaskDesc, newTaskTitle]);
}
function clearValue(elem) {
    elem.value = "";
// форич
}
let Task = function(title, desc, author, status, date) {
    this.title = title;
    this.desc = desc;
    this.author = author;
    this.status = status;
    this.date = date;
};
function render(task, idx) {
    return `
    <div class="task" data-status="toDo" id="${idx}">
      <div class="task-header">
        <span class="task-status">${task.status}</span>
        <p class="task-date">${task.date}</p>
      </div>
      <div class="task-title">${task.title}</div>
      <div class="task-desc">${task.desc}</div>
      <div class="task-author">${task.author}</div>
      <div class="task-options">
        <button class="task-btn-move-on" id="${idx}">
          <i class="fa-regular fa-circle-right"></i>
        </button>
        <button class="task-btn-delete" id="${idx}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>            
    </div>
  `;
}
function outToDo() {
    cardContentToDo.innerHTML = "";
    toDo.forEach((task, idx)=>cardContentToDo.innerHTML += render(task, idx));
    countTotal(toDo, toDo);
}
function outInProgress() {
    cardContentIn.innerHTML = "";
    inProgress.forEach((task, idx)=>cardContentIn.innerHTML += render(task, idx));
}
function outDone() {
    cardContentDone.innerHTML = "";
    done.forEach((task, idx)=>cardContentDone.innerHTML += render(task, idx));
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
    if (elem.value) return true;
}
const setData = (array)=>{
    let str = JSON.stringify(array);
    localStorage.setItem("toDo", str);
};
const getData = ()=>{
    let from = localStorage.getItem("toDo");
    let data = JSON.parse(from);
    cardContentToDo.innerHTML = "";
    if (data) {
        sortItem(data);
        countTotal(toDo, toDo);
        countTotal(inProgress, inProgress);
        countTotal(done, done);
    } else cardContentToDo.innerHTML = "";
};
const sortItem = (data)=>{
    data.forEach((task, idx)=>{
        cardContentToDo.innerHTML += render(task, idx);
    });
};
const removeUser = (array)=>{
    localStorage.removeItem(array);
    setData(array);
    getData();
};
getData();
let moveOnBtns = cardContentToDo.querySelectorAll(".task-btn-move-on");
let deleteTaskBtns = cardContentToDo.querySelectorAll(".task-btn-delete");
deleteTaskBtns.forEach((item)=>{
    item.addEventListener("click", deleteTaskToDo);
});
moveOnBtns.forEach((item)=>{
    item.addEventListener("click", moveOnTaskToDo);
});
countTotal(toDo, toDo);
countTotal(inProgress, inProgress);
countTotal(done, done);
const createTask = function() {
    if (isValid(newTaskTitle) && isValid(newTaskAuthor)) {
        let taskDate = toFullDate(day, month, year);
        let newTask = new Task(newTaskTitle.value, newTaskDesc.value, newTaskAuthor.value, "to do", taskDate);
        toDo.push(newTask);
        setData(toDo);
        getData();
        // outToDo();
        clearPopUp();
        countTotal(toDo, toDo);
        let moveOnBtns = cardContentToDo.querySelectorAll(".task-btn-move-on");
        let deleteTaskBtns = cardContentToDo.querySelectorAll(".task-btn-delete");
        deleteTaskBtns.forEach((item)=>{
            item.addEventListener("click", deleteTaskToDo);
        });
        moveOnBtns.forEach((item)=>{
            item.addEventListener("click", moveOnTaskToDo);
        });
    }
    countTotal(toDo, toDo);
};
function deleteTaskToDo(e) {
    let thisTask = e.currentTarget.closest("div[data-status]");
    toDo.splice(thisTask, 1);
    removeUser(toDo);
    // thisTask.remove();
    let taskDivsToDo = cardContentToDo.querySelectorAll(".task");
    let deleteTaskBtns = cardContentToDo.querySelectorAll(".task-btn-delete");
    let moveOnBtns = cardContentToDo.querySelectorAll(".task-btn-move-on");
    update(taskDivsToDo);
    update(deleteTaskBtns);
    update(moveOnBtns);
    countTotal("toDo", toDo);
}
function moveOnTaskToDo(e) {
    let thisTask = e.currentTarget.closest("div[data-status]");
    let id = thisTask.id;
    inProgress.push(toDo[id]);
    toDo.splice(id, 1);
    removeUser(toDo);
    // thisTask.remove();
    let taskDivsToDo = cardContentToDo.querySelectorAll(".task");
    let deleteTaskBtns = cardContentToDo.querySelectorAll(".task-btn-delete");
    let moveOnBtns = cardContentToDo.querySelectorAll(".task-btn-move-on");
    update(taskDivsToDo);
    update(deleteTaskBtns);
    update(moveOnBtns);
    inProgress.forEach((item)=>{
        item.status = "in progress";
    });
    outInProgress();
    let taskDivsInProgress = cardContentIn.querySelectorAll(".task");
    taskDivsInProgress.forEach((item)=>{
        item.dataset.status = "inProgress";
    });
    update(taskDivsInProgress);
    countTotal("toDo", toDo);
    countTotal("inProgress", inProgress);
    let moveOnBtnsIn = cardContentIn.querySelectorAll(".task-btn-move-on");
    moveOnBtnsIn.forEach((item)=>{
        item.addEventListener("click", moveOnTaskIn);
    });
    let deleteTasksBtnsIn = cardContentIn.querySelectorAll(".task-btn-delete");
    deleteTasksBtnsIn.forEach((item)=>{
        item.addEventListener("click", deleteTaskIn);
    });
}
function deleteTaskIn(e) {
    let thisTask = e.currentTarget.closest("div[data-status]");
    inProgress.splice(thisTask, 1);
    thisTask.remove();
    let taskDivsIn = cardContentIn.querySelectorAll(".task");
    let deleteTaskBtns = cardContentIn.querySelectorAll(".task-btn-delete");
    let moveOnBtns = cardContentIn.querySelectorAll(".task-btn-move-on");
    update(taskDivsIn);
    update(deleteTaskBtns);
    update(moveOnBtns);
    countTotal("toDo", toDo);
    countTotal("inProgress", inProgress);
}
function deleteTaskDone(e) {
    let thisTask = e.currentTarget.closest("div[data-status]");
    done.splice(thisTask, 1);
    thisTask.remove();
    let taskDivsDone = cardContentDone.querySelectorAll(".task");
    let deleteTaskBtns = cardContentDone.querySelectorAll(".task-btn-delete");
    let moveOnBtns = cardContentDone.querySelectorAll(".task-btn-move-on");
    update(taskDivsDone);
    update(deleteTaskBtns);
    update(moveOnBtns);
    countTotal("toDo", toDo);
    countTotal("inProgress", inProgress);
    countTotal("done", done);
}
function moveOnTaskIn(e) {
    let thisTask = e.currentTarget.closest("div[data-status]");
    let id = thisTask.id;
    done.push(inProgress[id]);
    inProgress.splice(id, 1);
    thisTask.remove();
    let taskDivsInProgress = cardContentIn.querySelectorAll(".task");
    let deleteTaskBtns = document.querySelectorAll(".task-btn-delete");
    let moveOnBtns = document.querySelectorAll(".task-btn-move-on");
    update(taskDivsInProgress);
    update(deleteTaskBtns);
    update(moveOnBtns);
    done.forEach((item)=>{
        item.status = "done";
    });
    outDone();
    let taskDivsDone = cardContentDone.querySelectorAll(".task");
    taskDivsDone.forEach((item)=>{
        item.dataset.status = "done";
        let moveOnBtn = item.querySelector(".task-btn-move-on");
        moveOnBtn.remove();
    });
    update(taskDivsDone);
    countTotal("toDo", toDo);
    countTotal("inProgress", inProgress);
    countTotal("done", done);
    let deleteTasksBtnsDone = cardContentDone.querySelectorAll(".task-btn-delete");
    deleteTasksBtnsDone.forEach((item)=>{
        item.addEventListener("click", deleteTaskDone);
    });
}
function update(elem) {
    elem.forEach((item, idx)=>{
        item.setAttribute("id", idx);
    });
}
taskBtnAdd.addEventListener("click", ()=>newTaskWrap.classList.add("active"));
cardCloseBtn.addEventListener("click", function() {
    newTaskWrap.classList.toggle("active");
});
cancelBtn.addEventListener("click", clearPopUp);
const taskBtnNew = document.querySelector(".task-btn-new");
taskBtnNew.addEventListener("click", createTask);
function deleteTasks(arr, divs) {
    arr.splice(0, arr.length);
    let taskDivs = divs.querySelectorAll(".task");
    taskDivs.forEach((item)=>item.remove());
    countTotal("toDo", toDo);
    countTotal("inProgress", inProgress);
    countTotal("done", done);
}
deleteAllBtn.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        if (e.currentTarget.dataset.status == "toDo") deleteTasks(toDo, cardContentToDo);
        else if (e.currentTarget.dataset.status == "inProgress") deleteTasks(inProgress, cardContentIn);
        else if (e.currentTarget.dataset.status == "done") deleteTasks(done, cardContentDone);
    });
});

},{}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequired9c2")

//# sourceMappingURL=index.739bf03c.js.map