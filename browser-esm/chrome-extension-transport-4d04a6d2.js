import{S as e,T as t,J as n,E as s,_ as o}from"./index-149e789c.js";class i{constructor(n,s){this.logger=n,this.recorder=s,this.events=new e,this.consoleAppEvent=this.events,this.connectHasBeenCalled=!1,this.context=t.CHROME_EXTENSION}connect(){return this.connectHasBeenCalled?Promise.reject(new n("Already connected",s.UNEXPECTED_ERROR)):(this.connectHasBeenCalled=!0,window.addEventListener("message-from-jabra-chrome-extension",(e=>{var t;let n=e.detail;this.recorder&&(n=null===(t=this.recorder)||void 0===t?void 0:t.recordInput(n)),this.events.next(n)})),this.writeAction({event:"ping"}),Promise.resolve())}static checkInstallation(){return o(this,void 0,void 0,(function*(){return new Promise((e=>{const t=new CustomEvent("message-to-jabra-chrome-extension",{detail:"check-console-app-installation"});window.dispatchEvent(t),window.addEventListener("installation-status-from-jabra-chrome-extension",(t=>{e({ok:t.detail,message:t.detail?"Installation ok":"The Jabra Chromehost is not installed"})})),setTimeout((()=>{e({ok:!1,message:"The Jabra Chrome Extension is not installed"})}),3e3)}))}))}writeAction(e){var t;null===(t=this.recorder)||void 0===t||t.recordOutput(e),window.dispatchEvent(new CustomEvent("message-to-jabra-chrome-extension",{detail:e}))}}export{i as TransportChromeExtension};