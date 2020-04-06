"use strict";function noop(){}function assign(e,t){for(const n in t)e[n]=t[n];return e}function run(e){return e()}function blank_object(){return Object.create(null)}function run_all(e){e.forEach(run)}function is_function(e){return"function"==typeof e}function safe_not_equal(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function create_slot(e,t,n,o){if(e){const c=get_slot_context(e,t,n,o);return e[0](c)}}function get_slot_context(e,t,n,o){return e[1]&&o?assign(n.ctx.slice(),e[1](o(t))):n.ctx}function get_slot_changes(e,t,n,o){if(e[2]&&o){const c=e[2](o(n));if("object"==typeof t.dirty){const e=[],n=Math.max(t.dirty.length,c.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|c[o];return e}return t.dirty|c}return t.dirty}function null_to_empty(e){return null==e?"":e}function append(e,t){e.appendChild(t)}function insert(e,t,n){e.insertBefore(t,n||null)}function detach(e){e.parentNode.removeChild(e)}function destroy_each(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function element(e){return document.createElement(e)}function text(e){return document.createTextNode(e)}function space(){return text(" ")}function listen(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function attr(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function children(e){return Array.from(e.childNodes)}function set_data(e,t){t=""+t,e.data!==t&&(e.data=t)}function select_option(e,t){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t)return void(o.selected=!0)}}function select_value(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function custom_event(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}let current_component;function set_current_component(e){current_component=e}function get_current_component(){if(!current_component)throw new Error("Function called outside component initialization");return current_component}function createEventDispatcher(){const e=get_current_component();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const c=custom_event(t,n);o.slice().forEach(t=>{t.call(e,c)})}}}const dirty_components=[],binding_callbacks=[],render_callbacks=[],flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(e){render_callbacks.push(e)}function flush(){const e=new Set;do{for(;dirty_components.length;){const e=dirty_components.shift();set_current_component(e),update(e.$$)}for(;binding_callbacks.length;)binding_callbacks.pop()();for(let t=0;t<render_callbacks.length;t+=1){const n=render_callbacks[t];e.has(n)||(n(),e.add(n))}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1}function update(e){if(null!==e.fragment){e.update(),run_all(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(add_render_callback)}}const outroing=new Set;let outros;function group_outros(){outros={r:0,c:[],p:outros}}function check_outros(){outros.r||run_all(outros.c),outros=outros.p}function transition_in(e,t){e&&e.i&&(outroing.delete(e),e.i(t))}function transition_out(e,t,n,o){if(e&&e.o){if(outroing.has(e))return;outroing.add(e),outros.c.push(()=>{outroing.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function mount_component(e,t,n){const{fragment:o,on_mount:c,on_destroy:l,after_update:r}=e.$$;o&&o.m(t,n),add_render_callback(()=>{const t=c.map(run).filter(is_function);l?l.push(...t):run_all(t),e.$$.on_mount=[]}),r.forEach(add_render_callback)}function destroy_component(e,t){const n=e.$$;null!==n.fragment&&(run_all(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function make_dirty(e,t){-1===e.$$.dirty[0]&&(dirty_components.push(e),schedule_update(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function init(e,t,n,o,c,l,r=[-1]){const a=current_component;set_current_component(e);const s=t.props||{},_=e.$$={fragment:null,ctx:null,props:l,update:noop,not_equal:c,bound:blank_object(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:blank_object(),dirty:r};let i=!1;_.ctx=n?n(e,s,(t,n,o=n)=>(_.ctx&&c(_.ctx[t],_.ctx[t]=o)&&(_.bound[t]&&_.bound[t](o),i&&make_dirty(e,t)),n)):[],_.update(),i=!0,run_all(_.before_update),_.fragment=!!o&&o(_.ctx),t.target&&(t.hydrate?_.fragment&&_.fragment.l(children(t.target)):_.fragment&&_.fragment.c(),t.intro&&transition_in(e.$$.fragment),mount_component(e,t.target,t.anchor),flush()),set_current_component(a)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function add_css(){var e=element("style");e.id="svelte-w7dofd-style",e.textContent="table.svelte-w7dofd.svelte-w7dofd{width:100%}.isSortable.svelte-w7dofd.svelte-w7dofd{cursor:pointer}tr.svelte-w7dofd th select.svelte-w7dofd{width:100%}",append(document.head,e)}function get_each_context_1(e,t,n){const o=e.slice();return o[34]=t[n],o}const get_row_slot_changes=e=>({row:8192&e[0]}),get_row_slot_context=e=>({row:e[31],n:e[33]});function get_each_context(e,t,n){const o=e.slice();return o[31]=t[n],o[33]=n,o}function get_each_context_2(e,t,n){const o=e.slice();return o[34]=t[n],o}const get_header_slot_changes=e=>({sortOrder:2&e[0],sortBy:1&e[0]}),get_header_slot_context=e=>({sortOrder:e[1],sortBy:e[0]});function get_each_context_4(e,t,n){const o=e.slice();return o[41]=t[n],o}function get_each_context_3(e,t,n){const o=e.slice();return o[34]=t[n],o}function create_if_block_1(e){let t,n=e[2],o=[];for(let t=0;t<n.length;t+=1)o[t]=create_each_block_3(get_each_context_3(e,n,t));return{c(){t=element("tr");for(let e=0;e<o.length;e+=1)o[e].c();attr(t,"class","svelte-w7dofd")},m(e,n){insert(e,t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,c){if(39172&c[0]){let l;for(n=e[2],l=0;l<n.length;l+=1){const r=get_each_context_3(e,n,l);o[l]?o[l].p(r,c):(o[l]=create_each_block_3(r),o[l].c(),o[l].m(t,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(e){e&&detach(t),destroy_each(o,e)}}}function create_if_block_2(e){let t,n,o,c,l=e[11][e[34].key],r=[];for(let t=0;t<l.length;t+=1)r[t]=create_each_block_4(get_each_context_4(e,l,t));function a(){e[27].call(t,e[34])}return{c(){t=element("select"),n=element("option");for(let e=0;e<r.length;e+=1)r[e].c();n.__value=void 0,n.value=n.__value,attr(t,"class",o=null_to_empty(e[15](e[8]))+" svelte-w7dofd"),void 0===e[12][e[34].key]&&add_render_callback(a),c=listen(t,"change",a)},m(o,c){insert(o,t,c),append(t,n);for(let e=0;e<r.length;e+=1)r[e].m(t,null);select_option(t,e[12][e[34].key])},p(n,c){if(e=n,2052&c[0]){let n;for(l=e[11][e[34].key],n=0;n<l.length;n+=1){const o=get_each_context_4(e,l,n);r[n]?r[n].p(o,c):(r[n]=create_each_block_4(o),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=l.length}256&c[0]&&o!==(o=null_to_empty(e[15](e[8]))+" svelte-w7dofd")&&attr(t,"class",o),4100&c[0]&&select_option(t,e[12][e[34].key])},d(e){e&&detach(t),destroy_each(r,e),c()}}}function create_each_block_4(e){let t,n,o,c=e[41].name+"";return{c(){t=element("option"),n=text(c),t.__value=o=e[41].value,t.value=t.__value},m(e,o){insert(e,t,o),append(t,n)},p(e,l){2052&l[0]&&c!==(c=e[41].name+"")&&set_data(n,c),2052&l[0]&&o!==(o=e[41].value)&&(t.__value=o),t.value=t.__value},d(e){e&&detach(t)}}}function create_each_block_3(e){let t,n,o=void 0!==e[11][e[34].key]&&create_if_block_2(e);return{c(){t=element("th"),o&&o.c(),n=space()},m(e,c){insert(e,t,c),o&&o.m(t,null),append(t,n)},p(e,c){void 0!==e[11][e[34].key]?o?o.p(e,c):(o=create_if_block_2(e),o.c(),o.m(t,n)):o&&(o.d(1),o=null)},d(e){e&&detach(t),o&&o.d()}}}function create_if_block(e){let t,n=(1===e[1]?e[3]:e[4])+"";return{c(){t=text(n)},m(e,n){insert(e,t,n)},p(e,o){26&o[0]&&n!==(n=(1===e[1]?e[3]:e[4])+"")&&set_data(t,n)},d(e){e&&detach(t)}}}function create_each_block_2(e){let t,n,o,c,l,r,a=e[34].title+"",s=e[0]===e[34].key&&create_if_block(e);function _(...t){return e[28](e[34],...t)}return{c(){t=element("th"),n=text(a),o=space(),s&&s.c(),c=space(),attr(t,"class",l=null_to_empty(e[15]([e[34].sortable?"isSortable":null,e[34].headerClass]))+" svelte-w7dofd"),r=listen(t,"click",_)},m(e,l){insert(e,t,l),append(t,n),append(t,o),s&&s.m(t,null),append(t,c)},p(o,r){e=o,4&r[0]&&a!==(a=e[34].title+"")&&set_data(n,a),e[0]===e[34].key?s?s.p(e,r):(s=create_if_block(e),s.c(),s.m(t,c)):s&&(s.d(1),s=null),4&r[0]&&l!==(l=null_to_empty(e[15]([e[34].sortable?"isSortable":null,e[34].headerClass]))+" svelte-w7dofd")&&attr(t,"class",l)},d(e){e&&detach(t),s&&s.d(),r()}}}function create_each_block_1(e){let t,n,o,c=(e[34].renderValue?e[34].renderValue(e[31]):e[34].value(e[31]))+"";function l(...t){return e[29](e[31],e[34],...t)}return{c(){t=element("td"),attr(t,"class",n=null_to_empty(e[15]([e[34].class,e[10]]))+" svelte-w7dofd"),o=listen(t,"click",l)},m(e,n){insert(e,t,n),t.innerHTML=c},p(o,l){e=o,8196&l[0]&&c!==(c=(e[34].renderValue?e[34].renderValue(e[31]):e[34].value(e[31]))+"")&&(t.innerHTML=c),1028&l[0]&&n!==(n=null_to_empty(e[15]([e[34].class,e[10]]))+" svelte-w7dofd")&&attr(t,"class",n)},d(e){e&&detach(t),o()}}}function create_each_block(e){let t,n,o,c,l;const r=e[26].row,a=create_slot(r,e,e[25],get_row_slot_context);let s=e[2],_=[];for(let t=0;t<s.length;t+=1)_[t]=create_each_block_1(get_each_context_1(e,s,t));function i(...t){return e[30](e[31],...t)}return{c(){if(!a){t=element("tr");for(let e=0;e<_.length;e+=1)_[e].c();o=space()}a&&a.c(),a||(attr(t,"class",n=null_to_empty(e[15](e[9]))+" svelte-w7dofd"),c=listen(t,"click",i))},m(e,n){if(!a){insert(e,t,n);for(let e=0;e<_.length;e+=1)_[e].m(t,null);insert(e,o,n)}a&&a.m(e,n),l=!0},p(o,c){if(e=o,!a){if(304132&c[0]){let n;for(s=e[2],n=0;n<s.length;n+=1){const o=get_each_context_1(e,s,n);_[n]?_[n].p(o,c):(_[n]=create_each_block_1(o),_[n].c(),_[n].m(t,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=s.length}(!l||512&c[0]&&n!==(n=null_to_empty(e[15](e[9]))+" svelte-w7dofd"))&&attr(t,"class",n)}a&&a.p&&33562624&c[0]&&a.p(get_slot_context(r,e,e[25],get_row_slot_context),get_slot_changes(r,e[25],c,get_row_slot_changes))},i(e){l||(transition_in(a,e),l=!0)},o(e){transition_out(a,e),l=!1},d(e){a||(e&&detach(t),destroy_each(_,e),e&&detach(o),c()),a&&a.d(e)}}}function create_fragment(e){let t,n,o,c,l,r,a,s,_,i,u=e[14]&&create_if_block_1(e);const d=e[26].header,f=create_slot(d,e,e[25],get_header_slot_context);let p=e[2],h=[];for(let t=0;t<p.length;t+=1)h[t]=create_each_block_2(get_each_context_2(e,p,t));let m=e[13],g=[];for(let t=0;t<m.length;t+=1)g[t]=create_each_block(get_each_context(e,m,t));const y=e=>transition_out(g[e],1,1,()=>{g[e]=null});return{c(){if(t=element("table"),n=element("thead"),u&&u.c(),o=space(),!f){c=element("tr");for(let e=0;e<h.length;e+=1)h[e].c()}f&&f.c(),r=space(),a=element("tbody");for(let e=0;e<g.length;e+=1)g[e].c();attr(n,"class",l=null_to_empty(e[15](e[6]))+" svelte-w7dofd"),attr(a,"class",s=null_to_empty(e[15](e[7]))+" svelte-w7dofd"),attr(t,"class",_=null_to_empty(e[15](e[5]))+" svelte-w7dofd")},m(e,l){if(insert(e,t,l),append(t,n),u&&u.m(n,null),append(n,o),!f){append(n,c);for(let e=0;e<h.length;e+=1)h[e].m(c,null)}f&&f.m(n,null),append(t,r),append(t,a);for(let e=0;e<g.length;e+=1)g[e].m(a,null);i=!0},p(e,o){if(e[14]&&u.p(e,o),!f&&98335&o[0]){let t;for(p=e[2],t=0;t<p.length;t+=1){const n=get_each_context_2(e,p,t);h[t]?h[t].p(n,o):(h[t]=create_each_block_2(n),h[t].c(),h[t].m(c,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=p.length}if(f&&f.p&&33554435&o[0]&&f.p(get_slot_context(d,e,e[25],get_header_slot_context),get_slot_changes(d,e[25],o,get_header_slot_changes)),(!i||64&o[0]&&l!==(l=null_to_empty(e[15](e[6]))+" svelte-w7dofd"))&&attr(n,"class",l),33990148&o[0]){let t;for(m=e[13],t=0;t<m.length;t+=1){const n=get_each_context(e,m,t);g[t]?(g[t].p(n,o),transition_in(g[t],1)):(g[t]=create_each_block(n),g[t].c(),transition_in(g[t],1),g[t].m(a,null))}for(group_outros(),t=m.length;t<g.length;t+=1)y(t);check_outros()}(!i||128&o[0]&&s!==(s=null_to_empty(e[15](e[7]))+" svelte-w7dofd"))&&attr(a,"class",s),(!i||32&o[0]&&_!==(_=null_to_empty(e[15](e[5]))+" svelte-w7dofd"))&&attr(t,"class",_)},i(e){if(!i){transition_in(f,e);for(let e=0;e<m.length;e+=1)transition_in(g[e]);i=!0}},o(e){transition_out(f,e),g=g.filter(Boolean);for(let e=0;e<g.length;e+=1)transition_out(g[e]);i=!1},d(e){e&&detach(t),u&&u.d(),f||destroy_each(h,e),f&&f.d(e),destroy_each(g,e)}}}function instance(e,t,n){const o=createEventDispatcher();let{columns:c}=t,{rows:l}=t,{sortBy:r=""}=t,{sortOrder:a=1}=t,{iconAsc:s="▲"}=t,{iconDesc:_="▼"}=t,{classNameTable:i=""}=t,{classNameThead:u=""}=t,{classNameTbody:d=""}=t,{classNameSelect:f=""}=t,{classNameRow:p=""}=t,{classNameCell:h=""}=t,m=()=>"",g=c.some(e=>void 0!==e.filterOptions),y={},b={},k={};c.forEach(e=>{n(21,k[e.key]=e,k)});const v=()=>{n(11,y={}),c.forEach(e=>{"function"==typeof e.filterOptions?n(11,y[e.key]=e.filterOptions(l),y):Array.isArray(e.filterOptions)&&n(11,y[e.key]=e.filterOptions.map(e=>({name:e,value:e})),y)})},w=e=>{n(1,a=e===r&&1===a?-1:1)},$=e=>{w(e.key),n(0,r=e.key),o("clickCol",{key:e.key})},x=e=>{o("clickRow",{row:e})},N=(e,t)=>{o("clickCell",{row:e,key:t})};g&&v();let{$$slots:O={},$$scope:T}=t;let E;return e.$set=e=>{"columns"in e&&n(2,c=e.columns),"rows"in e&&n(19,l=e.rows),"sortBy"in e&&n(0,r=e.sortBy),"sortOrder"in e&&n(1,a=e.sortOrder),"iconAsc"in e&&n(3,s=e.iconAsc),"iconDesc"in e&&n(4,_=e.iconDesc),"classNameTable"in e&&n(5,i=e.classNameTable),"classNameThead"in e&&n(6,u=e.classNameThead),"classNameTbody"in e&&n(7,d=e.classNameTbody),"classNameSelect"in e&&n(8,f=e.classNameSelect),"classNameRow"in e&&n(9,p=e.classNameRow),"classNameCell"in e&&n(10,h=e.classNameCell),"$$scope"in e&&n(25,T=e.$$scope)},e.$$.update=()=>{if(2097153&e.$$.dirty[0]){let e=k[r];void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&n(20,m=t=>e.value(t))}3674114&e.$$.dirty[0]&&n(13,E=l.filter(e=>Object.keys(b).every(t=>{return void 0===b[t]||b[t]===("function"==typeof k[t].filterValue?k[t].filterValue(e):k[t].value(e))})).map(e=>Object.assign({},e,{$sortOn:m(e)})).sort((e,t)=>e.$sortOn>t.$sortOn?a:e.$sortOn<t.$sortOn?-a:0))},[r,a,c,s,_,i,u,d,f,p,h,y,b,E,g,e=>[].concat(e).filter(e=>"string"==typeof e&&""!==e).join(" "),$,x,N,l,m,k,o,v,w,T,O,function(e){b[e.key]=select_value(this),n(12,b),n(2,c),n(11,y)},e=>$(e),(e,t)=>{N(e,t.key)},e=>{x(e)}]}class SvelteTable extends SvelteComponent{constructor(e){super(),document.getElementById("svelte-w7dofd-style")||add_css(),init(this,e,instance,create_fragment,safe_not_equal,{columns:2,rows:19,sortBy:0,sortOrder:1,iconAsc:3,iconDesc:4,classNameTable:5,classNameThead:6,classNameTbody:7,classNameSelect:8,classNameRow:9,classNameCell:10},[-1,-1])}}module.exports=SvelteTable;
//# sourceMappingURL=SvelteTable.js.map
