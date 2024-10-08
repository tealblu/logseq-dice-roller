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
})({"hdaM1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1jwFz":[function(require,module,exports) {
var _libs = require("@logseq/libs");
function evaluateExpression(expression) {
    // Remove all whitespace from the expression
    expression = expression.replace(/\s+/g, "");
    // Function to handle basic operations
    const operate = (a, b, operator)=>{
        switch(operator){
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
    };
    // Function to evaluate the expression
    const parseExpression = (expr)=>{
        const tokens = expr.match(/(\d+|\+|\-|\*|\/|\(|\))/g);
        if (!tokens) throw new Error("Invalid expression");
        const outputQueue = [];
        const operatorStack = [];
        const precedence = {
            "+": 1,
            "-": 1,
            "*": 2,
            "/": 2
        };
        tokens.forEach((token)=>{
            if (!isNaN(Number(token))) outputQueue.push(Number(token));
            else if ("+-*/".includes(token)) {
                while(operatorStack.length && precedence[operatorStack[operatorStack.length - 1]] >= precedence[token])outputQueue.push(operatorStack.pop());
                operatorStack.push(token);
            } else if (token === "(") operatorStack.push(token);
            else if (token === ")") {
                while(operatorStack[operatorStack.length - 1] !== "(")outputQueue.push(operatorStack.pop());
                operatorStack.pop(); // Remove the '(' from the stack
            }
        });
        while(operatorStack.length)outputQueue.push(operatorStack.pop());
        const resultStack = [];
        outputQueue.forEach((token)=>{
            if (typeof token === "number") resultStack.push(token);
            else {
                const b = resultStack.pop();
                const a = resultStack.pop();
                resultStack.push(operate(a, b, token));
            }
        });
        return resultStack[0];
    };
    return parseExpression(expression);
}
function evaluateDiceRoll(content) {
    // parse content for dice roll
    const roll = content.match(/(\d*)d(\d+)([+-]\d+)?/);
    // if no dice roll found, throw an error
    if (!roll) throw new Error("No dice roll found");
    // extract dice roll parameters
    const [, num, dice, modifier] = roll;
    // convert num to integer
    const numInt = num ? parseInt(num) : 1;
    // roll dice and track all results
    const rolls = [];
    for(let i = 0; i < numInt; i++)rolls.push(Math.floor(Math.random() * parseInt(dice)) + 1);
    // calculate total
    let total = rolls.reduce((a, b)=>a + b, 0);
    // apply modifier
    if (modifier) total += parseInt(modifier);
    // construct result string
    let result = `${total}`;
    if (numInt > 1) result += ` (${rolls.join(", ")})`;
    return result;
}
// main function
function main() {
    // add slash command for dynamic command parsing (e.g. /roll 2d6+10)
    logseq.Editor.registerSlashCommand("roll", async ()=>{
        // get content of current block
        const content = await logseq.Editor.getEditingBlockContent();
        // if no dice roll found, return
        if (!content) {
            logseq.App.showMsg("No dice roll found :(");
            return;
        }
        // evaluate dice roll
        let result;
        try {
            result = evaluateDiceRoll(content);
        } catch (e) {
            logseq.App.showMsg(`Error: ${e.message}`);
            return;
        }
        // insert result into block
        logseq.Editor.insertAtEditingCursor(`: ${result}`);
    });
    logseq.Editor.registerSlashCommand("calc", async ()=>{
        // get content of current block
        const content = await logseq.Editor.getEditingBlockContent();
        // if no expression found, return
        if (!content) {
            logseq.App.showMsg("No expression found :(");
            return;
        }
        // evaluate expression
        let result;
        try {
            result = evaluateExpression(content);
        } catch (e) {
            logseq.App.showMsg(`Error: ${e.message}`);
            return;
        }
        // insert result into block
        logseq.Editor.insertAtEditingCursor(`: ${result}`);
    });
    logseq.App.showMsg("indiLib loaded :)");
}
logseq.ready(main).catch(console.error);

},{"@logseq/libs":"8Y0mt"}],"8Y0mt":[function(require,module,exports) {
/*! For license information please see lsplugin.user.js.LICENSE.txt */ var global = arguments[3];
!function(e, t) {
    module.exports = t();
}(self, function() {
    return (()=>{
        var e = {
            227: (e, t, n)=>{
                var r = n(155);
                t.formatArgs = function(t) {
                    if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                    const n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    let r = 0, o = 0;
                    t[0].replace(/%[a-zA-Z%]/g, (e)=>{
                        "%%" !== e && (r++, "%c" === e && (o = r));
                    }), t.splice(o, 0, n);
                }, t.save = function(e) {
                    try {
                        e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
                    } catch (e) {}
                }, t.load = function() {
                    let e;
                    try {
                        e = t.storage.getItem("debug");
                    } catch (e) {}
                    return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e;
                }, t.useColors = function() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
                }, t.storage = function() {
                    try {
                        return localStorage;
                    } catch (e) {}
                }(), t.destroy = (()=>{
                    let e = !1;
                    return ()=>{
                        e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                    };
                })(), t.colors = [
                    "#0000CC",
                    "#0000FF",
                    "#0033CC",
                    "#0033FF",
                    "#0066CC",
                    "#0066FF",
                    "#0099CC",
                    "#0099FF",
                    "#00CC00",
                    "#00CC33",
                    "#00CC66",
                    "#00CC99",
                    "#00CCCC",
                    "#00CCFF",
                    "#3300CC",
                    "#3300FF",
                    "#3333CC",
                    "#3333FF",
                    "#3366CC",
                    "#3366FF",
                    "#3399CC",
                    "#3399FF",
                    "#33CC00",
                    "#33CC33",
                    "#33CC66",
                    "#33CC99",
                    "#33CCCC",
                    "#33CCFF",
                    "#6600CC",
                    "#6600FF",
                    "#6633CC",
                    "#6633FF",
                    "#66CC00",
                    "#66CC33",
                    "#9900CC",
                    "#9900FF",
                    "#9933CC",
                    "#9933FF",
                    "#99CC00",
                    "#99CC33",
                    "#CC0000",
                    "#CC0033",
                    "#CC0066",
                    "#CC0099",
                    "#CC00CC",
                    "#CC00FF",
                    "#CC3300",
                    "#CC3333",
                    "#CC3366",
                    "#CC3399",
                    "#CC33CC",
                    "#CC33FF",
                    "#CC6600",
                    "#CC6633",
                    "#CC9900",
                    "#CC9933",
                    "#CCCC00",
                    "#CCCC33",
                    "#FF0000",
                    "#FF0033",
                    "#FF0066",
                    "#FF0099",
                    "#FF00CC",
                    "#FF00FF",
                    "#FF3300",
                    "#FF3333",
                    "#FF3366",
                    "#FF3399",
                    "#FF33CC",
                    "#FF33FF",
                    "#FF6600",
                    "#FF6633",
                    "#FF9900",
                    "#FF9933",
                    "#FFCC00",
                    "#FFCC33"
                ], t.log = console.debug || console.log || (()=>{}), e.exports = n(447)(t);
                const { formatters: o } = e.exports;
                o.j = function(e) {
                    try {
                        return JSON.stringify(e);
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message;
                    }
                };
            },
            447: (e, t, n)=>{
                e.exports = function(e) {
                    function t(e) {
                        let n, o = null;
                        function i(...e) {
                            if (!i.enabled) return;
                            const r = i, o = Number(new Date), a = o - (n || o);
                            r.diff = a, r.prev = n, r.curr = o, n = o, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                            let s = 0;
                            e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o)=>{
                                if ("%%" === n) return "%";
                                s++;
                                const i = t.formatters[o];
                                if ("function" == typeof i) {
                                    const t = e[s];
                                    n = i.call(r, t), e.splice(s, 1), s--;
                                }
                                return n;
                            }), t.formatArgs.call(r, e), (r.log || t.log).apply(r, e);
                        }
                        return i.namespace = e, i.useColors = t.useColors(), i.color = t.selectColor(e), i.extend = r, i.destroy = t.destroy, Object.defineProperty(i, "enabled", {
                            enumerable: !0,
                            configurable: !1,
                            get: ()=>null === o ? t.enabled(e) : o,
                            set: (e)=>{
                                o = e;
                            }
                        }), "function" == typeof t.init && t.init(i), i;
                    }
                    function r(e, n) {
                        const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
                        return r.log = this.log, r;
                    }
                    function o(e) {
                        return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
                    }
                    return t.debug = t, t.default = t, t.coerce = function(e) {
                        return e instanceof Error ? e.stack || e.message : e;
                    }, t.disable = function() {
                        const e = [
                            ...t.names.map(o),
                            ...t.skips.map(o).map((e)=>"-" + e)
                        ].join(",");
                        return t.enable(""), e;
                    }, t.enable = function(e) {
                        let n;
                        t.save(e), t.names = [], t.skips = [];
                        const r = ("string" == typeof e ? e : "").split(/[\s,]+/), o = r.length;
                        for(n = 0; n < o; n++)r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                    }, t.enabled = function(e) {
                        if ("*" === e[e.length - 1]) return !0;
                        let n, r;
                        for(n = 0, r = t.skips.length; n < r; n++)if (t.skips[n].test(e)) return !1;
                        for(n = 0, r = t.names.length; n < r; n++)if (t.names[n].test(e)) return !0;
                        return !1;
                    }, t.humanize = n(824), t.destroy = function() {
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                    }, Object.keys(e).forEach((n)=>{
                        t[n] = e[n];
                    }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                        let n = 0;
                        for(let t = 0; t < e.length; t++)n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                        return t.colors[Math.abs(n) % t.colors.length];
                    }, t.enable(t.load()), t;
                };
            },
            856: function(e) {
                e.exports = function() {
                    "use strict";
                    var e = Object.hasOwnProperty, t = Object.setPrototypeOf, n = Object.isFrozen, r = Object.getPrototypeOf, o = Object.getOwnPropertyDescriptor, i = Object.freeze, a = Object.seal, s = Object.create, c = "undefined" != typeof Reflect && Reflect, l = c.apply, u = c.construct;
                    l || (l = function(e, t, n) {
                        return e.apply(t, n);
                    }), i || (i = function(e) {
                        return e;
                    }), a || (a = function(e) {
                        return e;
                    }), u || (u = function(e, t) {
                        return new (Function.prototype.bind.apply(e, [
                            null
                        ].concat(function(e) {
                            if (Array.isArray(e)) {
                                for(var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
                                return n;
                            }
                            return Array.from(e);
                        }(t))));
                    });
                    var p, f = x(Array.prototype.forEach), d = x(Array.prototype.pop), h = x(Array.prototype.push), m = x(String.prototype.toLowerCase), g = x(String.prototype.match), y = x(String.prototype.replace), v = x(String.prototype.indexOf), b = x(String.prototype.trim), _ = x(RegExp.prototype.test), w = (p = TypeError, function() {
                        for(var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n];
                        return u(p, t);
                    });
                    function x(e) {
                        return function(t) {
                            for(var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)r[o - 1] = arguments[o];
                            return l(e, t, r);
                        };
                    }
                    function C(e, r) {
                        t && t(e, null);
                        for(var o = r.length; o--;){
                            var i = r[o];
                            if ("string" == typeof i) {
                                var a = m(i);
                                a !== i && (n(r) || (r[o] = a), i = a);
                            }
                            e[i] = !0;
                        }
                        return e;
                    }
                    function S(t) {
                        var n = s(null), r = void 0;
                        for(r in t)l(e, t, [
                            r
                        ]) && (n[r] = t[r]);
                        return n;
                    }
                    function O(e, t) {
                        for(; null !== e;){
                            var n = o(e, t);
                            if (n) {
                                if (n.get) return x(n.get);
                                if ("function" == typeof n.value) return x(n.value);
                            }
                            e = r(e);
                        }
                        return function(e) {
                            return console.warn("fallback value for", e), null;
                        };
                    }
                    var j = i([
                        "a",
                        "abbr",
                        "acronym",
                        "address",
                        "area",
                        "article",
                        "aside",
                        "audio",
                        "b",
                        "bdi",
                        "bdo",
                        "big",
                        "blink",
                        "blockquote",
                        "body",
                        "br",
                        "button",
                        "canvas",
                        "caption",
                        "center",
                        "cite",
                        "code",
                        "col",
                        "colgroup",
                        "content",
                        "data",
                        "datalist",
                        "dd",
                        "decorator",
                        "del",
                        "details",
                        "dfn",
                        "dialog",
                        "dir",
                        "div",
                        "dl",
                        "dt",
                        "element",
                        "em",
                        "fieldset",
                        "figcaption",
                        "figure",
                        "font",
                        "footer",
                        "form",
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "head",
                        "header",
                        "hgroup",
                        "hr",
                        "html",
                        "i",
                        "img",
                        "input",
                        "ins",
                        "kbd",
                        "label",
                        "legend",
                        "li",
                        "main",
                        "map",
                        "mark",
                        "marquee",
                        "menu",
                        "menuitem",
                        "meter",
                        "nav",
                        "nobr",
                        "ol",
                        "optgroup",
                        "option",
                        "output",
                        "p",
                        "picture",
                        "pre",
                        "progress",
                        "q",
                        "rp",
                        "rt",
                        "ruby",
                        "s",
                        "samp",
                        "section",
                        "select",
                        "shadow",
                        "small",
                        "source",
                        "spacer",
                        "span",
                        "strike",
                        "strong",
                        "style",
                        "sub",
                        "summary",
                        "sup",
                        "table",
                        "tbody",
                        "td",
                        "template",
                        "textarea",
                        "tfoot",
                        "th",
                        "thead",
                        "time",
                        "tr",
                        "track",
                        "tt",
                        "u",
                        "ul",
                        "var",
                        "video",
                        "wbr"
                    ]), A = i([
                        "svg",
                        "a",
                        "altglyph",
                        "altglyphdef",
                        "altglyphitem",
                        "animatecolor",
                        "animatemotion",
                        "animatetransform",
                        "circle",
                        "clippath",
                        "defs",
                        "desc",
                        "ellipse",
                        "filter",
                        "font",
                        "g",
                        "glyph",
                        "glyphref",
                        "hkern",
                        "image",
                        "line",
                        "lineargradient",
                        "marker",
                        "mask",
                        "metadata",
                        "mpath",
                        "path",
                        "pattern",
                        "polygon",
                        "polyline",
                        "radialgradient",
                        "rect",
                        "stop",
                        "style",
                        "switch",
                        "symbol",
                        "text",
                        "textpath",
                        "title",
                        "tref",
                        "tspan",
                        "view",
                        "vkern"
                    ]), T = i([
                        "feBlend",
                        "feColorMatrix",
                        "feComponentTransfer",
                        "feComposite",
                        "feConvolveMatrix",
                        "feDiffuseLighting",
                        "feDisplacementMap",
                        "feDistantLight",
                        "feFlood",
                        "feFuncA",
                        "feFuncB",
                        "feFuncG",
                        "feFuncR",
                        "feGaussianBlur",
                        "feMerge",
                        "feMergeNode",
                        "feMorphology",
                        "feOffset",
                        "fePointLight",
                        "feSpecularLighting",
                        "feSpotLight",
                        "feTile",
                        "feTurbulence"
                    ]), E = i([
                        "animate",
                        "color-profile",
                        "cursor",
                        "discard",
                        "fedropshadow",
                        "feimage",
                        "font-face",
                        "font-face-format",
                        "font-face-name",
                        "font-face-src",
                        "font-face-uri",
                        "foreignobject",
                        "hatch",
                        "hatchpath",
                        "mesh",
                        "meshgradient",
                        "meshpatch",
                        "meshrow",
                        "missing-glyph",
                        "script",
                        "set",
                        "solidcolor",
                        "unknown",
                        "use"
                    ]), k = i([
                        "math",
                        "menclose",
                        "merror",
                        "mfenced",
                        "mfrac",
                        "mglyph",
                        "mi",
                        "mlabeledtr",
                        "mmultiscripts",
                        "mn",
                        "mo",
                        "mover",
                        "mpadded",
                        "mphantom",
                        "mroot",
                        "mrow",
                        "ms",
                        "mspace",
                        "msqrt",
                        "mstyle",
                        "msub",
                        "msup",
                        "msubsup",
                        "mtable",
                        "mtd",
                        "mtext",
                        "mtr",
                        "munder",
                        "munderover"
                    ]), F = i([
                        "maction",
                        "maligngroup",
                        "malignmark",
                        "mlongdiv",
                        "mscarries",
                        "mscarry",
                        "msgroup",
                        "mstack",
                        "msline",
                        "msrow",
                        "semantics",
                        "annotation",
                        "annotation-xml",
                        "mprescripts",
                        "none"
                    ]), L = i([
                        "#text"
                    ]), I = i([
                        "accept",
                        "action",
                        "align",
                        "alt",
                        "autocapitalize",
                        "autocomplete",
                        "autopictureinpicture",
                        "autoplay",
                        "background",
                        "bgcolor",
                        "border",
                        "capture",
                        "cellpadding",
                        "cellspacing",
                        "checked",
                        "cite",
                        "class",
                        "clear",
                        "color",
                        "cols",
                        "colspan",
                        "controls",
                        "controlslist",
                        "coords",
                        "crossorigin",
                        "datetime",
                        "decoding",
                        "default",
                        "dir",
                        "disabled",
                        "disablepictureinpicture",
                        "disableremoteplayback",
                        "download",
                        "draggable",
                        "enctype",
                        "enterkeyhint",
                        "face",
                        "for",
                        "headers",
                        "height",
                        "hidden",
                        "high",
                        "href",
                        "hreflang",
                        "id",
                        "inputmode",
                        "integrity",
                        "ismap",
                        "kind",
                        "label",
                        "lang",
                        "list",
                        "loading",
                        "loop",
                        "low",
                        "max",
                        "maxlength",
                        "media",
                        "method",
                        "min",
                        "minlength",
                        "multiple",
                        "muted",
                        "name",
                        "noshade",
                        "novalidate",
                        "nowrap",
                        "open",
                        "optimum",
                        "pattern",
                        "placeholder",
                        "playsinline",
                        "poster",
                        "preload",
                        "pubdate",
                        "radiogroup",
                        "readonly",
                        "rel",
                        "required",
                        "rev",
                        "reversed",
                        "role",
                        "rows",
                        "rowspan",
                        "spellcheck",
                        "scope",
                        "selected",
                        "shape",
                        "size",
                        "sizes",
                        "span",
                        "srclang",
                        "start",
                        "src",
                        "srcset",
                        "step",
                        "style",
                        "summary",
                        "tabindex",
                        "title",
                        "translate",
                        "type",
                        "usemap",
                        "valign",
                        "value",
                        "width",
                        "xmlns",
                        "slot"
                    ]), M = i([
                        "accent-height",
                        "accumulate",
                        "additive",
                        "alignment-baseline",
                        "ascent",
                        "attributename",
                        "attributetype",
                        "azimuth",
                        "basefrequency",
                        "baseline-shift",
                        "begin",
                        "bias",
                        "by",
                        "class",
                        "clip",
                        "clippathunits",
                        "clip-path",
                        "clip-rule",
                        "color",
                        "color-interpolation",
                        "color-interpolation-filters",
                        "color-profile",
                        "color-rendering",
                        "cx",
                        "cy",
                        "d",
                        "dx",
                        "dy",
                        "diffuseconstant",
                        "direction",
                        "display",
                        "divisor",
                        "dur",
                        "edgemode",
                        "elevation",
                        "end",
                        "fill",
                        "fill-opacity",
                        "fill-rule",
                        "filter",
                        "filterunits",
                        "flood-color",
                        "flood-opacity",
                        "font-family",
                        "font-size",
                        "font-size-adjust",
                        "font-stretch",
                        "font-style",
                        "font-variant",
                        "font-weight",
                        "fx",
                        "fy",
                        "g1",
                        "g2",
                        "glyph-name",
                        "glyphref",
                        "gradientunits",
                        "gradienttransform",
                        "height",
                        "href",
                        "id",
                        "image-rendering",
                        "in",
                        "in2",
                        "k",
                        "k1",
                        "k2",
                        "k3",
                        "k4",
                        "kerning",
                        "keypoints",
                        "keysplines",
                        "keytimes",
                        "lang",
                        "lengthadjust",
                        "letter-spacing",
                        "kernelmatrix",
                        "kernelunitlength",
                        "lighting-color",
                        "local",
                        "marker-end",
                        "marker-mid",
                        "marker-start",
                        "markerheight",
                        "markerunits",
                        "markerwidth",
                        "maskcontentunits",
                        "maskunits",
                        "max",
                        "mask",
                        "media",
                        "method",
                        "mode",
                        "min",
                        "name",
                        "numoctaves",
                        "offset",
                        "operator",
                        "opacity",
                        "order",
                        "orient",
                        "orientation",
                        "origin",
                        "overflow",
                        "paint-order",
                        "path",
                        "pathlength",
                        "patterncontentunits",
                        "patterntransform",
                        "patternunits",
                        "points",
                        "preservealpha",
                        "preserveaspectratio",
                        "primitiveunits",
                        "r",
                        "rx",
                        "ry",
                        "radius",
                        "refx",
                        "refy",
                        "repeatcount",
                        "repeatdur",
                        "restart",
                        "result",
                        "rotate",
                        "scale",
                        "seed",
                        "shape-rendering",
                        "specularconstant",
                        "specularexponent",
                        "spreadmethod",
                        "startoffset",
                        "stddeviation",
                        "stitchtiles",
                        "stop-color",
                        "stop-opacity",
                        "stroke-dasharray",
                        "stroke-dashoffset",
                        "stroke-linecap",
                        "stroke-linejoin",
                        "stroke-miterlimit",
                        "stroke-opacity",
                        "stroke",
                        "stroke-width",
                        "style",
                        "surfacescale",
                        "systemlanguage",
                        "tabindex",
                        "targetx",
                        "targety",
                        "transform",
                        "text-anchor",
                        "text-decoration",
                        "text-rendering",
                        "textlength",
                        "type",
                        "u1",
                        "u2",
                        "unicode",
                        "values",
                        "viewbox",
                        "visibility",
                        "version",
                        "vert-adv-y",
                        "vert-origin-x",
                        "vert-origin-y",
                        "width",
                        "word-spacing",
                        "wrap",
                        "writing-mode",
                        "xchannelselector",
                        "ychannelselector",
                        "x",
                        "x1",
                        "x2",
                        "xmlns",
                        "y",
                        "y1",
                        "y2",
                        "z",
                        "zoomandpan"
                    ]), N = i([
                        "accent",
                        "accentunder",
                        "align",
                        "bevelled",
                        "close",
                        "columnsalign",
                        "columnlines",
                        "columnspan",
                        "denomalign",
                        "depth",
                        "dir",
                        "display",
                        "displaystyle",
                        "encoding",
                        "fence",
                        "frame",
                        "height",
                        "href",
                        "id",
                        "largeop",
                        "length",
                        "linethickness",
                        "lspace",
                        "lquote",
                        "mathbackground",
                        "mathcolor",
                        "mathsize",
                        "mathvariant",
                        "maxsize",
                        "minsize",
                        "movablelimits",
                        "notation",
                        "numalign",
                        "open",
                        "rowalign",
                        "rowlines",
                        "rowspacing",
                        "rowspan",
                        "rspace",
                        "rquote",
                        "scriptlevel",
                        "scriptminsize",
                        "scriptsizemultiplier",
                        "selection",
                        "separator",
                        "separators",
                        "stretchy",
                        "subscriptshift",
                        "supscriptshift",
                        "symmetric",
                        "voffset",
                        "width",
                        "xmlns"
                    ]), R = i([
                        "xlink:href",
                        "xml:id",
                        "xlink:title",
                        "xml:space",
                        "xmlns:xlink"
                    ]), z = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm), D = a(/<%[\s\S]*|[\s\S]*%>/gm), P = a(/^data-[\-\w.\u00B7-\uFFFF]/), U = a(/^aria-[\-\w]+$/), $ = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), H = a(/^(?:\w+script|data):/i), B = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    };
                    function G(e) {
                        if (Array.isArray(e)) {
                            for(var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
                            return n;
                        }
                        return Array.from(e);
                    }
                    var J = function() {
                        return "undefined" == typeof window ? null : window;
                    }, q = function(e, t) {
                        if ("object" !== (void 0 === e ? "undefined" : W(e)) || "function" != typeof e.createPolicy) return null;
                        var n = null, r = "data-tt-policy-suffix";
                        t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
                        var o = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(o, {
                                createHTML: function(e) {
                                    return e;
                                }
                            });
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + o + " could not be created."), null;
                        }
                    };
                    return function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(), n = function(t) {
                            return e(t);
                        };
                        if (n.version = "2.3.1", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
                        var r = t.document, o = t.document, a = t.DocumentFragment, s = t.HTMLTemplateElement, c = t.Node, l = t.Element, u = t.NodeFilter, p = t.NamedNodeMap, x = void 0 === p ? t.NamedNodeMap || t.MozNamedAttrMap : p, Z = t.Text, V = t.Comment, K = t.DOMParser, Y = t.trustedTypes, X = l.prototype, Q = O(X, "cloneNode"), ee = O(X, "nextSibling"), te = O(X, "childNodes"), ne = O(X, "parentNode");
                        if ("function" == typeof s) {
                            var re = o.createElement("template");
                            re.content && re.content.ownerDocument && (o = re.content.ownerDocument);
                        }
                        var oe = q(Y, r), ie = oe && ze ? oe.createHTML("") : "", ae = o, se = ae.implementation, ce = ae.createNodeIterator, le = ae.createDocumentFragment, ue = ae.getElementsByTagName, pe = r.importNode, fe = {};
                        try {
                            fe = S(o).documentMode ? o.documentMode : {};
                        } catch (e) {}
                        var de = {};
                        n.isSupported = "function" == typeof ne && se && void 0 !== se.createHTMLDocument && 9 !== fe;
                        var he = z, me = D, ge = P, ye = U, ve = H, be = B, _e = $, we = null, xe = C({}, [].concat(G(j), G(A), G(T), G(k), G(L))), Ce = null, Se = C({}, [].concat(G(I), G(M), G(N), G(R))), Oe = null, je = null, Ae = !0, Te = !0, Ee = !1, ke = !1, Fe = !1, Le = !1, Ie = !1, Me = !1, Ne = !1, Re = !0, ze = !1, De = !0, Pe = !0, Ue = !1, $e = {}, He = null, Be = C({}, [
                            "annotation-xml",
                            "audio",
                            "colgroup",
                            "desc",
                            "foreignobject",
                            "head",
                            "iframe",
                            "math",
                            "mi",
                            "mn",
                            "mo",
                            "ms",
                            "mtext",
                            "noembed",
                            "noframes",
                            "noscript",
                            "plaintext",
                            "script",
                            "style",
                            "svg",
                            "template",
                            "thead",
                            "title",
                            "video",
                            "xmp"
                        ]), We = null, Ge = C({}, [
                            "audio",
                            "video",
                            "img",
                            "source",
                            "image",
                            "track"
                        ]), Je = null, qe = C({}, [
                            "alt",
                            "class",
                            "for",
                            "id",
                            "label",
                            "name",
                            "pattern",
                            "placeholder",
                            "role",
                            "summary",
                            "title",
                            "value",
                            "style",
                            "xmlns"
                        ]), Ze = "http://www.w3.org/1998/Math/MathML", Ve = "http://www.w3.org/2000/svg", Ke = "http://www.w3.org/1999/xhtml", Ye = Ke, Xe = !1, Qe = null, et = o.createElement("form"), tt = function(e) {
                            Qe && Qe === e || (e && "object" === (void 0 === e ? "undefined" : W(e)) || (e = {}), e = S(e), we = "ALLOWED_TAGS" in e ? C({}, e.ALLOWED_TAGS) : xe, Ce = "ALLOWED_ATTR" in e ? C({}, e.ALLOWED_ATTR) : Se, Je = "ADD_URI_SAFE_ATTR" in e ? C(S(qe), e.ADD_URI_SAFE_ATTR) : qe, We = "ADD_DATA_URI_TAGS" in e ? C(S(Ge), e.ADD_DATA_URI_TAGS) : Ge, He = "FORBID_CONTENTS" in e ? C({}, e.FORBID_CONTENTS) : Be, Oe = "FORBID_TAGS" in e ? C({}, e.FORBID_TAGS) : {}, je = "FORBID_ATTR" in e ? C({}, e.FORBID_ATTR) : {}, $e = "USE_PROFILES" in e && e.USE_PROFILES, Ae = !1 !== e.ALLOW_ARIA_ATTR, Te = !1 !== e.ALLOW_DATA_ATTR, Ee = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ke = e.SAFE_FOR_TEMPLATES || !1, Fe = e.WHOLE_DOCUMENT || !1, Me = e.RETURN_DOM || !1, Ne = e.RETURN_DOM_FRAGMENT || !1, Re = !1 !== e.RETURN_DOM_IMPORT, ze = e.RETURN_TRUSTED_TYPE || !1, Ie = e.FORCE_BODY || !1, De = !1 !== e.SANITIZE_DOM, Pe = !1 !== e.KEEP_CONTENT, Ue = e.IN_PLACE || !1, _e = e.ALLOWED_URI_REGEXP || _e, Ye = e.NAMESPACE || Ke, ke && (Te = !1), Ne && (Me = !0), $e && (we = C({}, [].concat(G(L))), Ce = [], !0 === $e.html && (C(we, j), C(Ce, I)), !0 === $e.svg && (C(we, A), C(Ce, M), C(Ce, R)), !0 === $e.svgFilters && (C(we, T), C(Ce, M), C(Ce, R)), !0 === $e.mathMl && (C(we, k), C(Ce, N), C(Ce, R))), e.ADD_TAGS && (we === xe && (we = S(we)), C(we, e.ADD_TAGS)), e.ADD_ATTR && (Ce === Se && (Ce = S(Ce)), C(Ce, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && C(Je, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (He === Be && (He = S(He)), C(He, e.FORBID_CONTENTS)), Pe && (we["#text"] = !0), Fe && C(we, [
                                "html",
                                "head",
                                "body"
                            ]), we.table && (C(we, [
                                "tbody"
                            ]), delete Oe.tbody), i && i(e), Qe = e);
                        }, nt = C({}, [
                            "mi",
                            "mo",
                            "mn",
                            "ms",
                            "mtext"
                        ]), rt = C({}, [
                            "foreignobject",
                            "desc",
                            "title",
                            "annotation-xml"
                        ]), ot = C({}, A);
                        C(ot, T), C(ot, E);
                        var it = C({}, k);
                        C(it, F);
                        var at = function(e) {
                            var t = ne(e);
                            t && t.tagName || (t = {
                                namespaceURI: Ke,
                                tagName: "template"
                            });
                            var n = m(e.tagName), r = m(t.tagName);
                            if (e.namespaceURI === Ve) return t.namespaceURI === Ke ? "svg" === n : t.namespaceURI === Ze ? "svg" === n && ("annotation-xml" === r || nt[r]) : Boolean(ot[n]);
                            if (e.namespaceURI === Ze) return t.namespaceURI === Ke ? "math" === n : t.namespaceURI === Ve ? "math" === n && rt[r] : Boolean(it[n]);
                            if (e.namespaceURI === Ke) {
                                if (t.namespaceURI === Ve && !rt[r]) return !1;
                                if (t.namespaceURI === Ze && !nt[r]) return !1;
                                var o = C({}, [
                                    "title",
                                    "style",
                                    "font",
                                    "a",
                                    "script"
                                ]);
                                return !it[n] && (o[n] || !ot[n]);
                            }
                            return !1;
                        }, st = function(e) {
                            h(n.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e);
                            } catch (t) {
                                try {
                                    e.outerHTML = ie;
                                } catch (t) {
                                    e.remove();
                                }
                            }
                        }, ct = function(e, t) {
                            try {
                                h(n.removed, {
                                    attribute: t.getAttributeNode(e),
                                    from: t
                                });
                            } catch (e) {
                                h(n.removed, {
                                    attribute: null,
                                    from: t
                                });
                            }
                            if (t.removeAttribute(e), "is" === e && !Ce[e]) {
                                if (Me || Ne) try {
                                    st(t);
                                } catch (e) {}
                                else try {
                                    t.setAttribute(e, "");
                                } catch (e) {}
                            }
                        }, lt = function(e) {
                            var t = void 0, n = void 0;
                            if (Ie) e = "<remove></remove>" + e;
                            else {
                                var r = g(e, /^[\r\n\t ]+/);
                                n = r && r[0];
                            }
                            var i = oe ? oe.createHTML(e) : e;
                            if (Ye === Ke) try {
                                t = (new K).parseFromString(i, "text/html");
                            } catch (e) {}
                            if (!t || !t.documentElement) {
                                t = se.createDocument(Ye, "template", null);
                                try {
                                    t.documentElement.innerHTML = Xe ? "" : i;
                                } catch (e) {}
                            }
                            var a = t.body || t.documentElement;
                            return e && n && a.insertBefore(o.createTextNode(n), a.childNodes[0] || null), Ye === Ke ? ue.call(t, Fe ? "html" : "body")[0] : Fe ? t.documentElement : a;
                        }, ut = function(e) {
                            return ce.call(e.ownerDocument || e, e, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, null, !1);
                        }, pt = function(e) {
                            return !(e instanceof Z || e instanceof V || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof x && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI && "function" == typeof e.insertBefore);
                        }, ft = function(e) {
                            return "object" === (void 0 === c ? "undefined" : W(c)) ? e instanceof c : e && "object" === (void 0 === e ? "undefined" : W(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
                        }, dt = function(e, t, r) {
                            de[e] && f(de[e], function(e) {
                                e.call(n, t, r, Qe);
                            });
                        }, ht = function(e) {
                            var t = void 0;
                            if (dt("beforeSanitizeElements", e, null), pt(e)) return st(e), !0;
                            if (g(e.nodeName, /[\u0080-\uFFFF]/)) return st(e), !0;
                            var r = m(e.nodeName);
                            if (dt("uponSanitizeElement", e, {
                                tagName: r,
                                allowedTags: we
                            }), !ft(e.firstElementChild) && (!ft(e.content) || !ft(e.content.firstElementChild)) && _(/<[/\w]/g, e.innerHTML) && _(/<[/\w]/g, e.textContent)) return st(e), !0;
                            if ("select" === r && _(/<template/i, e.innerHTML)) return st(e), !0;
                            if (!we[r] || Oe[r]) {
                                if (Pe && !He[r]) {
                                    var o = ne(e) || e.parentNode, i = te(e) || e.childNodes;
                                    if (i && o) for(var a = i.length - 1; a >= 0; --a)o.insertBefore(Q(i[a], !0), ee(e));
                                }
                                return st(e), !0;
                            }
                            return e instanceof l && !at(e) ? (st(e), !0) : "noscript" !== r && "noembed" !== r || !_(/<\/no(script|embed)/i, e.innerHTML) ? (ke && 3 === e.nodeType && (t = e.textContent, t = y(t, he, " "), t = y(t, me, " "), e.textContent !== t && (h(n.removed, {
                                element: e.cloneNode()
                            }), e.textContent = t)), dt("afterSanitizeElements", e, null), !1) : (st(e), !0);
                        }, mt = function(e, t, n) {
                            if (De && ("id" === t || "name" === t) && (n in o || n in et)) return !1;
                            if (Te && !je[t] && _(ge, t)) ;
                            else if (Ae && _(ye, t)) ;
                            else {
                                if (!Ce[t] || je[t]) return !1;
                                if (Je[t]) ;
                                else if (_(_e, y(n, be, ""))) ;
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== v(n, "data:") || !We[e]) {
                                    if (Ee && !_(ve, y(n, be, ""))) ;
                                    else if (n) return !1;
                                }
                            }
                            return !0;
                        }, gt = function(e) {
                            var t = void 0, r = void 0, o = void 0, i = void 0;
                            dt("beforeSanitizeAttributes", e, null);
                            var a = e.attributes;
                            if (a) {
                                var s = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: Ce
                                };
                                for(i = a.length; i--;){
                                    var c = t = a[i], l = c.name, u = c.namespaceURI;
                                    if (r = b(t.value), o = m(l), s.attrName = o, s.attrValue = r, s.keepAttr = !0, s.forceKeepAttr = void 0, dt("uponSanitizeAttribute", e, s), r = s.attrValue, !s.forceKeepAttr && (ct(l, e), s.keepAttr)) {
                                        if (_(/\/>/i, r)) ct(l, e);
                                        else {
                                            ke && (r = y(r, he, " "), r = y(r, me, " "));
                                            var p = e.nodeName.toLowerCase();
                                            if (mt(p, o, r)) try {
                                                u ? e.setAttributeNS(u, l, r) : e.setAttribute(l, r), d(n.removed);
                                            } catch (e) {}
                                        }
                                    }
                                }
                                dt("afterSanitizeAttributes", e, null);
                            }
                        }, yt = function e(t) {
                            var n = void 0, r = ut(t);
                            for(dt("beforeSanitizeShadowDOM", t, null); n = r.nextNode();)dt("uponSanitizeShadowNode", n, null), ht(n) || (n.content instanceof a && e(n.content), gt(n));
                            dt("afterSanitizeShadowDOM", t, null);
                        };
                        return n.sanitize = function(e, o) {
                            var i = void 0, s = void 0, l = void 0, u = void 0, p = void 0;
                            if ((Xe = !e) && (e = "<!-->"), "string" != typeof e && !ft(e)) {
                                if ("function" != typeof e.toString) throw w("toString is not a function");
                                if ("string" != typeof (e = e.toString())) throw w("dirty is not a string, aborting");
                            }
                            if (!n.isSupported) {
                                if ("object" === W(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                                    if ("string" == typeof e) return t.toStaticHTML(e);
                                    if (ft(e)) return t.toStaticHTML(e.outerHTML);
                                }
                                return e;
                            }
                            if (Le || tt(o), n.removed = [], "string" == typeof e && (Ue = !1), Ue) ;
                            else if (e instanceof c) 1 === (s = (i = lt("<!---->")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? i = s : i.appendChild(s);
                            else {
                                if (!Me && !ke && !Fe && -1 === e.indexOf("<")) return oe && ze ? oe.createHTML(e) : e;
                                if (!(i = lt(e))) return Me ? null : ie;
                            }
                            i && Ie && st(i.firstChild);
                            for(var f = ut(Ue ? e : i); l = f.nextNode();)3 === l.nodeType && l === u || ht(l) || (l.content instanceof a && yt(l.content), gt(l), u = l);
                            if (u = null, Ue) return e;
                            if (Me) {
                                if (Ne) for(p = le.call(i.ownerDocument); i.firstChild;)p.appendChild(i.firstChild);
                                else p = i;
                                return Re && (p = pe.call(r, p, !0)), p;
                            }
                            var d = Fe ? i.outerHTML : i.innerHTML;
                            return ke && (d = y(d, he, " "), d = y(d, me, " ")), oe && ze ? oe.createHTML(d) : d;
                        }, n.setConfig = function(e) {
                            tt(e), Le = !0;
                        }, n.clearConfig = function() {
                            Qe = null, Le = !1;
                        }, n.isValidAttribute = function(e, t, n) {
                            Qe || tt({});
                            var r = m(e), o = m(t);
                            return mt(r, o, n);
                        }, n.addHook = function(e, t) {
                            "function" == typeof t && (de[e] = de[e] || [], h(de[e], t));
                        }, n.removeHook = function(e) {
                            de[e] && d(de[e]);
                        }, n.removeHooks = function(e) {
                            de[e] && (de[e] = []);
                        }, n.removeAllHooks = function() {
                            de = {};
                        }, n;
                    }();
                }();
            },
            729: (e)=>{
                "use strict";
                var t = Object.prototype.hasOwnProperty, n = "~";
                function r() {}
                function o(e, t, n) {
                    this.fn = e, this.context = t, this.once = n || !1;
                }
                function i(e, t, r, i, a) {
                    if ("function" != typeof r) throw new TypeError("The listener must be a function");
                    var s = new o(r, i || e, a), c = n ? n + t : t;
                    return e._events[c] ? e._events[c].fn ? e._events[c] = [
                        e._events[c],
                        s
                    ] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e;
                }
                function a(e, t) {
                    0 == --e._eventsCount ? e._events = new r : delete e._events[t];
                }
                function s() {
                    this._events = new r, this._eventsCount = 0;
                }
                Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = !1)), s.prototype.eventNames = function() {
                    var e, r, o = [];
                    if (0 === this._eventsCount) return o;
                    for(r in e = this._events)t.call(e, r) && o.push(n ? r.slice(1) : r);
                    return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o;
                }, s.prototype.listeners = function(e) {
                    var t = n ? n + e : e, r = this._events[t];
                    if (!r) return [];
                    if (r.fn) return [
                        r.fn
                    ];
                    for(var o = 0, i = r.length, a = new Array(i); o < i; o++)a[o] = r[o].fn;
                    return a;
                }, s.prototype.listenerCount = function(e) {
                    var t = n ? n + e : e, r = this._events[t];
                    return r ? r.fn ? 1 : r.length : 0;
                }, s.prototype.emit = function(e, t, r, o, i, a) {
                    var s = n ? n + e : e;
                    if (!this._events[s]) return !1;
                    var c, l, u = this._events[s], p = arguments.length;
                    if (u.fn) {
                        switch(u.once && this.removeListener(e, u.fn, void 0, !0), p){
                            case 1:
                                return u.fn.call(u.context), !0;
                            case 2:
                                return u.fn.call(u.context, t), !0;
                            case 3:
                                return u.fn.call(u.context, t, r), !0;
                            case 4:
                                return u.fn.call(u.context, t, r, o), !0;
                            case 5:
                                return u.fn.call(u.context, t, r, o, i), !0;
                            case 6:
                                return u.fn.call(u.context, t, r, o, i, a), !0;
                        }
                        for(l = 1, c = new Array(p - 1); l < p; l++)c[l - 1] = arguments[l];
                        u.fn.apply(u.context, c);
                    } else {
                        var f, d = u.length;
                        for(l = 0; l < d; l++)switch(u[l].once && this.removeListener(e, u[l].fn, void 0, !0), p){
                            case 1:
                                u[l].fn.call(u[l].context);
                                break;
                            case 2:
                                u[l].fn.call(u[l].context, t);
                                break;
                            case 3:
                                u[l].fn.call(u[l].context, t, r);
                                break;
                            case 4:
                                u[l].fn.call(u[l].context, t, r, o);
                                break;
                            default:
                                if (!c) for(f = 1, c = new Array(p - 1); f < p; f++)c[f - 1] = arguments[f];
                                u[l].fn.apply(u[l].context, c);
                        }
                    }
                    return !0;
                }, s.prototype.on = function(e, t, n) {
                    return i(this, e, t, n, !1);
                }, s.prototype.once = function(e, t, n) {
                    return i(this, e, t, n, !0);
                }, s.prototype.removeListener = function(e, t, r, o) {
                    var i = n ? n + e : e;
                    if (!this._events[i]) return this;
                    if (!t) return a(this, i), this;
                    var s = this._events[i];
                    if (s.fn) s.fn !== t || o && !s.once || r && s.context !== r || a(this, i);
                    else {
                        for(var c = 0, l = [], u = s.length; c < u; c++)(s[c].fn !== t || o && !s[c].once || r && s[c].context !== r) && l.push(s[c]);
                        l.length ? this._events[i] = 1 === l.length ? l[0] : l : a(this, i);
                    }
                    return this;
                }, s.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = n ? n + e : e, this._events[t] && a(this, t)) : (this._events = new r, this._eventsCount = 0), this;
                }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, e.exports = s;
            },
            717: (e)=>{
                "function" == typeof Object.create ? e.exports = function(e, t) {
                    e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                } : e.exports = function(e, t) {
                    e.super_ = t;
                    var n = function() {};
                    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e;
                };
            },
            824: (e)=>{
                var t = 1e3, n = 60 * t, r = 60 * n, o = 24 * r;
                function i(e, t, n, r) {
                    var o = t >= 1.5 * n;
                    return Math.round(e / n) + " " + r + (o ? "s" : "");
                }
                e.exports = function(e, a) {
                    a = a || {};
                    var s, c, l = typeof e;
                    if ("string" === l && e.length > 0) return function(e) {
                        if (!((e = String(e)).length > 100)) {
                            var i = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                            if (i) {
                                var a = parseFloat(i[1]);
                                switch((i[2] || "ms").toLowerCase()){
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return 315576e5 * a;
                                    case "weeks":
                                    case "week":
                                    case "w":
                                        return 6048e5 * a;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return a * o;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return a * r;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return a * n;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return a * t;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return a;
                                    default:
                                        return;
                                }
                            }
                        }
                    }(e);
                    if ("number" === l && isFinite(e)) return a.long ? (s = e, (c = Math.abs(s)) >= o ? i(s, c, o, "day") : c >= r ? i(s, c, r, "hour") : c >= n ? i(s, c, n, "minute") : c >= t ? i(s, c, t, "second") : s + " ms") : function(e) {
                        var i = Math.abs(e);
                        return i >= o ? Math.round(e / o) + "d" : i >= r ? Math.round(e / r) + "h" : i >= n ? Math.round(e / n) + "m" : i >= t ? Math.round(e / t) + "s" : e + "ms";
                    }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
                };
            },
            520: (e, t, n)=>{
                "use strict";
                var r = n(155), o = "win32" === r.platform, i = n(539);
                function a(e, t) {
                    for(var n = [], r = 0; r < e.length; r++){
                        var o = e[r];
                        o && "." !== o && (".." === o ? n.length && ".." !== n[n.length - 1] ? n.pop() : t && n.push("..") : n.push(o));
                    }
                    return n;
                }
                function s(e) {
                    for(var t = e.length - 1, n = 0; n <= t && !e[n]; n++);
                    for(var r = t; r >= 0 && !e[r]; r--);
                    return 0 === n && r === t ? e : n > r ? [] : e.slice(n, r + 1);
                }
                var c = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, l = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/, u = {};
                function p(e) {
                    var t = c.exec(e), n = (t[1] || "") + (t[2] || ""), r = t[3] || "", o = l.exec(r);
                    return [
                        n,
                        o[1],
                        o[2],
                        o[3]
                    ];
                }
                function f(e) {
                    var t = c.exec(e), n = t[1] || "", r = !!n && ":" !== n[1];
                    return {
                        device: n,
                        isUnc: r,
                        isAbsolute: r || !!t[2],
                        tail: t[3]
                    };
                }
                function d(e) {
                    return "\\\\" + e.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
                }
                u.resolve = function() {
                    for(var e = "", t = "", n = !1, o = arguments.length - 1; o >= -1; o--){
                        var s;
                        if (o >= 0 ? s = arguments[o] : e ? (s = r.env["=" + e]) && s.substr(0, 3).toLowerCase() === e.toLowerCase() + "\\" || (s = e + "\\") : s = r.cwd(), !i.isString(s)) throw new TypeError("Arguments to path.resolve must be strings");
                        if (s) {
                            var c = f(s), l = c.device, u = c.isUnc, p = c.isAbsolute, h = c.tail;
                            if ((!l || !e || l.toLowerCase() === e.toLowerCase()) && (e || (e = l), n || (t = h + "\\" + t, n = p), e && n)) break;
                        }
                    }
                    return u && (e = d(e)), e + (n ? "\\" : "") + (t = a(t.split(/[\\\/]+/), !n).join("\\")) || ".";
                }, u.normalize = function(e) {
                    var t = f(e), n = t.device, r = t.isUnc, o = t.isAbsolute, i = t.tail, s = /[\\\/]$/.test(i);
                    return (i = a(i.split(/[\\\/]+/), !o).join("\\")) || o || (i = "."), i && s && (i += "\\"), r && (n = d(n)), n + (o ? "\\" : "") + i;
                }, u.isAbsolute = function(e) {
                    return f(e).isAbsolute;
                }, u.join = function() {
                    for(var e = [], t = 0; t < arguments.length; t++){
                        var n = arguments[t];
                        if (!i.isString(n)) throw new TypeError("Arguments to path.join must be strings");
                        n && e.push(n);
                    }
                    var r = e.join("\\");
                    return /^[\\\/]{2}[^\\\/]/.test(e[0]) || (r = r.replace(/^[\\\/]{2,}/, "\\")), u.normalize(r);
                }, u.relative = function(e, t) {
                    e = u.resolve(e), t = u.resolve(t);
                    for(var n = e.toLowerCase(), r = t.toLowerCase(), o = s(t.split("\\")), i = s(n.split("\\")), a = s(r.split("\\")), c = Math.min(i.length, a.length), l = c, p = 0; p < c; p++)if (i[p] !== a[p]) {
                        l = p;
                        break;
                    }
                    if (0 == l) return t;
                    var f = [];
                    for(p = l; p < i.length; p++)f.push("..");
                    return (f = f.concat(o.slice(l))).join("\\");
                }, u._makeLong = function(e) {
                    if (!i.isString(e)) return e;
                    if (!e) return "";
                    var t = u.resolve(e);
                    return /^[a-zA-Z]\:\\/.test(t) ? "\\\\?\\" + t : /^\\\\[^?.]/.test(t) ? "\\\\?\\UNC\\" + t.substring(2) : e;
                }, u.dirname = function(e) {
                    var t = p(e), n = t[0], r = t[1];
                    return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
                }, u.basename = function(e, t) {
                    var n = p(e)[2];
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
                }, u.extname = function(e) {
                    return p(e)[3];
                }, u.format = function(e) {
                    if (!i.isObject(e)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
                    var t = e.root || "";
                    if (!i.isString(t)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
                    var n = e.dir, r = e.base || "";
                    return n ? n[n.length - 1] === u.sep ? n + r : n + u.sep + r : r;
                }, u.parse = function(e) {
                    if (!i.isString(e)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
                    var t = p(e);
                    if (!t || 4 !== t.length) throw new TypeError("Invalid path '" + e + "'");
                    return {
                        root: t[0],
                        dir: t[0] + t[1].slice(0, -1),
                        base: t[2],
                        ext: t[3],
                        name: t[2].slice(0, t[2].length - t[3].length)
                    };
                }, u.sep = "\\", u.delimiter = ";";
                var h = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, m = {};
                function g(e) {
                    return h.exec(e).slice(1);
                }
                m.resolve = function() {
                    for(var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--){
                        var o = n >= 0 ? arguments[n] : r.cwd();
                        if (!i.isString(o)) throw new TypeError("Arguments to path.resolve must be strings");
                        o && (e = o + "/" + e, t = "/" === o[0]);
                    }
                    return (t ? "/" : "") + (e = a(e.split("/"), !t).join("/")) || ".";
                }, m.normalize = function(e) {
                    var t = m.isAbsolute(e), n = e && "/" === e[e.length - 1];
                    return (e = a(e.split("/"), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e;
                }, m.isAbsolute = function(e) {
                    return "/" === e.charAt(0);
                }, m.join = function() {
                    for(var e = "", t = 0; t < arguments.length; t++){
                        var n = arguments[t];
                        if (!i.isString(n)) throw new TypeError("Arguments to path.join must be strings");
                        n && (e += e ? "/" + n : n);
                    }
                    return m.normalize(e);
                }, m.relative = function(e, t) {
                    e = m.resolve(e).substr(1), t = m.resolve(t).substr(1);
                    for(var n = s(e.split("/")), r = s(t.split("/")), o = Math.min(n.length, r.length), i = o, a = 0; a < o; a++)if (n[a] !== r[a]) {
                        i = a;
                        break;
                    }
                    var c = [];
                    for(a = i; a < n.length; a++)c.push("..");
                    return (c = c.concat(r.slice(i))).join("/");
                }, m._makeLong = function(e) {
                    return e;
                }, m.dirname = function(e) {
                    var t = g(e), n = t[0], r = t[1];
                    return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
                }, m.basename = function(e, t) {
                    var n = g(e)[2];
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
                }, m.extname = function(e) {
                    return g(e)[3];
                }, m.format = function(e) {
                    if (!i.isObject(e)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e);
                    var t = e.root || "";
                    if (!i.isString(t)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e.root);
                    return (e.dir ? e.dir + m.sep : "") + (e.base || "");
                }, m.parse = function(e) {
                    if (!i.isString(e)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
                    var t = g(e);
                    if (!t || 4 !== t.length) throw new TypeError("Invalid path '" + e + "'");
                    return t[1] = t[1] || "", t[2] = t[2] || "", t[3] = t[3] || "", {
                        root: t[0],
                        dir: t[0] + t[1].slice(0, -1),
                        base: t[2],
                        ext: t[3],
                        name: t[2].slice(0, t[2].length - t[3].length)
                    };
                }, m.sep = "/", m.delimiter = ":", e.exports = o ? u : m, e.exports.posix = m, e.exports.win32 = u;
            },
            155: (e)=>{
                var t, n, r = e.exports = {};
                function o() {
                    throw new Error("setTimeout has not been defined");
                }
                function i() {
                    throw new Error("clearTimeout has not been defined");
                }
                function a(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0);
                    } catch (n) {
                        try {
                            return t.call(null, e, 0);
                        } catch (n) {
                            return t.call(this, e, 0);
                        }
                    }
                }
                !function() {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : o;
                    } catch (e) {
                        t = o;
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : i;
                    } catch (e) {
                        n = i;
                    }
                }();
                var s, c = [], l = !1, u = -1;
                function p() {
                    l && s && (l = !1, s.length ? c = s.concat(c) : u = -1, c.length && f());
                }
                function f() {
                    if (!l) {
                        var e = a(p);
                        l = !0;
                        for(var t = c.length; t;){
                            for(s = c, c = []; ++u < t;)s && s[u].run();
                            u = -1, t = c.length;
                        }
                        s = null, l = !1, function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e);
                            } catch (t) {
                                try {
                                    return n.call(null, e);
                                } catch (t) {
                                    return n.call(this, e);
                                }
                            }
                        }(e);
                    }
                }
                function d(e, t) {
                    this.fun = e, this.array = t;
                }
                function h() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1) for(var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                    c.push(new d(e, t)), 1 !== c.length || l || a(f);
                }, d.prototype.run = function() {
                    this.fun.apply(null, this.array);
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
                    return [];
                }, r.binding = function(e) {
                    throw new Error("process.binding is not supported");
                }, r.cwd = function() {
                    return "/";
                }, r.chdir = function(e) {
                    throw new Error("process.chdir is not supported");
                }, r.umask = function() {
                    return 0;
                };
            },
            384: (e)=>{
                e.exports = function(e) {
                    return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
                };
            },
            539: (e, t, n)=>{
                var r = n(155), o = /%[sdj%]/g;
                t.format = function(e) {
                    if (!y(e)) {
                        for(var t = [], n = 0; n < arguments.length; n++)t.push(s(arguments[n]));
                        return t.join(" ");
                    }
                    n = 1;
                    for(var r = arguments, i = r.length, a = String(e).replace(o, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= i) return e;
                        switch(e){
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++]);
                                } catch (e) {
                                    return "[Circular]";
                                }
                            default:
                                return e;
                        }
                    }), c = r[n]; n < i; c = r[++n])m(c) || !_(c) ? a += " " + c : a += " " + s(c);
                    return a;
                }, t.deprecate = function(e, o) {
                    if (v(n.g.process)) return function() {
                        return t.deprecate(e, o).apply(this, arguments);
                    };
                    if (!0 === r.noDeprecation) return e;
                    var i = !1;
                    return function() {
                        if (!i) {
                            if (r.throwDeprecation) throw new Error(o);
                            r.traceDeprecation ? console.trace(o) : console.error(o), i = !0;
                        }
                        return e.apply(this, arguments);
                    };
                };
                var i, a = {};
                function s(e, n) {
                    var r = {
                        seen: [],
                        stylize: l
                    };
                    return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), h(n) ? r.showHidden = n : n && t._extend(r, n), v(r.showHidden) && (r.showHidden = !1), v(r.depth) && (r.depth = 2), v(r.colors) && (r.colors = !1), v(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = c), u(r, e, r.depth);
                }
                function c(e, t) {
                    var n = s.styles[t];
                    return n ? "\x1b[" + s.colors[n][0] + "m" + e + "\x1b[" + s.colors[n][1] + "m" : e;
                }
                function l(e, t) {
                    return e;
                }
                function u(e, n, r) {
                    if (e.customInspect && n && C(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                        var o = n.inspect(r, e);
                        return y(o) || (o = u(e, o, r)), o;
                    }
                    var i = function(e, t) {
                        if (v(t)) return e.stylize("undefined", "undefined");
                        if (y(t)) {
                            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                            return e.stylize(n, "string");
                        }
                        return g(t) ? e.stylize("" + t, "number") : h(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0;
                    }(e, n);
                    if (i) return i;
                    var a = Object.keys(n), s = function(e) {
                        var t = {};
                        return e.forEach(function(e, n) {
                            t[e] = !0;
                        }), t;
                    }(a);
                    if (e.showHidden && (a = Object.getOwnPropertyNames(n)), x(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return p(n);
                    if (0 === a.length) {
                        if (C(n)) {
                            var c = n.name ? ": " + n.name : "";
                            return e.stylize("[Function" + c + "]", "special");
                        }
                        if (b(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                        if (w(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                        if (x(n)) return p(n);
                    }
                    var l, _ = "", S = !1, O = [
                        "{",
                        "}"
                    ];
                    return d(n) && (S = !0, O = [
                        "[",
                        "]"
                    ]), C(n) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]"), b(n) && (_ = " " + RegExp.prototype.toString.call(n)), w(n) && (_ = " " + Date.prototype.toUTCString.call(n)), x(n) && (_ = " " + p(n)), 0 !== a.length || S && 0 != n.length ? r < 0 ? b(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), l = S ? function(e, t, n, r, o) {
                        for(var i = [], a = 0, s = t.length; a < s; ++a)T(t, String(a)) ? i.push(f(e, t, n, r, String(a), !0)) : i.push("");
                        return o.forEach(function(o) {
                            o.match(/^\d+$/) || i.push(f(e, t, n, r, o, !0));
                        }), i;
                    }(e, n, r, s, a) : a.map(function(t) {
                        return f(e, n, r, s, t, S);
                    }), e.seen.pop(), function(e, t, n) {
                        return e.reduce(function(e, t) {
                            return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                        }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
                    }(l, _, O)) : O[0] + _ + O[1];
                }
                function p(e) {
                    return "[" + Error.prototype.toString.call(e) + "]";
                }
                function f(e, t, n, r, o, i) {
                    var a, s, c;
                    if ((c = Object.getOwnPropertyDescriptor(t, o) || {
                        value: t[o]
                    }).get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), T(r, o) || (a = "[" + o + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = m(n) ? u(e, c.value, null) : u(e, c.value, n - 1)).indexOf("\n") > -1 && (s = i ? s.split("\n").map(function(e) {
                        return "  " + e;
                    }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                        return "   " + e;
                    }).join("\n")) : s = e.stylize("[Circular]", "special")), v(a)) {
                        if (i && o.match(/^\d+$/)) return s;
                        (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"));
                    }
                    return a + ": " + s;
                }
                function d(e) {
                    return Array.isArray(e);
                }
                function h(e) {
                    return "boolean" == typeof e;
                }
                function m(e) {
                    return null === e;
                }
                function g(e) {
                    return "number" == typeof e;
                }
                function y(e) {
                    return "string" == typeof e;
                }
                function v(e) {
                    return void 0 === e;
                }
                function b(e) {
                    return _(e) && "[object RegExp]" === S(e);
                }
                function _(e) {
                    return "object" == typeof e && null !== e;
                }
                function w(e) {
                    return _(e) && "[object Date]" === S(e);
                }
                function x(e) {
                    return _(e) && ("[object Error]" === S(e) || e instanceof Error);
                }
                function C(e) {
                    return "function" == typeof e;
                }
                function S(e) {
                    return Object.prototype.toString.call(e);
                }
                function O(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10);
                }
                t.debuglog = function(e) {
                    if (v(i) && (i = r.env.NODE_DEBUG || ""), e = e.toUpperCase(), !a[e]) {
                        if (new RegExp("\\b" + e + "\\b", "i").test(i)) {
                            var n = r.pid;
                            a[e] = function() {
                                var r = t.format.apply(t, arguments);
                                console.error("%s %d: %s", e, n, r);
                            };
                        } else a[e] = function() {};
                    }
                    return a[e];
                }, t.inspect = s, s.colors = {
                    bold: [
                        1,
                        22
                    ],
                    italic: [
                        3,
                        23
                    ],
                    underline: [
                        4,
                        24
                    ],
                    inverse: [
                        7,
                        27
                    ],
                    white: [
                        37,
                        39
                    ],
                    grey: [
                        90,
                        39
                    ],
                    black: [
                        30,
                        39
                    ],
                    blue: [
                        34,
                        39
                    ],
                    cyan: [
                        36,
                        39
                    ],
                    green: [
                        32,
                        39
                    ],
                    magenta: [
                        35,
                        39
                    ],
                    red: [
                        31,
                        39
                    ],
                    yellow: [
                        33,
                        39
                    ]
                }, s.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                }, t.isArray = d, t.isBoolean = h, t.isNull = m, t.isNullOrUndefined = function(e) {
                    return null == e;
                }, t.isNumber = g, t.isString = y, t.isSymbol = function(e) {
                    return "symbol" == typeof e;
                }, t.isUndefined = v, t.isRegExp = b, t.isObject = _, t.isDate = w, t.isError = x, t.isFunction = C, t.isPrimitive = function(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
                }, t.isBuffer = n(384);
                var j = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ];
                function A() {
                    var e = new Date, t = [
                        O(e.getHours()),
                        O(e.getMinutes()),
                        O(e.getSeconds())
                    ].join(":");
                    return [
                        e.getDate(),
                        j[e.getMonth()],
                        t
                    ].join(" ");
                }
                function T(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }
                t.log = function() {
                    console.log("%s - %s", A(), t.format.apply(t, arguments));
                }, t.inherits = n(717), t._extend = function(e, t) {
                    if (!t || !_(t)) return e;
                    for(var n = Object.keys(t), r = n.length; r--;)e[n[r]] = t[n[r]];
                    return e;
                };
            }
        }, t = {};
        function n(r) {
            var o = t[r];
            if (void 0 !== o) return o.exports;
            var i = t[r] = {
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.exports;
        }
        n.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return n.d(t, {
                a: t
            }), t;
        }, n.d = (e, t)=>{
            for(var r in t)n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), n.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t), n.r = (e)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        };
        var r = {};
        return (()=>{
            "use strict";
            n.r(r), n.d(r, {
                LSPluginUser: ()=>Rt,
                setupPluginUserInstance: ()=>zt
            });
            var e = n(520);
            n(856);
            const t = function(e, t) {
                return e === t || e != e && t != t;
            }, o = function(e, n) {
                for(var r = e.length; r--;)if (t(e[r][0], n)) return r;
                return -1;
            };
            var i = Array.prototype.splice;
            function a(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for(this.clear(); ++t < n;){
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            a.prototype.clear = function() {
                this.__data__ = [], this.size = 0;
            }, a.prototype.delete = function(e) {
                var t = this.__data__, n = o(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0));
            }, a.prototype.get = function(e) {
                var t = this.__data__, n = o(t, e);
                return n < 0 ? void 0 : t[n][1];
            }, a.prototype.has = function(e) {
                return o(this.__data__, e) > -1;
            }, a.prototype.set = function(e, t) {
                var n = this.__data__, r = o(n, e);
                return r < 0 ? (++this.size, n.push([
                    e,
                    t
                ])) : n[r][1] = t, this;
            };
            const s = a, c = "object" == typeof global && global && global.Object === Object && global;
            var l = "object" == typeof self && self && self.Object === Object && self;
            const u = c || l || Function("return this")(), p = u.Symbol;
            var f = Object.prototype, d = f.hasOwnProperty, h = f.toString, m = p ? p.toStringTag : void 0;
            var g = Object.prototype.toString;
            var y = p ? p.toStringTag : void 0;
            const v = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : y && y in Object(e) ? function(e) {
                    var t = d.call(e, m), n = e[m];
                    try {
                        e[m] = void 0;
                        var r = !0;
                    } catch (e) {}
                    var o = h.call(e);
                    return r && (t ? e[m] = n : delete e[m]), o;
                }(e) : function(e) {
                    return g.call(e);
                }(e);
            }, b = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
            }, _ = function(e) {
                if (!b(e)) return !1;
                var t = v(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
            }, w = u["__core-js_shared__"];
            var x, C = (x = /[^.]+$/.exec(w && w.keys && w.keys.IE_PROTO || "")) ? "Symbol(src)_1." + x : "";
            var S = Function.prototype.toString;
            var O = /^\[object .+?Constructor\]$/, j = Function.prototype, A = Object.prototype, T = j.toString, E = A.hasOwnProperty, k = RegExp("^" + T.call(E).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            const F = function(e) {
                var t;
                return !(!b(e) || (t = e, C && C in t)) && (_(e) ? k : O).test(function(e) {
                    if (null != e) {
                        try {
                            return S.call(e);
                        } catch (e) {}
                        try {
                            return e + "";
                        } catch (e) {}
                    }
                    return "";
                }(e));
            }, L = function(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t];
                }(e, t);
                return F(n) ? n : void 0;
            }, I = L(u, "Map"), M = L(Object, "create");
            var N = Object.prototype.hasOwnProperty;
            var R = Object.prototype.hasOwnProperty;
            function z(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for(this.clear(); ++t < n;){
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            z.prototype.clear = function() {
                this.__data__ = M ? M(null) : {}, this.size = 0;
            }, z.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t;
            }, z.prototype.get = function(e) {
                var t = this.__data__;
                if (M) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return N.call(t, e) ? t[e] : void 0;
            }, z.prototype.has = function(e) {
                var t = this.__data__;
                return M ? void 0 !== t[e] : R.call(t, e);
            }, z.prototype.set = function(e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = M && void 0 === t ? "__lodash_hash_undefined__" : t, this;
            };
            const D = z, P = function(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map;
            };
            function U(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for(this.clear(); ++t < n;){
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            U.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new D,
                    map: new (I || s),
                    string: new D
                };
            }, U.prototype.delete = function(e) {
                var t = P(this, e).delete(e);
                return this.size -= t ? 1 : 0, t;
            }, U.prototype.get = function(e) {
                return P(this, e).get(e);
            }, U.prototype.has = function(e) {
                return P(this, e).has(e);
            }, U.prototype.set = function(e, t) {
                var n = P(this, e), r = n.size;
                return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
            };
            const $ = U;
            function H(e) {
                var t = this.__data__ = new s(e);
                this.size = t.size;
            }
            H.prototype.clear = function() {
                this.__data__ = new s, this.size = 0;
            }, H.prototype.delete = function(e) {
                var t = this.__data__, n = t.delete(e);
                return this.size = t.size, n;
            }, H.prototype.get = function(e) {
                return this.__data__.get(e);
            }, H.prototype.has = function(e) {
                return this.__data__.has(e);
            }, H.prototype.set = function(e, t) {
                var n = this.__data__;
                if (n instanceof s) {
                    var r = n.__data__;
                    if (!I || r.length < 199) return r.push([
                        e,
                        t
                    ]), this.size = ++n.size, this;
                    n = this.__data__ = new $(r);
                }
                return n.set(e, t), this.size = n.size, this;
            };
            const B = H, W = function() {
                try {
                    var e = L(Object, "defineProperty");
                    return e({}, "", {}), e;
                } catch (e) {}
            }(), G = function(e, t, n) {
                "__proto__" == t && W ? W(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n;
            }, J = function(e, n, r) {
                (void 0 !== r && !t(e[n], r) || void 0 === r && !(n in e)) && G(e, n, r);
            }, q = function(e, t, n) {
                for(var r = -1, o = Object(e), i = n(e), a = i.length; a--;){
                    var s = i[++r];
                    if (!1 === t(o[s], s, o)) break;
                }
                return e;
            };
            var Z = exports && !exports.nodeType && exports, V = Z && true && module && !module.nodeType && module, K = V && V.exports === Z ? u.Buffer : void 0, Y = K ? K.allocUnsafe : void 0;
            const X = u.Uint8Array, Q = function(e, t) {
                var n, r, o = t ? (n = e.buffer, r = new n.constructor(n.byteLength), new X(r).set(new X(n)), r) : e.buffer;
                return new e.constructor(o, e.byteOffset, e.length);
            };
            var ee = Object.create;
            const te = function() {
                function e() {}
                return function(t) {
                    if (!b(t)) return {};
                    if (ee) return ee(t);
                    e.prototype = t;
                    var n = new e;
                    return e.prototype = void 0, n;
                };
            }(), ne = (re = Object.getPrototypeOf, oe = Object, function(e) {
                return re(oe(e));
            });
            var re, oe, ie = Object.prototype;
            const ae = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || ie);
            }, se = function(e) {
                return null != e && "object" == typeof e;
            }, ce = function(e) {
                return se(e) && "[object Arguments]" == v(e);
            };
            var le = Object.prototype, ue = le.hasOwnProperty, pe = le.propertyIsEnumerable;
            const fe = ce(function() {
                return arguments;
            }()) ? ce : function(e) {
                return se(e) && ue.call(e, "callee") && !pe.call(e, "callee");
            }, de = Array.isArray, he = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
            }, me = function(e) {
                return null != e && he(e.length) && !_(e);
            };
            var ge = exports && !exports.nodeType && exports, ye = ge && true && module && !module.nodeType && module, ve = ye && ye.exports === ge ? u.Buffer : void 0;
            const be = (ve ? ve.isBuffer : void 0) || function() {
                return !1;
            };
            var _e = Function.prototype, we = Object.prototype, xe = _e.toString, Ce = we.hasOwnProperty, Se = xe.call(Object);
            var Oe = {};
            Oe["[object Float32Array]"] = Oe["[object Float64Array]"] = Oe["[object Int8Array]"] = Oe["[object Int16Array]"] = Oe["[object Int32Array]"] = Oe["[object Uint8Array]"] = Oe["[object Uint8ClampedArray]"] = Oe["[object Uint16Array]"] = Oe["[object Uint32Array]"] = !0, Oe["[object Arguments]"] = Oe["[object Array]"] = Oe["[object ArrayBuffer]"] = Oe["[object Boolean]"] = Oe["[object DataView]"] = Oe["[object Date]"] = Oe["[object Error]"] = Oe["[object Function]"] = Oe["[object Map]"] = Oe["[object Number]"] = Oe["[object Object]"] = Oe["[object RegExp]"] = Oe["[object Set]"] = Oe["[object String]"] = Oe["[object WeakMap]"] = !1;
            var je = exports && !exports.nodeType && exports, Ae = je && true && module && !module.nodeType && module, Te = Ae && Ae.exports === je && c.process, Ee = function() {
                try {
                    return Ae && Ae.require && Ae.require("util").types || Te && Te.binding && Te.binding("util");
                } catch (e) {}
            }(), ke = Ee && Ee.isTypedArray;
            const Fe = ke ? function(e) {
                return function(t) {
                    return e(t);
                };
            }(ke) : function(e) {
                return se(e) && he(e.length) && !!Oe[v(e)];
            }, Le = function(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
            };
            var Ie = Object.prototype.hasOwnProperty;
            const Me = function(e, n, r) {
                var o = e[n];
                Ie.call(e, n) && t(o, r) && (void 0 !== r || n in e) || G(e, n, r);
            };
            var Ne = /^(?:0|[1-9]\d*)$/;
            const Re = function(e, t) {
                var n = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Ne.test(e)) && e > -1 && e % 1 == 0 && e < t;
            };
            var ze = Object.prototype.hasOwnProperty;
            const De = function(e, t) {
                var n = de(e), r = !n && fe(e), o = !n && !r && be(e), i = !n && !r && !o && Fe(e), a = n || r || o || i, s = a ? function(e, t) {
                    for(var n = -1, r = Array(e); ++n < e;)r[n] = t(n);
                    return r;
                }(e.length, String) : [], c = s.length;
                for(var l in e)!t && !ze.call(e, l) || a && ("length" == l || o && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Re(l, c)) || s.push(l);
                return s;
            };
            var Pe = Object.prototype.hasOwnProperty;
            const Ue = function(e) {
                if (!b(e)) return function(e) {
                    var t = [];
                    if (null != e) for(var n in Object(e))t.push(n);
                    return t;
                }(e);
                var t = ae(e), n = [];
                for(var r in e)("constructor" != r || !t && Pe.call(e, r)) && n.push(r);
                return n;
            }, $e = function(e) {
                return me(e) ? De(e, !0) : Ue(e);
            }, He = function(e) {
                return function(e, t, n, r) {
                    var o = !n;
                    n || (n = {});
                    for(var i = -1, a = t.length; ++i < a;){
                        var s = t[i], c = r ? r(n[s], e[s], s, n, e) : void 0;
                        void 0 === c && (c = e[s]), o ? G(n, s, c) : Me(n, s, c);
                    }
                    return n;
                }(e, $e(e));
            }, Be = function(e, t, n, r, o, i, a) {
                var s, c = Le(e, n), l = Le(t, n), u = a.get(l);
                if (u) J(e, n, u);
                else {
                    var p = i ? i(c, l, n + "", e, t, a) : void 0, f = void 0 === p;
                    if (f) {
                        var d = de(l), h = !d && be(l), m = !d && !h && Fe(l);
                        p = l, d || h || m ? de(c) ? p = c : se(s = c) && me(s) ? p = function(e, t) {
                            var n = -1, r = e.length;
                            for(t || (t = Array(r)); ++n < r;)t[n] = e[n];
                            return t;
                        }(c) : h ? (f = !1, p = function(e, t) {
                            if (t) return e.slice();
                            var n = e.length, r = Y ? Y(n) : new e.constructor(n);
                            return e.copy(r), r;
                        }(l, !0)) : m ? (f = !1, p = Q(l, !0)) : p = [] : function(e) {
                            if (!se(e) || "[object Object]" != v(e)) return !1;
                            var t = ne(e);
                            if (null === t) return !0;
                            var n = Ce.call(t, "constructor") && t.constructor;
                            return "function" == typeof n && n instanceof n && xe.call(n) == Se;
                        }(l) || fe(l) ? (p = c, fe(c) ? p = He(c) : b(c) && !_(c) || (p = function(e) {
                            return "function" != typeof e.constructor || ae(e) ? {} : te(ne(e));
                        }(l))) : f = !1;
                    }
                    f && (a.set(l, p), o(p, l, r, i, a), a.delete(l)), J(e, n, p);
                }
            }, We = function e(t, n, r, o, i) {
                t !== n && q(n, function(a, s) {
                    if (i || (i = new B), b(a)) Be(t, n, s, r, e, o, i);
                    else {
                        var c = o ? o(Le(t, s), a, s + "", t, n, i) : void 0;
                        void 0 === c && (c = a), J(t, s, c);
                    }
                }, $e);
            }, Ge = function(e) {
                return e;
            }, Je = function(e, t, n) {
                switch(n.length){
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2]);
                }
                return e.apply(t, n);
            };
            var qe = Math.max;
            const Ze = W ? function(e, t) {
                var n;
                return W(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: (n = t, function() {
                        return n;
                    }),
                    writable: !0
                });
            } : Ge;
            var Ve = Date.now;
            const Ke = function(e) {
                var t = 0, n = 0;
                return function() {
                    var r = Ve(), o = 16 - (r - n);
                    if (n = r, o > 0) {
                        if (++t >= 800) return arguments[0];
                    } else t = 0;
                    return e.apply(void 0, arguments);
                };
            }(Ze), Ye = (Qe = function(e, t, n) {
                We(e, t, n);
            }, function(e, t) {
                return Ke(function(e, t, n) {
                    return t = qe(void 0 === t ? e.length - 1 : t, 0), function() {
                        for(var r = arguments, o = -1, i = qe(r.length - t, 0), a = Array(i); ++o < i;)a[o] = r[t + o];
                        o = -1;
                        for(var s = Array(t + 1); ++o < t;)s[o] = r[o];
                        return s[t] = n(a), Je(e, this, s);
                    };
                }(e, t, Ge), e + "");
            }(function(e, n) {
                var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
                for(i = Qe.length > 3 && "function" == typeof i ? (o--, i) : void 0, a && function(e, n, r) {
                    if (!b(r)) return !1;
                    var o = typeof n;
                    return !!("number" == o ? me(r) && Re(n, r.length) : "string" == o && (n in r)) && t(r[n], e);
                }(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), e = Object(e); ++r < o;){
                    var s = n[r];
                    s && Qe(e, s, r);
                }
                return e;
            })), Xe = "win32" === navigator.platform.toLowerCase() ? e.win32 : e.posix;
            var Qe;
            const et = Ye;
            function tt(e, t) {
                let n, r, o = !1;
                const i = (t)=>(n)=>{
                        e && clearTimeout(e), t(n), o = !0;
                    }, a = new Promise((o, a)=>{
                    n = i(o), r = i(a), e && (e = setTimeout(()=>r(new Error(`[deferred timeout] ${t}`)), e));
                });
                return {
                    created: Date.now(),
                    setTag: (e)=>t = e,
                    resolve: n,
                    reject: r,
                    promise: a,
                    get settled () {
                        return o;
                    }
                };
            }
            new Map;
            var nt = n(227), rt = n.n(nt);
            const ot = "application/x-postmate-v1+json";
            let it = 0;
            const at = {
                handshake: 1,
                "handshake-reply": 1,
                call: 1,
                emit: 1,
                reply: 1,
                request: 1
            }, st = (e, t)=>!("string" == typeof t && e.origin !== t || !e.data || "object" == typeof e.data && !("postmate" in e.data) || e.data.type !== ot || !at[e.data.postmate]);
            class ct {
                parent;
                frame;
                child;
                events = {};
                childOrigin;
                listener;
                constructor(e){
                    this.parent = e.parent, this.frame = e.frame, this.child = e.child, this.childOrigin = e.childOrigin, this.listener = (e)=>{
                        if (!st(e, this.childOrigin)) return !1;
                        const { data: t, name: n } = ((e || {}).data || {}).value || {};
                        "emit" === e.data.postmate && n in this.events && this.events[n].forEach((e)=>{
                            e.call(this, t);
                        });
                    }, this.parent.addEventListener("message", this.listener, !1);
                }
                get(e) {
                    return new Promise((t)=>{
                        const n = ++it, r = (e)=>{
                            e.data.uid === n && "reply" === e.data.postmate && (this.parent.removeEventListener("message", r, !1), t(e.data.value));
                        };
                        this.parent.addEventListener("message", r, !1), this.child.postMessage({
                            postmate: "request",
                            type: ot,
                            property: e,
                            uid: n
                        }, this.childOrigin);
                    });
                }
                call(e, t) {
                    this.child.postMessage({
                        postmate: "call",
                        type: ot,
                        property: e,
                        data: t
                    }, this.childOrigin);
                }
                on(e, t) {
                    this.events[e] || (this.events[e] = []), this.events[e].push(t);
                }
                destroy() {
                    window.removeEventListener("message", this.listener, !1), this.frame.parentNode.removeChild(this.frame);
                }
            }
            class lt {
                model;
                parent;
                parentOrigin;
                child;
                constructor(e){
                    this.model = e.model, this.parent = e.parent, this.parentOrigin = e.parentOrigin, this.child = e.child, this.child.addEventListener("message", (e)=>{
                        if (!st(e, this.parentOrigin)) return;
                        const { property: t, uid: n, data: r } = e.data;
                        "call" !== e.data.postmate ? ((e, t)=>{
                            const n = "function" == typeof e[t] ? e[t]() : e[t];
                            return Promise.resolve(n);
                        })(this.model, t).then((r)=>{
                            e.source.postMessage({
                                property: t,
                                postmate: "reply",
                                type: ot,
                                uid: n,
                                value: r
                            }, e.origin);
                        }) : t in this.model && "function" == typeof this.model[t] && this.model[t](r);
                    });
                }
                emit(e, t) {
                    this.parent.postMessage({
                        postmate: "emit",
                        type: ot,
                        value: {
                            name: e,
                            data: t
                        }
                    }, this.parentOrigin);
                }
            }
            class ut {
                static debug = !1;
                container;
                parent;
                frame;
                child;
                childOrigin;
                url;
                model;
                static Model;
                constructor(e){
                    this.container = e.container, this.url = e.url, this.parent = window, this.frame = document.createElement("iframe"), e.id && (this.frame.id = e.id), e.name && (this.frame.name = e.name), this.frame.classList.add.apply(this.frame.classList, e.classListArray || []), this.container.appendChild(this.frame), this.child = this.frame.contentWindow, this.model = e.model || {};
                }
                sendHandshake(e) {
                    const t = ((e)=>{
                        const t = document.createElement("a");
                        t.href = e;
                        const n = t.protocol.length > 4 ? t.protocol : window.location.protocol, r = t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host;
                        return t.origin || `${n}//${r}`;
                    })(e = e || this.url);
                    let n, r = 0;
                    return new Promise((o, i)=>{
                        const a = (e)=>!!st(e, t) && ("handshake-reply" === e.data.postmate ? (clearInterval(n), this.parent.removeEventListener("message", a, !1), this.childOrigin = e.origin, o(new ct(this))) : i("Failed handshake"));
                        this.parent.addEventListener("message", a, !1);
                        const s = ()=>{
                            r++, this.child.postMessage({
                                postmate: "handshake",
                                type: ot,
                                model: this.model
                            }, t), 5 === r && clearInterval(n);
                        };
                        this.frame.addEventListener("load", ()=>{
                            s(), n = setInterval(s, 500);
                        }), this.frame.src = e;
                    });
                }
            }
            class pt {
                child;
                model;
                parent;
                parentOrigin;
                constructor(e){
                    this.child = window, this.model = e, this.parent = this.child.parent;
                }
                sendHandshakeReply() {
                    return new Promise((e, t)=>{
                        const n = (r)=>{
                            if (r.data.postmate) {
                                if ("handshake" === r.data.postmate) {
                                    this.child.removeEventListener("message", n, !1), r.source.postMessage({
                                        postmate: "handshake-reply",
                                        type: ot
                                    }, r.origin), this.parentOrigin = r.origin;
                                    const t = r.data.model;
                                    return t && Object.keys(t).forEach((e)=>{
                                        this.model[e] = t[e];
                                    }), e(new lt(this));
                                }
                                return t("Handshake Reply Failed");
                            }
                        };
                        this.child.addEventListener("message", n, !1);
                    });
                }
            }
            var ft = n(729), dt = n.n(ft);
            const { importHTML: ht, createSandboxContainer: mt } = window.QSandbox || {};
            function gt(e, t) {
                return e.startsWith("http") ? fetch(e, t) : (e = e.replace("file://", ""), new Promise(async (t, n)=>{
                    try {
                        const n = await window.apis.doAction([
                            "readFile",
                            e
                        ]);
                        t({
                            text: ()=>n
                        });
                    } catch (e) {
                        console.error(e), n(e);
                    }
                }));
            }
            class yt extends dt() {
                _pluginLocal;
                _frame;
                _root;
                _loaded = !1;
                _unmountFns = [];
                constructor(e){
                    super(), this._pluginLocal = e, e._dispose(()=>{
                        this._unmount();
                    });
                }
                async load() {
                    const { name: e, entry: t } = this._pluginLocal.options;
                    if (this.loaded || !t) return;
                    const { template: n, execScripts: r } = await ht(t, {
                        fetch: gt
                    });
                    this._mount(n, document.body);
                    const o = mt(e, {
                        elementGetter: ()=>this._root?.firstChild
                    }).instance.proxy;
                    o.__shadow_mode__ = !0, o.LSPluginLocal = this._pluginLocal, o.LSPluginShadow = this, o.LSPluginUser = o.logseq = new Rt(this._pluginLocal.toJSON(), this._pluginLocal.caller);
                    const i = await r(o, !0);
                    this._unmountFns.push(i.unmount), this._loaded = !0;
                }
                _mount(e, t) {
                    const n = this._frame = document.createElement("div");
                    n.classList.add("lsp-shadow-sandbox"), n.id = this._pluginLocal.id, this._root = n.attachShadow({
                        mode: "open"
                    }), this._root.innerHTML = `<div>${e}</div>`, t.appendChild(n), this.emit("mounted");
                }
                _unmount() {
                    for (const e of this._unmountFns)e && e.call(null);
                }
                destroy() {
                    this.frame?.parentNode?.removeChild(this.frame);
                }
                get loaded() {
                    return this._loaded;
                }
                get document() {
                    return this._root?.firstChild;
                }
                get frame() {
                    return this._frame;
                }
            }
            const vt = rt()("LSPlugin:caller"), bt = "#await#response#", _t = "#lspmsg#error#", wt = (e)=>`#lspmsg#${e}`;
            class xt extends dt() {
                _pluginLocal;
                _connected = !1;
                _parent;
                _child;
                _shadow;
                _status;
                _userModel = {};
                _call;
                _callUserModel;
                _debugTag = "";
                constructor(e){
                    super(), this._pluginLocal = e, e && (this._debugTag = e.debugTag);
                }
                async connectToChild() {
                    if (this._connected) return;
                    const { shadow: e } = this._pluginLocal;
                    e ? await this._setupShadowSandbox() : await this._setupIframeSandbox();
                }
                async connectToParent(e = {}) {
                    if (this._connected) return;
                    const t = this, n = null != this._pluginLocal;
                    let r = 0, o = 0;
                    const i = new Map, a = tt(5e3), s = this._extendUserModel({
                        "#lspmsg#ready#": async (e)=>{
                            s[wt(e?.pid)] = ({ type: e, payload: n })=>{
                                vt(`[call from host (_call)] ${this._debugTag}`, e, n), t.emit(e, n);
                            }, await a.resolve();
                        },
                        "#lspmsg#beforeunload#": async (e)=>{
                            const n = tt(1e4);
                            t.emit("beforeunload", Object.assign({
                                actor: n
                            }, e)), await n.promise;
                        },
                        "#lspmsg#settings#": async ({ type: e, payload: n })=>{
                            t.emit("settings:changed", n);
                        },
                        "#lspmsg#": async ({ ns: e, type: n, payload: r })=>{
                            vt(`[call from host (async)] ${this._debugTag}`, e, n, r), e && e.startsWith("hook") ? t.emit(`${e}:${n}`, r) : t.emit(n, r);
                        },
                        "#lspmsg#reply#": ({ _sync: e, result: t })=>{
                            if (vt(`[sync reply] #${e}`, t), i.has(e)) {
                                const n = i.get(e);
                                n && (t?.hasOwnProperty(_t) ? n.reject(t[_t]) : n.resolve(t), i.delete(e));
                            }
                        },
                        ...e
                    });
                    if (n) return await a.promise, JSON.parse(JSON.stringify(this._pluginLocal?.toJSON()));
                    const c = new pt(s).sendHandshakeReply();
                    return this._status = "pending", await c.then((e)=>{
                        this._child = e, this._connected = !0, this._call = async (t, n = {}, r)=>{
                            if (r) {
                                const e = ++o;
                                i.set(e, r), n._sync = e, r.setTag(`async call #${e}`), vt("async call #", e);
                            }
                            return e.emit(wt(s.baseInfo.id), {
                                type: t,
                                payload: n
                            }), r?.promise;
                        }, this._callUserModel = async (e, t)=>{
                            try {
                                s[e](t);
                            } catch (t) {
                                vt(`[model method] #${e} not existed`);
                            }
                        }, r = setInterval(()=>{
                            if (i.size > 100) for (const [e, t] of i)t.settled && i.delete(e);
                        }, 18e5);
                    }).finally(()=>{
                        this._status = void 0;
                    }), await a.promise, s.baseInfo;
                }
                async call(e, t = {}) {
                    return this._call?.call(this, e, t);
                }
                async callAsync(e, t = {}) {
                    const n = tt(1e4);
                    return this._call?.call(this, e, t, n);
                }
                async callUserModel(e, t = {}) {
                    return this._callUserModel?.call(this, e, t);
                }
                async _setupIframeSandbox() {
                    const e = this._pluginLocal, t = e.id, n = new URL(e.options.entry);
                    n.searchParams.set("__v__", e.options.version);
                    const r = document.querySelector(`#${t}`);
                    r && r.parentElement.removeChild(r);
                    const o = document.createElement("div");
                    o.classList.add("lsp-iframe-sandbox-container"), o.id = t;
                    try {
                        const e = (await this._pluginLocal._loadLayoutsData())?.$$0;
                        if (e) {
                            o.dataset.inited_layout = "true";
                            const { width: t, height: n, left: r, top: i } = e;
                            Object.assign(o.style, {
                                width: t + "px",
                                height: n + "px",
                                left: r + "px",
                                top: i + "px"
                            });
                        }
                    } catch (e) {
                        console.error("[Restore Layout Error]", e);
                    }
                    document.body.appendChild(o);
                    let i, a = new ut({
                        id: t + "_iframe",
                        container: o,
                        url: n.href,
                        classListArray: [
                            "lsp-iframe-sandbox"
                        ],
                        model: {
                            baseInfo: JSON.parse(JSON.stringify(e.toJSON()))
                        }
                    }).sendHandshake();
                    return this._status = "pending", new Promise((t, n)=>{
                        i = setTimeout(()=>{
                            n(new Error("handshake Timeout"));
                        }, 3e3), a.then((n)=>{
                            this._parent = n, this._connected = !0, this.emit("connected"), n.on(wt(e.id), ({ type: e, payload: t })=>{
                                vt("[call from plugin] ", e, t), this._pluginLocal?.emit(e, t || {});
                            }), this._call = async (...t)=>{
                                await n.call(wt(e.id), {
                                    type: t[0],
                                    payload: Object.assign(t[1] || {}, {
                                        $$pid: e.id
                                    })
                                });
                            }, this._callUserModel = async (e, t)=>{
                                if (e.startsWith(bt)) return await n.get(e.replace(bt, ""));
                                n.call(e, t);
                            }, t(null);
                        }).catch((e)=>{
                            n(e);
                        }).finally(()=>{
                            clearTimeout(i);
                        });
                    }).catch((e)=>{
                        throw vt("[iframe sandbox] error", e), e;
                    }).finally(()=>{
                        this._status = void 0;
                    });
                }
                async _setupShadowSandbox() {
                    const e = this._pluginLocal, t = this._shadow = new yt(e);
                    try {
                        this._status = "pending", await t.load(), this._connected = !0, this.emit("connected"), this._call = async (t, n = {}, r)=>(r && (n.actor = r), this._pluginLocal?.emit(t, Object.assign(n, {
                                $$pid: e.id
                            })), r?.promise), this._callUserModel = async (...e)=>{
                            let t = e[0];
                            t?.startsWith(bt) && (t = t.replace(bt, ""));
                            const n = e[1] || {}, r = this._userModel[t];
                            "function" == typeof r && await r.call(null, n);
                        };
                    } catch (e) {
                        throw vt("[shadow sandbox] error", e), e;
                    } finally{
                        this._status = void 0;
                    }
                }
                _extendUserModel(e) {
                    return Object.assign(this._userModel, e);
                }
                _getSandboxIframeContainer() {
                    return this._parent?.frame.parentNode;
                }
                _getSandboxShadowContainer() {
                    return this._shadow?.frame.parentNode;
                }
                _getSandboxIframeRoot() {
                    return this._parent?.frame;
                }
                _getSandboxShadowRoot() {
                    return this._shadow?.frame;
                }
                set debugTag(e) {
                    this._debugTag = e;
                }
                async destroy() {
                    let e = null;
                    this._parent && (e = this._getSandboxIframeContainer(), await this._parent.destroy()), this._shadow && (e = this._getSandboxShadowContainer(), this._shadow.destroy()), e?.parentNode.removeChild(e);
                }
            }
            var Ct = function() {
                return (Ct = Object.assign || function(e) {
                    for(var t, n = 1, r = arguments.length; n < r; n++)for(var o in t = arguments[n])Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e;
                }).apply(this, arguments);
            };
            function St(e) {
                return e.toLowerCase();
            }
            Object.create, Object.create;
            var Ot = [
                /([a-z0-9])([A-Z])/g,
                /([A-Z])([A-Z][a-z])/g
            ], jt = /[^A-Z0-9]+/gi;
            function At(e, t, n) {
                return t instanceof RegExp ? e.replace(t, n) : t.reduce(function(e, t) {
                    return e.replace(t, n);
                }, e);
            }
            class Tt {
                ctx;
                constructor(e){
                    this.ctx = e;
                }
                get ctxId() {
                    return this.ctx.baseInfo.id;
                }
                setItem(e, t) {
                    return this.ctx.caller.callAsync("api:call", {
                        method: "write-plugin-storage-file",
                        args: [
                            this.ctxId,
                            e,
                            t
                        ]
                    });
                }
                getItem(e) {
                    return this.ctx.caller.callAsync("api:call", {
                        method: "read-plugin-storage-file",
                        args: [
                            this.ctxId,
                            e
                        ]
                    });
                }
                removeItem(e) {
                    return this.ctx.caller.call("api:call", {
                        method: "unlink-plugin-storage-file",
                        args: [
                            this.ctxId,
                            e
                        ]
                    });
                }
                clear() {
                    return this.ctx.caller.call("api:call", {
                        method: "clear-plugin-storage-files",
                        args: [
                            this.ctxId
                        ]
                    });
                }
                hasItem(e) {
                    return this.ctx.caller.callAsync("api:call", {
                        method: "exist-plugin-storage-file",
                        args: [
                            this.ctxId,
                            e
                        ]
                    });
                }
            }
            const Et = Symbol.for("proxy-continue"), kt = rt()("LSPlugin:user");
            function Ft(e, t, n) {
                if ("function" != typeof n) return !1;
                const { key: r, label: o, desc: i, palette: a, keybinding: s } = t, c = `SimpleCommandHook${r}${++It}`;
                this.Editor["on" + c](n), this.caller?.call("api:call", {
                    method: "register-plugin-simple-command",
                    args: [
                        this.baseInfo.id,
                        [
                            {
                                key: r,
                                label: o,
                                type: e,
                                desc: i,
                                keybinding: s
                            },
                            [
                                "editor/hook",
                                c
                            ]
                        ],
                        a
                    ]
                });
            }
            const Lt = {
                registerCommand: Ft,
                registerCommandPalette (e, t) {
                    const { key: n, label: r, keybinding: o } = e;
                    return Ft.call(this, "global-palette-command", {
                        key: n,
                        label: r,
                        palette: !0,
                        keybinding: o
                    }, t);
                },
                registerUIItem (e, t) {
                    const n = this.baseInfo.id;
                    this.caller?.call("api:call", {
                        method: "register-plugin-ui-item",
                        args: [
                            n,
                            e,
                            t
                        ]
                    });
                },
                registerPageMenuItem (e, t) {
                    if ("function" != typeof t) return !1;
                    const n = e + "_" + this.baseInfo.id, r = e;
                    Ft.call(this, "page-menu-item", {
                        key: n,
                        label: r
                    }, t);
                },
                setFullScreen (e) {
                    const t = (...e)=>this._callWin("setFullScreen", ...e);
                    "toggle" === e ? this._callWin("isFullScreen").then((e)=>{
                        e ? t() : t(!0);
                    }) : e ? t(!0) : t();
                }
            };
            let It = 0;
            const Mt = {
                registerSlashCommand (e, t) {
                    kt("Register slash command #", this.baseInfo.id, e, t), "function" == typeof t && (t = [
                        [
                            "editor/clear-current-slash",
                            !1
                        ],
                        [
                            "editor/restore-saved-cursor"
                        ],
                        [
                            "editor/hook",
                            t
                        ]
                    ]), t = t.map((e)=>{
                        const [t, ...n] = e;
                        switch(t){
                            case "editor/hook":
                                let r = n[0], o = ()=>{
                                    this.caller?.callUserModel(r);
                                };
                                "function" == typeof r && (o = r);
                                const i = `SlashCommandHook${t}${++It}`;
                                e[1] = i, this.Editor["on" + i](o);
                        }
                        return e;
                    }), this.caller?.call("api:call", {
                        method: "register-plugin-slash-command",
                        args: [
                            this.baseInfo.id,
                            [
                                e,
                                t
                            ]
                        ]
                    });
                },
                registerBlockContextMenuItem (e, t) {
                    if ("function" != typeof t) return !1;
                    const n = e + "_" + this.baseInfo.id, r = e;
                    Ft.call(this, "block-context-menu-item", {
                        key: n,
                        label: r
                    }, t);
                },
                scrollToBlockInPage (e, t) {
                    const n = "block-content-" + t;
                    this.App.pushState("page", {
                        name: e
                    }, {
                        anchor: n
                    });
                }
            }, Nt = {};
            class Rt extends dt() {
                _baseInfo;
                _caller;
                _settingsSchema;
                _connected = !1;
                _ui = new Map;
                _fileStorage;
                _beforeunloadCallback;
                constructor(e, t){
                    super(), this._baseInfo = e, this._caller = t, t.on("sys:ui:visible", (e)=>{
                        e?.toggle && this.toggleMainUI();
                    }), t.on("settings:changed", (e)=>{
                        const t = Object.assign({}, this.settings), n = Object.assign(this._baseInfo.settings, e);
                        this.emit("settings:changed", {
                            ...n
                        }, t);
                    }), t.on("beforeunload", async (e)=>{
                        const { actor: n, ...r } = e, o = this._beforeunloadCallback;
                        try {
                            o && await o(r), n?.resolve(null);
                        } catch (e) {
                            console.debug(`${t.debugTag} [beforeunload] `, e), n?.reject(e);
                        }
                    }), this._fileStorage = new Tt(this);
                }
                async ready(e, t) {
                    if (!this._connected) try {
                        "function" == typeof e && (t = e, e = {});
                        let n = await this._caller.connectToParent(e);
                        this._connected = !0, n = et(this._baseInfo, n), this._settingsSchema && (n.settings = function(e, t) {
                            const n = (t || []).reduce((e, t)=>("default" in t && (e[t.key] = t.default), e), {});
                            return Object.assign(n, e);
                        }(n.settings, this._settingsSchema), await this.useSettingsSchema(this._settingsSchema)), n?.id && (this._caller.debugTag = `#${n.id} [${n.name}]`), t && t.call(this, n);
                    } catch (e) {
                        console.error("[LSPlugin Ready Error]", e);
                    }
                }
                ensureConnected() {
                    if (!this._connected) throw new Error("not connected");
                }
                beforeunload(e) {
                    "function" == typeof e && (this._beforeunloadCallback = e);
                }
                provideModel(e) {
                    return this.caller._extendUserModel(e), this;
                }
                provideTheme(e) {
                    return this.caller.call("provider:theme", e), this;
                }
                provideStyle(e) {
                    return this.caller.call("provider:style", e), this;
                }
                provideUI(e) {
                    return this.caller.call("provider:ui", e), this;
                }
                useSettingsSchema(e) {
                    return this.connected && this.caller.call("settings:schema", {
                        schema: e,
                        isSync: !0
                    }), this._settingsSchema = e, this;
                }
                updateSettings(e) {
                    this.caller.call("settings:update", e);
                }
                onSettingsChanged(e) {
                    const t = "settings:changed";
                    return this.on(t, e), ()=>this.off(t, e);
                }
                showSettingsUI() {
                    this.caller.call("settings:visible:changed", {
                        visible: !0
                    });
                }
                hideSettingsUI() {
                    this.caller.call("settings:visible:changed", {
                        visible: !1
                    });
                }
                setMainUIAttrs(e) {
                    this.caller.call("main-ui:attrs", e);
                }
                setMainUIInlineStyle(e) {
                    this.caller.call("main-ui:style", e);
                }
                hideMainUI(e) {
                    const t = {
                        key: 0,
                        visible: !1,
                        cursor: e?.restoreEditingCursor
                    };
                    this.caller.call("main-ui:visible", t), this.emit("ui:visible:changed", t), this._ui.set(t.key, t);
                }
                showMainUI(e) {
                    const t = {
                        key: 0,
                        visible: !0,
                        autoFocus: e?.autoFocus
                    };
                    this.caller.call("main-ui:visible", t), this.emit("ui:visible:changed", t), this._ui.set(t.key, t);
                }
                toggleMainUI() {
                    const e = this._ui.get(0);
                    e && e.visible ? this.hideMainUI() : this.showMainUI();
                }
                get isMainUIVisible() {
                    const e = this._ui.get(0);
                    return Boolean(e && e.visible);
                }
                get connected() {
                    return this._connected;
                }
                get baseInfo() {
                    return this._baseInfo;
                }
                get settings() {
                    return this.baseInfo?.settings;
                }
                get caller() {
                    return this._caller;
                }
                resolveResourceFullUrl(e) {
                    if (this.ensureConnected(), e) return e = e.replace(/^[.\\/]+/, ""), function(e, ...t) {
                        try {
                            const n = new URL(e);
                            if (!n.origin) throw new Error(null);
                            const r = Xe.join(e.substr(n.origin.length), ...t);
                            return n.origin + r;
                        } catch (n) {
                            return Xe.join(e, ...t);
                        }
                    }(this._baseInfo.lsr, e);
                }
                _makeUserProxy(e, t) {
                    const n = this, r = this.caller;
                    return new Proxy(e, {
                        get (e, o, i) {
                            const a = e[o];
                            return function(...e) {
                                if (!a || a.apply(n, e) === Et) {
                                    if (t) {
                                        const n = o.toString().match(/^(once|off|on)/i);
                                        if (null != n) {
                                            const o = n[0].toLowerCase(), a = n.input.slice(o.length), c = `hook:${t}:${(i = a, void 0 === s && (s = {}), function(e, t) {
                                                return void 0 === t && (t = {}), function(e, t) {
                                                    void 0 === t && (t = {});
                                                    for(var n = t.splitRegexp, r = void 0 === n ? Ot : n, o = t.stripRegexp, i = void 0 === o ? jt : o, a = t.transform, s = void 0 === a ? St : a, c = t.delimiter, l = void 0 === c ? " " : c, u = At(At(e, r, "$1\x00$2"), i, "\x00"), p = 0, f = u.length; "\x00" === u.charAt(p);)p++;
                                                    for(; "\x00" === u.charAt(f - 1);)f--;
                                                    return u.slice(p, f).split("\x00").map(s).join(l);
                                                }(e, Ct({
                                                    delimiter: "."
                                                }, t));
                                            }(i, Ct({
                                                delimiter: "_"
                                            }, s)))}`, l = e[0];
                                            return r[o](c, l), "off" !== o ? ()=>r.off(c, l) : void 0;
                                        }
                                    }
                                    var i, s;
                                    return r.callAsync("api:call", {
                                        tag: t,
                                        method: o,
                                        args: e
                                    });
                                }
                            };
                        }
                    });
                }
                _callWin(...e) {
                    return this._caller.callAsync("api:call", {
                        method: "_callMainWin",
                        args: e
                    });
                }
                get App() {
                    return this._makeUserProxy(Lt, "app");
                }
                get Editor() {
                    return this._makeUserProxy(Mt, "editor");
                }
                get DB() {
                    return this._makeUserProxy(Nt);
                }
                get FileStorage() {
                    return this._fileStorage;
                }
            }
            function zt(e, t) {
                return new Rt(e, t);
            }
            if (null == window.__LSP__HOST__) {
                const e = new xt(null);
                window.logseq = zt({}, e);
            }
        })(), r;
    })();
});

},{}]},["hdaM1","1jwFz"], "1jwFz", "parcelRequire22c8")

//# sourceMappingURL=index.js.map
