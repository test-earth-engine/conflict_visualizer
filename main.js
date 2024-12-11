(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{graph_create:()=>y,interaction_a:()=>p});var o={};e.r(o),e.d(o,{graph_create:()=>w,interaction_a:()=>f});var n=function(e,t){var o={};if(e.isPointType()||e.isMultiPointType()){if(o.attributes=new WorldWind.PlacemarkAttributes(placemarkAttributes),t&&(t.name||t.Name||t.NAME)&&(o.name=t.name||t.Name||t.NAME),t&&t.POP_MAX){var n=t.POP_MAX;o.attributes.imageScale=.01*Math.log(n)}}else if(e.isLineStringType()||e.isMultiLineStringType())o.attributes=new WorldWind.ShapeAttributes(null),o.attributes.drawOutline=!0,o.attributes.outlineColor=new WorldWind.Color(.1*o.attributes.interiorColor.red,.3*o.attributes.interiorColor.green,.7*o.attributes.interiorColor.blue,1),o.attributes.outlineWidth=2;else if(e.isPolygonType()||e.isMultiPolygonType()){o.attributes=new WorldWind.ShapeAttributes(null),o.attributes.interiorColor=new WorldWind.Color(.375+.5*Math.random(),.375+.5*Math.random(),.375+.5*Math.random(),.5),o.attributes.outlineColor=new WorldWind.Color(.5*o.attributes.interiorColor.red,.5*o.attributes.interiorColor.green,.5*o.attributes.interiorColor.blue,1);var r=new WorldWind.ShapeAttributes(o.attributes);r.interiorColor=new WorldWind.Color(1,1,1,1),o.highlightAttributes=r}return o};function r(e,t,o,n,r,c,s){var d=t.userObject;console.log("featuresByName:",c);let u=d?.layer?.displayName,p=a(u,r,c),y=function(e,t){let o={};if(o.country=e,t){let e="2020-01-01",n=t?.properties?.population,r=n.filter((t=>t.start_date==e)).at(-1).population_value;o["population (Million)"]=(r/1e6).toFixed(3)}return console.log(o),o}(u,p),[b,f]=l(p);i(s,f,b,1e7,5e3,null);let g=function(e){var t=document.createElement("div");t.id="popup_id",t.style.border="1px solid black",t.style.padding="10px",t.style.backgroundColor="white";let o=function(e){if(0===e.length)return"<table><tr><td>No data available</td></tr></table>";const t=Object.keys(e[0]);return`\n        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">\n            <tr>\n                ${t.map((e=>`<th style="border: 1px solid #ccc; padding: 5px;">${e}</th>`)).join("")}\n            </tr>\n            ${e.map((e=>`\n        <tr>\n            ${t.map((t=>`<td style="border: 1px solid #ccc; padding: 5px;">${e[t]}</td>`)).join("")}\n        </tr>\n    `)).join("")}\n        </table>\n    `}(e);return t.innerHTML=`\n        <div style="border: 1px solid #ccc; padding: 10px; width: 300px; background-color: #f9f9f9; position: relative;">\n            <button style="\n                position: absolute; \n                top: 5px; \n                right: 5px; \n                background: none; \n                border: none; \n                font-size: 12px; \n                cursor: pointer; \n                color: #d9534f;" \n                onclick="document.getElementById('popup_id').remove()">&#10005;</button>\n                ${o}\n        </div>`,t}([y]);g.style.top="0px",g.style.left="0px",g.style.zIndex=1e3,g.style.position="absolute",document.body.appendChild(g),document.getElementById(e)}function l(e){const t=turf.cleanCoords(e);console.log(t);const o=turf.centroid(t),[n,r]=o.geometry.coordinates;return console.log("[centroid_calculate] Centroid Coordinates:",[n,r]),[n,r]}function i(e,t,o,n,r,l){new WorldWind.Position(t,o,0);var i=new WorldWind.Position(t,o,n);let a=new WorldWind.GoToAnimator(e);a.travelTime=r,a.goTo(i,l),e.navigator.roll=0,e.navigator.tilt=0,e.navigator.heading=0}function a(e,t,o){let n=o[e];return t.features[n]}async function c(e,t,o,l){s=function(e){var t=new WorldWind.WorldWindow(e);let o=new WorldWind.CoordinatesDisplayLayer(t);var n=new Date;let r=function(e){var t=new WorldWind.StarFieldLayer;return t.time=e,t}(n),l=function(e){var t=new WorldWind.AtmosphereLayer;return t.time=e,t}(n);for(var i=[{layer:new WorldWind.BMNGLayer,enabled:!0},{layer:l,enabled:!0},{layer:r,enabled:!0},{layer:o,enabled:!0},{layer:new WorldWind.ViewControlsLayer(t),enabled:!0}],a=0;a<i.length;a++)i[a].layer.enabled=i[a].enabled,t.addLayer(i[a].layer);var c=function(e){for(var o=e.clientX,n=e.clientY,r=t.pick(t.canvasCoordinates(o,n)),l=0;l<r.objects.length;l++);if(1===r.objects.length&&r.objects[0].isTerrain){var i=r.objects[0].position;t.goTo(new WorldWind.Location(i.latitude,i.longitude))}};return new WorldWind.ClickRecognizer(t,c),new WorldWind.TapRecognizer(t,c),t}(e),document.getElementById(e).addEventListener("click",(e=>{console.log("[main] Click detected on canvas")})),async function(e,t,o){o.features.forEach((t=>{let o=function(e){let t=e.properties.country;var o=new WorldWind.RenderableLayer(t);return new WorldWind.GeoJSONParser(e).load(null,n,o),o}(t);e.addLayer(o)}))}(s,0,t),function(e){var t=new WorldWind.ShapeAttributes(null);t.outlineColor=WorldWind.Color.BLUE,t.interiorColor=new WorldWind.Color(0,1,1,.5);var o=new WorldWind.ShapeAttributes(t);o.interiorColor=new WorldWind.Color(1,1,1,1);var n=new WorldWind.SurfaceCircle(new WorldWind.Location(35,-120),2e5,t);n.highlightAttributes=o;var r=new WorldWind.RenderableLayer("layer_circle_create");r.addRenderable(n),e.addLayer(r),e.redraw()}(s),function(e,t,o,n){let l=(l,i,a)=>r(e,l,0,0,o,n,t);t.addEventListener("click",(e=>function(e,t,o){var n=e.clientX,r=e.clientY,l=t.canvasCoordinates(n,r),i=t.pick(l);console.log("objects:",i.objects);for(var a=0;a<i.objects.length;a++)if(i.objects[a].userObject instanceof WorldWind.SurfacePolygon){o(i.objects[a],n,r);break}}(e,t,l)))}(e,s,t,o),s.navigator.range=1e8,i(s,0,0,2e7,1e4,l),new WorldWind.HighlightController(s)}let s=null;var d=function(e){if(console.log("[plotly_click] eventData:",e?.points),e){var t=e.points;if(t&&t[0]){var o=t[0];console.log("[plotly_click]",o.properties)}}},u=function(e){console.log("[plotly_hover]",e);var t=e.points;if(t&&t[0]){let e=t[0].label;console.log(`[plotly_hover] country:'${e}' `)}};async function p(e,t){return console.log("interaction_a...",e),e.on("plotly_hover",u),e.on("plotly_click",d),async function(e,t){console.log("[redraw_a]:",t.length),e.data[0].orientation="h",e.data[0].y=t.map((e=>e.country)),e.data[0].x=t.map((e=>e.population));Plotly.redraw(e),Plotly.update(e,{},{"title.text":"Population","xaxis.type":"log","yaxis.autorange":"reversed","yaxis.automargin":!0})}(e,t),!0}async function y(e){var t=document.getElementById(e);return Plotly.newPlot(t,[{x:[],y:[],type:"bar"}],{plot_bgcolor:"#191A1A",paper_bgcolor:"#191A1A",title:{text:"??"},font:{color:"white"},margin:{t:40,b:50,l:10,r:10},xaxis:{showgrid:!0,dtick:1}},{responsive:!0}),t}const b="file:///home/runner/work/conflict_glob_visualizer/conflict_glob_visualizer/Frontend/bar_a_3.js".split("/").pop();async function f(e,t){return e.addEventListener("click",(async e=>{let t=await async function(e){const t=e.target.closest("g");if(t){const e=t.querySelector("text");if(e)return e.textContent}}(e);console.log(`[on_click_selected_cell_get] result:'${t}'`),async function(e,t){const o=new CustomEvent("from_table_a_3",{detail:t});window.dispatchEvent(o)}(0,{country:t})})),e.addEventListener("mouseover",g),e.addEventListener("mouseout",v),async function(e,t){Object.keys(t[0]).forEach(((o,n)=>{e.data[0].header.values[n+1]=`<b>${o}</b>`,e.data[0].cells.values[n+1]=t.map((e=>e[o]))})),e.data[0].header.values[0]="<b> </b>",e.data[0].cells.values[0]=t.map(((e,t)=>t+1)),Plotly.redraw(e),Plotly.update(e,{},{"title.text":"Population [Million]"})}(e,t),!0}function g(e){const t=e.target.closest("g");if(t){const e=t.querySelector("rect");e&&(m=e.style.fill,e.style.fill="lightyellow")}}function v(e){const t=e.target.closest("g");if(t){const e=t.querySelector("rect");e&&(e.style.fill=m)}}async function w(e){var t=document.getElementById(e);return Plotly.newPlot(t,[{type:"table",header:{values:[],align:["left","center"],line:{width:1,color:"black"},fill:{color:"lightgrey"},font:{family:"Arial",size:12,color:"black"}},cells:{values:[],align:["left","center"],line:{color:"black",width:1},fill:{color:["white","lightblue"]},font:{family:"Arial",size:11,color:["black"]},height:30}}],{plot_bgcolor:"#191A1A",paper_bgcolor:"#191A1A",title:{text:"??"},font:{color:"white"},margin:{t:40,b:10,l:10,r:10}},{responsive:!0}),t}console.log(`- '${b}' loaded!!`);let m="";const h="file:///home/runner/work/conflict_glob_visualizer/conflict_glob_visualizer/Frontend/table_a_3.js".split("/").pop();async function _(e){return e.features.reduce(((e,t,o)=>(e[t.properties.country]=o,e)),{})}console.log(`- '${h}' loaded!!`),async function(){let e=await async function(){let e=await async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(e){throw console.error("Failed to load JSON:",e),e}}("https://raw.githubusercontent.com/test-earth-engine/gee1/main/Notebooks/ucdp_v241_y2020_gpw_population_2.geojson");return console.log("population_data:",e),e}(),n=await _(e);c("canvas1_id",e,n,null),async function(e){document.getElementById("spinner_id").style.visibility="visible";let n=await async function(e){let t=await _(e),o=e?.features,n=Object.entries(t).map((([e,t])=>{let n=o[t],r=n?.properties?.population,l=r.filter((e=>"2020-01-01"==e.start_date)).at(-1).population_value;return l=(l/1e6).toFixed(5),{country:e,population:l}})),r=await async function(e){return e.map(((e,t)=>({value:e,index:t}))).sort(((e,t)=>t.value-e.value)).map((({index:e})=>e))}(n.map((e=>e.population)));return n=r.map((e=>n[e])),n}(e),r={};r.bar_a_3=t,r.table_a_3=o;const l=Object.entries(r).map((async([e,t])=>{const o=await t.graph_create(e);return t.interaction_a(o,n)}));Promise.all(l).then((e=>{console.log("All promises resolved",e),document.getElementById("spinner_id").style.visibility="hidden"}))}(e),async function(e,t){!async function(e,t){let o=null;t?window.addEventListener(e,t):window.addEventListener(e,(e=>{console.log("[event_received] event_func:",e.detail),o=e.detail}))}("from_table_a_3",(o=>{let n=o.detail,r=n?.country;if(t.hasOwnProperty(r)){let o=t[r];console.log(`[interactions] country:'${r}' (${o}) `),async function(e,t,o){let n=a(e,t,o),[r,c]=l(n);i(s,c,r,1e7,5e3,null)}(r,e,t)}}))}(e,n)}()})();