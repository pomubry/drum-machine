(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(2),c=t.n(o),s=(t(14),t(6)),i=t(3),l=t(4),m=t(8),d=t(7),u=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],p=t(5),h=t.n(p),g=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={volume:50,display:"Welcome to my Drum Machine"},e.btnMap=n.a.createRef(),e.togglePlay=function(a){a.preventDefault();var t=u.filter((function(e){return e.id===a.target.id}));a.target.children[0].volume=e.state.volume/100,a.target.children[0].play(),e.setState({display:t[0].id})},e.handlePress=function(a){a.preventDefault();var t=Object(s.a)(e.btnMap.current.childNodes).filter((function(e){return"drum-pad"===e.className})).filter((function(e){return parseInt(e.attributes.keycode.value)===a.keyCode}));t.length>0&&(t[0].childNodes[0].volume=e.state.volume/100,t[0].childNodes[0].play(),e.setState({display:t[0].id}))},e.handleChange=function(a){var t=a.target.value;e.setState({volume:t,display:"Volume: ".concat(t)})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=u.map((function(a){return n.a.createElement("button",{className:"drum-pad",id:a.id,onClick:e.togglePlay,keycode:a.keyCode,key:a.id},n.a.createElement("audio",{className:"clip",id:a.keyTrigger,preload:"auto",src:a.url}),a.keyTrigger)}));return n.a.createElement("div",{className:"App",onKeyDown:this.handlePress,tabIndex:-1},n.a.createElement("h1",null,"Drum Machine!"),n.a.createElement("div",{id:"drum-machine"},n.a.createElement("div",{id:"display"},this.state.display),n.a.createElement("div",{className:"buttons-container",ref:this.btnMap},a),n.a.createElement("div",{className:"slide-container"},n.a.createElement("span",{className:"material-icons"},"volume_down"),n.a.createElement("input",{type:"range",min:"0",max:"100",value:this.state.volume,className:"slider",onChange:this.handleChange}),n.a.createElement("span",{className:"material-icons"},"volume_up"),n.a.createElement("br",null))),n.a.createElement("div",{className:"credits"},n.a.createElement("p",null,"Designed and Coded By"),n.a.createElement("a",{href:"https://github.com/pomubry",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:h.a,alt:"github icon"}),"Bryan Taduran")))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports=t.p+"static/media/githubIcon.0a3a0978.svg"},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.038e5412.chunk.js.map