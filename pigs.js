class U{constructor(){}get r(){return document.getElementById('root')}get c(){return document.querySelectorAll("input[type=text]").length>0}f=v=>v!=null;g=o=>o?.constructor?.name;h=(a,b,c)=>{if(!a||!b||!c)return;for(const e of a){if(typeof e=='object'){const p=e?.__proto__,i=Object.values(p)[c];if(i?.toString()?.includes(b))return e}}};e=(a,b)=>a?.toUpperCase()===b?.toUpperCase();fS=(n,h)=>{var l=h.length,m=n.length;if(m>l)return false;if(m===l)return n===h;outer:for(var i=0,j=0;i<m;i++){var c=n.charCodeAt(i);while(j<l){if(h.charCodeAt(j++)===c)continue outer}}return false};fN=(o,n,i=-1,l=false,f=false)=>{let c=0;for(const k in o){if(typeof o[k]==='object'&&(f?this.fuzzySearch(n,this.getObjectName(o[k])):this.equal(this.getObjectName(o[k]),n))){if(i===-1||i===c)return l?[k,o[k]]:o[k];c++}}};fP=(o,p)=>{if(typeof p!=='string'&&!Array.isArray(p))throw new Error(`Path must be a string 'obj.obj2.obj3...' or array [ 'obj', 'obj2', 'obj3' ... ]`);const a=Array.isArray(p)?p:p.split('.');let r=o;a.forEach((n,index)=>{if(!r)return;const last=index===a.length-1;if(r[n])r=r[n];else if(n.slice(0,2)==='i:')r=this.findByIndex(r,n.slice(2,n.length),last);else if(n.slice(0,6)==='fuzzy:')r=this.findObjectByName(r,n.slice(6,n.length),-1,last,true);else{const s=n.split(':');if(s.length===2)r=this.findObjectByName(r,s[0],+s[1],last);else r=this.findObjectByName(r,n,-1,last)}if(typeof r!=='object')return r});return r};gC=(e)=>{if(typeof e!=='object'&&typeof e!=='function')return;const r={};for(const[key,v]of Object.entries(e)){if(Array.isArray(v)){r[key]=v;continue}if(typeof v==='function'&&v.callableName){r[v.callableName]=e[key];continue}const n=v?.constructor?.$metadata$?.simpleName;if(!n)continue;if(r[n]){for(let i=0;;i++){const t=`${n}_${i}`;if(!r[t]){r[t]=v;break}}}else r[n]=v}r['original']=e;return r};gB=(a,n,i)=>{if(!a||!n||!i)return;for(const e of a){const p=e?.__proto__,init=Object.values(p)[i];if(init?.toString()?.includes(n))return e}};fI=(o,i,l=false)=>{const e=Object.entries(o)?.[i];if(l)return e;if(typeof e?.[1]==='object')return e[1];return e?.[0]};gL=(o,l)=>{let v=[];for(let i=0;i<o.length;i++){let a=[];for(let k in o[i]){if(typeof o[i][k]=='object'){a.push(o[i][k])}}if(a.length==l)v.push(a)};return v};cS=(o,v=new Set())=>{if(v.has(o)){return null}v.add(o);if(o?.constructor?.$metadata$?.simpleName==="ModalComponent"){return o}for(let k in o){if(typeof o[k]==="object"){const r=this.componentStarter(o[k],v);if(r){return r}}}return null};get rO(){if(this.r){return this.cS(this.r)}else{return}};get gR(){const c=this.rO;if(!c)return;const TO=this.gB(c,""),Store=this.gB(TO,"");const TSL=Object.entries(Store)?.[1]?.[1];if(TSL==void 0)return;const TSV=Object.entries(TSL)?.[1]?.[1];const BE=this.gL(TSV,3)?.[1]?.[0];return BE?true:false};gN=(o,n)=>{for(const k in o){if(o[k]?.constructor?.name===n&&typeof o[k]==="object"){return o[k]}}};gS=(o,n)=>{for(const k in o){if(o[k]?.constructor?.$metadata$?.simpleName===n&&typeof o[k]==="object"){return o[k]}}};eL=(t)=>{throw new Error('[Shizoval] '+t)};n=(t,c)=>{const l=document.createElement('div');l.innerHTML=t;l.style.backgroundColor=c;l.className='notify-message';document.body.appendChild(l);setTimeout(()=>{l.style.top="-100%"},2000)};gR=(min,max)=>Math.random()*(max-min)+min};const utils=new U;class G{constructor(){}get TO(){return utils.gS(utils.rO,"")};get uN(){return utils.fP(o.gO.u,"i:0.i:15")[1]};get st(){return utils.gS(this.TO,"")};get u(){return utils.fP(o.gO.TO,"i:3.i:4")[1]};w={get w(){if(!utils.gR)return;const c=utils.rO,TO=utils.gS(c,""),Store=utils.gS(TO,""),TSL=Object.entries(Store)[1][1];if(TSL==void 0)return;const TSV=Object.entries(TSL)[1][1];const BE=utils.gL(TSV,3)[1][0];const w=utils.gC(Object.entries(BE)[1][1]);return w}};get gM(){if(!utils.gR)return;const w=this.w.w,t0=utils.gC(w).ArrayList_0,t1=Object.entries(t0)[1][1],t2=utils.gC(t1[0]),t3=Object.entries(t2.original)[5][1],gM=Object.entries(t3)[0][1];return gM};get g(){return utils.fP(o.gO.w.w,"ArrayList_0.i:1.0")};get m(){if(!utils.gR)return;const mP=Object.entries(utils.h(this.g,'putMine',1))[11][1],mA=utils.fP(mP,'i:1')[1],mArray=Object.entries(mA)[1][1];return mArray}}let o={gO:void 0};function iO(){if(utils.gR&&(o.gO==void 0||o.features==void 0)){o.gO=new G;requestAnimationFrame(iO)}};requestAnimationFrame(iO);let f,a,c,o,n,l,b,p,x,y,z,q;function mSToTime(s){var p=(n,z=2)=>("00"+n).slice(-z);return(p((s/3.6e6)|0)+":"+p(((s%3.6e6)/6e4)|0)+":"+p(((s%6e4)/1000)|0)+"."+p(s%1000,3))}class cfng{constructor(){}rM={rD:2}}let cgf=new cfng;class M{constructor(){}rAM=()=>{const g=utils.fP(o?.gO.w.w,"ArrayList_0.i:1.0"),aL=utils.fP(g,"i:3")?.[1];aL?.forEach((e,index)=>{if(!f)f=utils.fP(e,"i:0")?.[0];if(!f)return;if(!a)a=utils.fP(e[f],"i:0")?.[0];if(!a)return;if(e?.[f]?.[a]){for(const t of e[f][a]){if(!c){c=utils.fP(t,"i:1")?.[0]}if(t[c]?.callableName==="removeMines"){const rM=aL[index+5][f][a][0][c];o=rM?.toString().split(".")[1].split(")")[0];return rM()}}}}};fD=(m)=>{if(!aL){aL=utils.fP(m,"i:3")?.[0];if(!aL)return}if(!x){let c=0;for(const e of m[aL].filter(utils.f)){if(!f||!a){f=utils.fP(e,"i:0")?.[0]||'';a=utils.fP(e[f],"i:0")?.[0];if(!f||!a)continue}}if(e?.[f]?.[a]){for(const t of e[f][a]){if(!c){c=utils.fP(t,"i:1")?.[0]}if(t[c]?.["callableName"]==="deactivateMine"){x
