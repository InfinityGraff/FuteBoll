// Dia 22/03/2025
// Dia 28/06/2025 (HexRGB)
// Dia 13/07/2025 (UpperCase) (Novas Funcs) (ExtraClass)
// Dia 03/08/2025 (Trazendo o templates.js) (SVG's)
// Dia 16/10/2025 (Inner Correção)
// Mask

// tem q da uma Ajeitadinha pra melhorar, e ter certeza se tudo Funciona
const Insert=e=>({ // Como Chamar a função: Insert('#onde botar').Befor ou .After('o que botar String ou Div','#depois de quem')
  Befor:(Stg,Stg2=null)=>{const r = $(Stg2,$(e)) ; typeof Stg === 'string'
    ? r ? $(e).insertBefore(document.createRange().createContextualFragment(Stg),r) : $(e).insertAdjacentHTML('beforeend',Stg)
    : r ? $(e).insertBefore(Stg,r) : $(e).appendChild(Stg)},
  After:(Stg,Stg2=null)=>{const r = $(Stg2,$(e)) ; typeof Stg === 'string'
    ? r ? r.insertAdjacentHTML('afterend',Stg) : $(e).insertAdjacentHTML('afterbegin',Stg)
    : r ? r.parentNode.insertBefore(Stg,r.nextSibling) : $(e).appendChild(Stg)}
})
const LOG=(...stg)=>console.log(...stg)
const ERR=(...stg)=>console.error(...stg)
const MS=IN=>{const ms = (performance.now()-IN) ; if(ms<0.5) ; if(ms<1000){return ms.toFixed(2)+'ms'} ; return (ms/1000).toFixed(2)+'s'}

//Retornos DOM________________________________________________________________________________________________________________
const     $ = (Stg,e=document)=>(typeof Stg==='string'?e.querySelector(Stg):Stg)
const    $$ = (Stg,e=document)=>(typeof Stg==='string'?Array.from(e.querySelectorAll(Stg)):Stg)
const   Inn = (e,Stg=null)=>{const el=$(e);return el?(Stg===null?el.innerHTML:(el.innerHTML=Stg)):undefined}
const   Vll = (e,Stg=null)=>{const el=$(e);return el?(Stg===null?el.value    :(el.value    =Stg)):undefined}
const    Nm = (e,stg=null)=>e?stg===null?e.getAttribute('name'):e.setAttribute('name',stg):undefined
const   $Tx = (Stg,e=document)=>$(Stg,e).textContent
const   $Vl = (Stg,e=document)=>$(Stg,e).value
const   VLl = e=>e.tagName === 'INPUT' ? (e.type === 'checkbox' ? e.checked : e.value) : e.innerText.trim()
const   llv =(e,v)=>{if(e.tagName === 'INPUT' && e.type === 'checkbox'){e.checked = typeof v === 'string' ? JSON.parse(v) : v;} else {e.value = v}}
const Clear = e=>[e].flat().forEach(el=>$(el).value='')
const  Inn_ = (e,Stg)=>$(e).innerHTML+=Stg
const   Src = (e,Stg)=>$(e).src = Stg
const   Txt = e=>e.innerText.trim()
const    Rx = arry=>FazArry(arry).map(e=>`[class*="${e}"]`).join('')
const   _td =e=>e.tagName==='TD'?e:e.closest('td')
const   _tr =e=>e.tagName==='TR'?e:e.closest('tr')
const   _th =e=>e.tagName==='TH'?e:e.closest('th')
const _table=e=>e.tagName==='TABLE'?e:e.closest('table')
const _tbody=e=>e.tagName==='TBODY'?e:e.closest('tbody')
const getClss   =(e,Stg)=>[...e.classList].find(c=>c.includes(Stg))   || null // pegar uma Element q a Class contem a String
const getClssIN =(e,Stg)=>[...e.classList].find(e=>e.startsWith(Stg)) || null // pegar uma Element q a Class inicia com a String

//Retornos DOM Parentes_______________________________________________________________________________________________________
const Parent=(e,n)=>Array(n).fill(0).reduce(p=>p.parentNode,e)
const Pai=e=>Parent(e,1), Avo=e=>Parent(e,2), Bzv=e=>Parent(e,3), Ttv=e=>Parent(e,4), Vo5=e=>Parent(e,5)
const SibNxt = e=>e?.nextElementSibling || null                                             // Retorna o próximo elemento irmão de 'e' (ou null se não houver)
const SibPrv = e=>e?.previousElementSibling || null                                         // Retorna o elemento irmão anterior de 'e' (ou null se não houver)
const SibIdx = (e,x)=>[...e?.parentElement?.children || []][x] || null                      // Retorna o irmão na posição 'x' dentro do mesmo pai de 'e' (ou null se não existir)
const SibQSl = (e,Q)=> [...e?.parentElement?.children || []].find(s=>s.matches(Q)) || null  // Retorna o primeiro irmão de 'e' que corresponde ao seletor CSS 'Q' (ou null se nenhum corresponder)
const SibAll = e=>[...e?.parentElement?.children || []].filter(s=>s!==e)                    // Retorna todos os irmãos de 'e', exceto o próprio 'e'

// Ações DOM___________________________________________________________________________________________________________________
const Onloads=e=>{$$('[onload]',$(e)).forEach(E=>{const on=E.getAttribute('onload').replace(/this/g,`$(E)`);eval(on)})} // Pega todas '*' com Onload de uma Div especifica, e Roda o Onload de cada
const Befor  =(e,Stg,Stg2)=>typeof Stg === 'string' ? $(e).insertAdjacentHTML('beforeend',Stg):$(e).insertBefore(Stg,$(Stg2,$(e)))
const After  =(e,Stg)=>$(e).insertAdjacentHTML('afterbegin',Stg)
const DltAll =e=>$$(e).forEach(e=>e.remove())
const InnAll =(Stg,e)=>$$(Stg).forEach(E=>E.innerHTML = e)
const NewTag =e=>document.createElement(e)
const NewImg =Src=>Object.assign(new Image(),{src:Src})
const NewDiv =Cls=>Object.assign(NewTag('div'),{className:Cls})
const Zindx  =e=>e.forEach((e,x,obj) => e.style.zIndex = obj.length-x) // acho q n funciona mais
const InnTogg=(e,Stg,Stg2)=>$(e).innerHTML = $(e).innerHTML===Stg?Stg2:Stg
const ValTogg=(e,Stg,Stg2)=>$(e).value     = $(e).value    ===Stg?Stg2:Stg
const Clen_Ipts=e=>$$('input', e).forEach(I=>I.value='')
const Clen_Slct=e=>$$('select',e).forEach(S=>S.selectedIndex=0)
const Clen_Alls=e=>{Clen_Ipts(e);Clen_Slct(e)}
const Foco   =e=>$(e).focus()
const FocoCh0=e=>$(e).children[0].focus()
const FocoIn =e=>e.focus()
const FocoOut=e=>{e.focus();e.setSelectionRange(e.value.length,e.value.length)}
const EntBlr=e=>KeyEntr(()=>e.blur()) // fazer Blur caso enter seja pressionado
const Prvn=()=>event.preventDefault()
const Prvn2 = ev=>(ev||event).preventDefault() // Acho q esse é melhor q o de cima

// Funções de Validações_______________________________________________________________________________________________________
const Is      =(e,stg)=>stg[0]==='.' ? Coten(e,stg.slice(1)) : stg[0]==='#' ? e.id===stg.slice(1) : e.tagName===stg.toUpperCase()
const Is_View = (e,total=false)=>{if(!e) return false;const r = e.getBoundingClientRect();return total ? (r.top >= 0 && r.left >= 0 && r.bottom <= innerHeight && r.right <= innerWidth) : (r.bottom >= 0 && r.right >= 0 && r.top <= innerHeight && r.left <= innerWidth)}
const View_Vid=e=>{FazArry(e).forEach(v=>{new IntersectionObserver(es=>v[es[0].isIntersecting?'play':'pause']()).observe(v)})}
const IsImgLod=img=>img.complete && img.naturalWidth !== 0
const UndfNull=e=>e===undefined||e===null
const NoVazi  =v=>v!=='' && v!==false && v!==undefined && v!==null // Não está vazio
const IsInp   =e=>'value' in e
const IsNum   =e=>typeof e==='number'
const IsCnv   =e=>e.tagName === 'CANVAS'
const KeyEntr =Call=>{if(event.code === 'Enter' || event.keyCode === 13){event.preventDefault();Call()}}
const KeyCtrl =e=>e.button == 0 && e.ctrlKey ? true : false
const Tecla   =k=>{const event = window.event;const keys  = {ctrl:event.ctrlKey,shift:event.shiftKey,alt:event.altKey};return keys[k]}
const isArr   =e=>Array.isArray(e)
const l0      =e=>e.length===0
const Bool    =e=>typeof e === 'boolean' ? e : e=='true'
const IsObj=e=>(typeof e === "object" && e !== null && !Array.isArray(e) && e.constructor === Object)
//Funções Check
const IsChkTru   =e=>e.checked==true
const IsChkFal   =e=>e.checked==false
const ChkTru     =e=>e.checked=true
const ChkFal     =e=>e.checked=false
const ChkTru_Clik=e=>{ChkTru(e) ; DispClick(e)}
const ChkFal_Clik=e=>{ChkFal(e) ; DispClick(e)}
const AddReqr=e=>e.forEach(e=>{$(e).required = true })
const EscReqr=e=>e.forEach(e=>{$(e).required = false})
const Coten =(e,Clss)=> FazArry(Clss).some(E=>e.classList.contains(E)) // NEXBEE
const Noten =(e,Clss)=>!FazArry(Clss).some(E=>e.classList.contains(E)) // NEXBEE
const TestPass = (e,ignore=[]) => ["Não pode estar vazio","Ter pelo menos 8 caracteres","Ter pelo menos uma letra maiúscula","Ter pelo menos um caractere especial"].map((l,i)=>(!ignore.includes(i) && ![+!!e,+!!(e.length>=8),+(/[A-Z]/.test(e)&&e.length>1),+(/[!@#$%^&*(),.?":{}|<>]/.test(e)&&e.length>1)][i] ? l : null)).filter(Boolean) // no segundo argumento posso iguinorar alguma condição
const TestEmail=e=>["@gmail.com","@yahoo.com","@yahoo.co.uk","@outlook.com","@hotmail.com","@live.com","@icloud.com","@me.com","@aol.com","@protonmail.com","@zoho.com","@mail.com","@gmx.com","@yandex.com"].some(E=>e.endsWith(E))

//Display Show None________________________________________________________________________________________________________________
function FazArry(e){return Array.isArray(e)?e:e instanceof HTMLCollection||e instanceof NodeList?Array.from(e):/^\./.test(e)?$$(e):[e]}
function None(e,b){if(b){Show(b)};FazArry(e).forEach(E=>{if(typeof E==='string'){const EE=$(E);EE.style.display='none'}else{E.style.display='none'}})}
function Show(e,b){if(b){None(b)};FazArry(e).forEach(E=>{if(typeof E==='string'){const EE=$(E);EE.style.display='flex'}else{E.style.display='flex'}})}
function ShowTrue(e,Valid,b=null){if(Valid){Show(e);if(b!==null){None(b)}}else{None(e);if(b!==null){Show(b)}}}
function NoneTrue(e,Valid,b=null){if(Valid){None(e);if(b!==null){Show(b)}}else{Show(e);if(b!==null){None(b)}}}
function NoneTruE(e,Valid){if(Valid){None(e)}else{Show(e)}}
const ENone=e=>window.getComputedStyle($(e)).display==='none'
const EShow=e=>window.getComputedStyle($(e)).display!=='none'
function TogNone(e){ENone($(e))?Show($(e)):None($(e))}
function TogShow(e){EShow($(e))?None($(e)):Show($(e))}
const ShowTime=(e,sec)=>{Show(e);setTimeout(()=>{None(e)},sec*1000)}
const NoneTime=(e,sec)=>{None(e);setTimeout(()=>{Show(e)},sec*1000)}
const TrcFih=e=>Filh(Pai(e)).forEach(f=>{if(f===e){None(f)}else{Show(f);f.focus()}}) // Oculta o Atual e exibe o Resto Funciona melhor com 2 Filhos


// Funções de CSS ________________________________________________________________________________________________________________
const Add=(e,Stg)=>FazArry(e).forEach(E=>E.classList.add(Stg))
const Rmv=(e,Stg)=>FazArry(e).forEach(E=>E.classList.remove(Stg))
const Tog=(e,Stg)=>FazArry(e).forEach(E=>E.classList.toggle(Stg))
const TrcTog=(e,s1,s2)=>{FazArry(e).forEach(E=>{Tog(E,s1) ;Tog(E,s2 )})}
const Trc =(e,add,rmv)=>{FazArry(e).forEach(E=>{Add(E,add);Rmv(E,rmv)})}
const Trc2=(e,add,rmv)=>{Add($(e),add);Rmv($(e),rmv)}
const TrcCls=(c1,c2)=>{const add = $$(c1).length === 0 ? c1 : c2;const rmv = add === c1 ? c2 : c1;Trc($$(rmv), add, rmv)}
const ATV=(a,b)=>{if(b){Rmv($(b),'Atv')} ; Add($(a),'Atv')}
const DTV=(a,b)=>{if(b){Add($(b),'Atv')} ; Rmv($(a),'Atv')}
const TOV=(a  )=>Tog($(a),'Atv')
const DarkLite=e=>{TrcTog($(e),'Dark','Lite')}
const Add_N=e=>FazArry(e).forEach(el=>Add(el,'none'))
const Rmv_N=e=>FazArry(e).forEach(el=>Rmv(el,'none'))
const Tog_N=e=>FazArry(e).forEach(el=>Tog(el,'none'))
const AddTrue=(Div,Stg,Valid)=>Valid ? Add(Div,Stg) : Rmv(Div,Stg)
const RmvTrue=(Div,Stg,Valid)=>Valid ? Add(Div,Stg) : Rmv(Div,Stg)
const ATVtrue=(Div    ,Valid)=>Valid ? ATV(Div)     : DTV(Div)

//Funções de Objeto e Array____________________________________________________________________________________________________
const ObjKey =e=>Object.keys(e)                              // Converte todos Keys de Objetos em um array
const ObjVal =e=>Object.values(e)                            // Converte todos value de Objetos em um array
const ObjEtr =e=>Object.entries(e)                           // Converte um objeto em um array de pares [key,val]
const For    =e=>Array.from({length:e},(_,x)=>x)             // Converte 'number' em um array de 0 até 'number'
const Fbj    =obj=>For(ObjKey(obj).length)                   // Faz a Mesma coisa só que com a Chave do Objeto
const IdxDe  =e=>Array.from(Pai(e).children).indexOf(e)      // Passo (div) Retorna o Index dela
const Filh   =e=>Array.from($(e).children)                   
const FIdx   =(Arr,Stg)=>Arr.findIndex(e=>e===Stg)           // Retorna o Index de um item em um array baseado na String
const ObjOrdn=(obj,Arr)=>Arr.map(k=>obj[k]).filter(v=>v!==undefined) // Ordena key de Objeto de acordo com um array
const MAX=(arry,K)=>arry.reduce((max,e)=>Math.max(max,e[K]),0) // Retorna o Maior numero de uma determinada Posição de um Objeto
const UniqArry=(arr,chk)=>chk?arr.filter((e,x,eu)=>eu.findIndex(a=>a[0]===e[0])===x):Array.from(new Set(arr.map(JSON.stringify)),JSON.parse)
const Uniq=arr=>[...new Set(arr)]                            // cria um array com valores Unicos
const ObjTem=(obj,Stg)=>obj?obj[Stg]:null                    // se o Objeto Existir então Chama uma Propiredade dele
const OBJtem=obj=>obj?obj:null
const MaxNum=e=>e.reduce((a,b)=>(Number(a)>Number(b)?Number(a):Number(b)))
const SOMA=(Arry,Call)=>Arry.reduce((sum,e)=>sum+(Call?Number(Call(e)):Number(e)),0)
const SOMA_Obj=(ArrObj,Key)=>ArrObj.reduce((soma,obj)=>Number(soma)+Number(obj[Key]||0),0) // somar todos os valores de um determinado key [CRIEI UMA NOVA Q TÁ NO LIBGRAFF]
const Angrm=arr=>arr.length===0?[[]]:arr.flatMap((e,x)=>Angrm([...arr.slice(0,x),...arr.slice(x+1)]).map(i=>[e,...i]))
const ArrObj_ArrArr=(obj)=>{const keys = ObjKey(obj[0]);const sortedObj = obj.map(e=>ObjEtr(e).sort((a,b)=>keys.indexOf(a[0]) - keys.indexOf(b[0])).map(entry=>entry[1]));return [keys,...sortedObj]}
const cRepet  =arr=>arr.reduce((acc,e)=>{acc[e]=(acc[e] || 0) + 1 ; return acc},{}) // Conta quantas vezes cada item aparece no array
const cRepetID=arr=>arr.reduce((acc,e)=>{const k=e.Id ; acc[k] = (acc[k] || 0) + 1 ; return acc;},{}) // Conta quantas vezes cada Id aparece no array de objetos
const OrdnCol=(arar,ord)=>arar.map(row=>ord.map(col=>row[arar[0].indexOf(col)])) // Reordena as Colunas de uma Tabela (a Ordem das colunas futuramente vai ser Definida pelo Usuário)
const zipObj=(Key,Val)=>Object.fromEntries(Key.map((k,x)=>[k,Val[x]])) // Cria um obj a partir de dois array: um de chaves (keys) e outro de valores (values). // Exemplo: zipObj(['a','b'], [1,2]) => { a: 1, b: 2 }
const NULL__=a=>a.map(o=>Object.fromEntries(Object.entries(o).map(([k,v])=>[k,v??""])))
const SOMA_Obj2 = (ArrObj, Key) => Array.isArray(ArrObj) ? ArrObj.reduce((soma, obj) => Number(soma) + Number(obj[Key] || 0), 0) : 0;  // ESSA JÁ TAVA LÁ ANTES


//FuncStorage________________________________________________________________________________________________________________
const StogeGet=e=>localStorage.getItem(e)
const StogeRmv=e=>localStorage.removeItem(e)
const StogeSet=(e,val)=>localStorage.setItem(e,val)

// Funções de Rects________________________________________________________________________________________________________________
const Rect=e=>e.getBoundingClientRect()
const RectL=e=>Rect(e).left
const RectT=e=>Rect(e).top
const RectW=e=>Rect(e).width
const RectH=e=>Rect(e).height
const RectB=e=>Rect(e).bottom
const RectR=e=>Rect(e).right

//Funções de Disparar Eventos__________________________________________________________________________________________________
const DisparoInpt = new Event('input',{bubbles:true})
const DispClick=e=>e.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}))

//Funções Conversor de Valores_________________________________________________________________________________________________
const    Ared = e=> Math.floor(e)
const      Cm = e=> parseFloat(e).toFixed(2).replace('.',',')
const      RS = e=> `R$ ${Cm(e)}`
const   Tm_RS = e=>`<div class="Ct"><p class="RS">R$</p><a>${Cm(e)}</a></div>`
const     Num = e=>e==null?0:typeof e==='number'?isNaN(e)?0:e:typeof e!=='string'?0:((t=e.trim())==''?'':t=='--'?0:((n=parseFloat(t.replace(/R\$\s?/gi,'').replace(/\./g,'').replace(',','.'))),isNaN(n)?0:n))
const  CalcMB = e=>Num((new Blob([JSON.stringify(e)]).size/1024).toFixed(2)) // Calcula quantos MB o arquivo tem
const     Pct = e=>`${(e*100).toFixed(2)}%`   // Sem USO
const    Virg = e=>e.replace('.',',')         // Sem USO
const    Zero = e=>String(e).padStart(3,'0')  // Sem USO
const Porcent = (V1,V2)=>((V1-V2)/V1)*100     // Sem USO
const LocPcnt = (parte,total)=>(parte/total)  // Sem USO

//Funções Conversor de Strings_________________________________________________________________________________________________
const aa=Stg=>Stg.toLowerCase()
const AA=Stg=>Stg.toUpperCase()
const Aa=Str=>Str[0].toUpperCase()+Str.slice(1).toLowerCase()
const CleaAsps=e=>e.replace(/\*.*\*/,'').replace("*",'')
const BrevData=Stg=> Stg.match(/\d{2}\/\d{2}\/\d{4}/) ? Stg.replace(/\/\d{4}$/,'') : Stg // Remover o ano 2024 de uma String Data
const DMY=e=>e.split('-').reverse().join('/') // Muda String YYYY-MM-DD para DD/MM/YYYY
const YMD=e=>e.split('/').reverse().join('-') // Muda String DD/MM/YYYY para YYYY-MM-DD
const RgbToHex =rgb=>`#${rgb.replace(/^rgb\(|\s+|\)$/g,'').split(',').map(x=>parseInt(x).toString(16).padStart(2,'0')).join('')}`
const hexToRGB =hex=>{const [r,g,b]=hex.slice(1).match(/.{2}/g).map(h=>parseInt(h,16)) ; return `rgb(${r},${g},${b})`}
const hexToRGB2=hex=>{const [r,g,b]=hex.slice(1).match(/.{2}/g).map(h=>parseInt(h,16)) ; return `${r},${g},${b}`}
const RGBa=(e,op=0.2)=>{const [r,g,b]=getComputedStyle(e).backgroundColor.match(/\d+/g) ; e.style.backgroundColor = `rgba(${r},${g},${b},${op})`}
// Funções de Replace
const RxRepeti = e=>e.replace(/(.)\1+/g,'$1')                               // Remove letras repetidas seguidas (ex: "booom" → "bom")
const RxEspaco = e=>e.trim().replace(/\s+/g,' ')                            // Remove espaços extras (início/fim e múltiplos espaços internos)
const RxAcento = e=>e.normalize('NFD').replace(/[\u0300-\u036f]/g,'')       // Remove acentos (ex: "ação" → "acao")
const RxPlural = e=>e.replace(/ão$|ões$|ao$|oes*$/,'ao').replace(/s*$/i,'') // Converte plurais para singular genérico (ex: "ações" → "acao")
const NewRegex = e=>new RegExp(e.split('').map(e=>e+'.{0,3}').join(''),'i') // Transforma String num Regex Conciderando esse Criterio de .{0,3}
const RxClear  = s=>RxPlural(RxAcento(RxRepeti(RxEspaco(aa(s)))))           // chama todos os Replaces
const EscpRgx  = s=>s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')               // Escapa símbolos de regex (.+*?^$()[] etc.) para uso literal em uma RegExp
const RmvPlural= s=>s.endsWith('ões')?s.slice(0,-3)+'ão':s.endsWith('ães')?s.slice(0,-3)+'ão':s.endsWith('is')?s.slice(0,-2)+'l':s.endsWith('res')?s.slice(0,-1):s.endsWith('s')&&s.length>2?s.slice(0,-1):s
const QntTempo = data => {
  const d = new Date(data), ms = Date.now() - d, m = 6e4, h = 36e5, d1 = 864e5;
  if (isNaN(d)) return '-';
  if (ms < m) return 'agora mesmo';
  const n = (v,u,s) => `há ${v} ${u}${v>1?s||'s':''}`;
  if (ms < h)   return n(Math.floor(ms/m),'minuto');
  if (ms < d1)  return n(Math.floor(ms/h),'hora');
  const dias = Math.floor(ms/d1);
  if (dias === 1) return 'ontem';
  if (dias < 7)   return n(dias,'dia');
  if (dias < 30)  return n(Math.floor(dias/7),'semana');
  if (dias < 365) return n(Math.floor(dias/30),'mês','es');
  return n(Math.floor(dias/365),'ano');
}

// Funções de Eventos__________________________________________________________________________________________________________
const EvtChng=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('change',Call))
const EvtInpt=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('input' ,Call))
const EvtClik=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('click' ,Call))
const EvtFocs=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('focus' ,Call))
const EvtBlur=(e,Call)=>FazArry(e).forEach(e=>e.addEventListener('blur'  ,Call))
const RmvChng=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('change',Call))
const RmvInpt=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('input' ,Call))
const RmvClik=(e,Call)=>FazArry(e).forEach(e=>e.removeEventListener('click' ,Call))
const Copy   =(area,stg)=>{area.value = stg ; area.select() ; document.execCommand('copy') ; console.log('Copiado')}
const ClickFora=(e,Call)=>{const H=(E)=>!e.contains(E.target) && (Call(),RmvClik(document,H));EvtClik(document,H)}
const OBS    =(e,Call,p=null)=>new MutationObserver(()=>Call()).observe(e,{attributes: true,attributeFilter: p && Array.isArray(p) ? p : undefined})

//Funções Geradores____________________________________________________________________________________________________________
const Rndn    =e=>Math.floor(Math.random()*e)
const Randomm =(min,max)=>Rndn((max-min+1))+min
const RandoCor=()=>'#'+Rndn(16777215).toString(16).padStart(6,'0')
const GerarID =()=>`ID-${Rndn(900)+100}`
const GerarIT =()=>`IT-${Rndn(900)+100}`
const Dat     =e =>new Date(e)
const HOJE    =()=>new Date().toLocaleDateString('pt-BR')
const AGORA   =()=>`${HOJE()} ${new Date().toLocaleTimeString('pt-BR')}`

//Controlador de Cursor__________________________________________________________________________________________________________
const AplyRng = r=>(getSelection().removeAllRanges(),getSelection().addRange(r))
const CurAll  = e=>AplyRng((r=document.createRange(),r.selectNodeContents(e),r)) // Seleciona Tudo
const CurEnd  = e=>AplyRng((r=document.createRange(),r.selectNodeContents(e),r.collapse(false),r)) // vai pra o Fim da Linha

// Mask________________________________________________________________________________________________
const Mask = {
  cpf   :i=>{if(i.value.length > 14) i.value = i.value.substring(0,14); i.value = i.value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{2})$/,'$1-$2')},
  fone  :i=>{if(i.value.length > 15) i.value = i.value.substring(0,15); i.value = i.value.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2')},
  data  :i=>{if(i.value.length > 10) i.value = i.value.substring(0,10); i.value = i.value.replace(/\D/g,'').replace(/(\d{2})(\d)/,'$1/$2').replace(/(\d{2})(\d{4})$/,'$1/$2')},
  cep   :i=>{if(i.value.length > 10) i.value = i.value.substring(0,10); i.value = i.value.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2')},
  RS    :e=>{let v=(IsInp(e)?Vll(e):Inn(e)).replace(/\D/g,'').padStart(3,'0');let r=v.slice(0,-2),c=v.slice(-2);let m=`R$ ${parseInt(r).toLocaleString('pt-BR')},${c}`;if(IsInp(e))Vll(e,m);else Inn(e,m);if(!IsInp(e)){CurEnd(e)}},
  Num   :e=>{
    const I = IsInp(e)
    let v = ( I ? Vll(e) : Inn(e)).replace(/\D/g,'').replace(/^0+(?=[1-9])/,'')
    if (!v) { I ? Vll(e,'') : Inn(e,'') ; if (!I) CurEnd(e); return }
    const n = v.length
    let m = n < 3 ? '0,' + v.padStart(2,'0'):v.slice(0,Math.min(2,n-2))+','+v.slice(-2)
    if (n > 5) m = m.slice(0,5)
      I ? Vll(e,m) : Inn(e,m)
    if (!I) CurEnd(e)
  }
}

// Funções de Templates________________________________________________________________________________________________________
// Daqui pra Baixo são Funções Gerais que Possuem Class, Id, e CSS particulares, tem que ter cuidado ao Usar algo Daqui!
// Mas só de Importar este PreScript pode dar conflito no HTML q estiver usando isso.
// então Logo Abaixo Listarei as Class e Id que já estarão em USO
const SVG={
    Ponta:`<svg class="svg-Ponta" style="" viewBox="0 0 258 128"><path d="M161 15l98 113H0l98-113c17-20 46-20 63 0z"/></svg>`
    ,Lixo:`<svg class="svg-Lixo HOV PT" viewBox="0 0 153 188"><path d="M23.79 58.73h105.45v104.31c0 7.2-4.5 12.71-11.59 12.71H35.39c-7.09 0-11.59-5.52-11.59-12.71V58.73zm114.05-35.52h-31.78c0-7.46 1.94-16.7-5.52-21.4-3.5-2.2-5.95-1.78-11.3-1.78H63.07c-5.39 0-7.6-.26-11.01 2.08-6.38 4.37-5.07 11.01-5.07 21.1H23.79c-8.38 0-15.77-.9-20.11 3.45-5.02 5.03-3.44 13.69-3.46 20.12-.02 6.66 5.04 11.95 11.61 11.95v96.84c0 17.45 3.04 32.52 23.34 32.31h88.8c16.48-5.1 17.23-16.74 17.23-31.37V58.73c4.29 0 7.53-2.29 9.42-4.79 2.51-3.33 2.18-6.8 2.18-12.4 0-5.48.63-8.95-1.71-12.5-3.31-5.03-7.86-5.83-13.25-5.82zm-38.14 65.8v68.42c0 9.57 11.97 8.38 11.97 1.87v-72.16c0-6.23-11.97-8.14-11.97 1.87zm-58.33-1.87v72.16c0 6.18 11.97 8.15 11.97-1.87v-68.42c0-9.91-11.97-8.13-11.97-1.87zm29.17.75v70.66c0 7.77 11.97 7.77 11.97 0v-70.66c0-7.88-11.97-7.88-11.97 0zm-51.23-52.72h114.42c9.88 0 8.72 11.59 1.12 11.59H22.49c-7.65 0-8.7-11.59 1.12-11.59zm45.62-23.18h23.18c6.74 0 5.98 6.88 5.98 11.22H63.12c0-4.61-.67-11.22 5.98-11.22z"/></svg>`
    ,Chek:`<svg viewBox="0 0 568 413"><path d="M207 265l-110-118c-63-67-129 13-81 64l187 201 342-319c60-56-15-128-71-76l-267 247z"/></svg>`
    ,Fexa:`<svg class="HOV PT" viewBox="0 0 7899.71 7899.71"><path d="M7636.53 274.37c351.27,351.27 350.54,925.58 0,1276.12l-2396.94 2396.99 2389.65 2389.6c355.18,355.23 355.18,936.88 0,1292.1l0 0c-355.23,355.23 -936.88,355.23 -1292.1,0l-2389.65 -2389.6 -2396.99 2396.94c-351.22,351.27 -925.58,350.54 -1276.12,0 -351.22,-351.22 -350.54,-925.58 0,-1276.12l2396.99 -2396.94 -2404.9 -2404.96c-355.23,-355.23 -355.23,-936.88 0,-1292.1l0 0c355.23,-355.18 936.88,-355.18 1292.1,0l2404.9 2404.96 2396.94 -2396.99c351.27,-351.22 925.58,-350.54 1276.12,0z"/></svg>`
    ,Mais:`<svg class="HOV PT" viewBox="0 0 110.89 110.89"><path d="M55.57 0c5.29,0 9.61,4.33 9.61,9.61l0 36.1 35.99 0c5.35,0 9.73,4.38 9.73,9.73l0 0c0,5.35 -4.38,9.73 -9.73,9.73l-35.99 0 0 36.1c0,5.29 -4.33,9.61 -9.61,9.61 -5.29,0 -9.61,-4.33 -9.61,-9.61l0 -36.1 -36.22 0c-5.35,0 -9.73,-4.38 -9.73,-9.73l0 -0c0,-5.35 4.38,-9.73 9.73,-9.73l36.22 0 0 -36.1c0,-5.29 4.33,-9.61 9.61,-9.61z"/></svg>`
    ,Cler:`<svg class="HOV PT" viewBox="0 0 453.06 566.32"><path d="M336.56 534.94c0,-12.86 4.72,-45.31 7.22,-58.09 3.37,-17.19 8.05,-34.07 13.92,-49.97 5.95,-16.12 10.91,-31.05 18.12,-45.81l20.49 -43.58c-3.83,-4.8 -51.72,-31.07 -56.93,-34.24 -19.35,-11.81 -38.19,-21.81 -57.45,-33.5l-114.96 -66.94c-5.53,8.34 -10.46,16.49 -16.52,25.12 -9.02,12.84 -25.66,35.07 -36.85,46.5 -13.23,13.51 -28.58,28.68 -43.03,40.19 -7.78,6.19 -15.12,12.09 -23.21,18.48 -8.64,6.83 -15.08,11.65 -23.52,18.04 -7.84,5.93 -15.65,12.15 -23.85,17.75l45.61 49.38c2.73,2.55 28.72,25.46 30.76,25.37 5.84,-0.26 75.27,-76.16 86.73,-83.9 -1.23,5.33 -11.1,21.2 -14.24,27.47 -4.49,8.98 -9.79,17.46 -14.23,26.15 -2.34,4.58 -4.64,8.35 -7.35,13.51 -2.7,5.13 -4.65,8.46 -7.32,13.52 -3.42,6.46 -12.51,20.96 -13.81,26.58l38.52 23.87c54.48,31.83 131.58,61.01 193.19,75.51l-1.29 -31.38zm-152.75 -355.67c0,14.78 9.93,19.46 19.35,24.91l137.75 80.49c11.18,6.47 45.16,29.29 57.78,29.29 17.31,0 37.54,-43.36 37.54,-51 0,-9.35 -3.05,-15.99 -10.35,-20.94l-155.1 -90.45c-11.88,-7.24 -22.79,-12.95 -34.41,-20.16 -5.57,-3.46 -13.03,-4.75 -20.66,-2.38 -7.38,2.29 -10.63,6.69 -14.22,13.17 -5.09,9.21 -17.69,27.17 -17.69,37.08zm124.27 -28.77c4.83,3.27 10.32,6.11 15.46,9.23l47.97 27.39 52.03 -91.28c3.73,-6.28 6.6,-12.06 10.34,-18.32 7.02,-11.75 19.18,-28.13 19.18,-42.09 0,-15.67 -15.58,-21.86 -30.64,-30.51 -28.77,-16.51 -37.53,11.41 -54.01,40.49l-29.79 52.24c-1.35,2.27 -2.76,4.04 -4.11,6.31 -1.65,2.78 -2.03,3.94 -3.67,6.75l-22.75 39.78z"/></svg>`
   ,Tempo:`<svg class="HOV PT" viewBox="0 0 6121.17 6121.95"><path class="fil0" d="M5496.46 3335.94c-46.14,352.73 -155.86,662.25 -292.31,920.64 -116.73,221.03 -355.09,513.98 -555.62,675.41 -433.38,348.91 -1090.47,668.54 -1857.96,563.08 -1277.26,-175.5 -2316.58,-1233.52 -2156.47,-2719.06 134.55,-1248.51 1278.98,-2308.86 2723.93,-2143.19 1221.6,140.06 2322.72,1294.47 2138.43,2703.12zm-2735.81 0c196.26,173.3 1347.75,865.1 1607.95,992.39l207.93 -358.87c-205.44,-211.81 -1143.17,-641.16 -1359.62,-844.7l-0.71 -1584.16 -455.44 -4.73 -0.11 1800.06zm-2749.06 0c136.73,1606.26 1529.83,2910.38 3320.29,2776.56 1610.56,-120.37 2927.63,-1562.46 2777.62,-3340.64 -133.51,-1582.67 -1559.4,-2907.78 -3320.07,-2760.67 -1592.89,133.08 -2928.24,1557.99 -2777.84,3324.75z"/></svg>`
   ,Crop :(Clss,tog)      =>`<svg class="${Clss}" viewBox="0 0 152.96 152.96  "><g><path d="M152.96 126.63l-22.5 0 0 -14.4 22.5 0 0 14.4zm-152.96 -100.31l22.5 0 0 14.4 -22.5 0 0 -14.4zm42.2 -26.32l0 112.23 63.07 0 0 14.4 -77.29 0 0 -126.63 14.21 0zm68.56 152.96l0 -112.23 -63.07 0 0 -14.4 77.29 0 0 126.63 -14.21 0z"/><polygon class="Croped ${tog}" points="47.68,106.62 105.17,106.62 105.17,46.34 47.68,46.34 "/></g></svg>`
   ,Aling:(Clss,Cor1,Cor2)=>`<svg class="${Clss}" viewBox="0 0 1115.04 1115.03"<g><rect style="fill:white" transform="matrix(1.78337E-14 -0.131706 0.673364 3.48817E-15 518.703 658.109)" width="1527.55" height="115.29"/><circle style="fill:${Cor1}" cx="557.52" cy="238.6" r="161.42"/><circle style="fill:${Cor2}" cx="557.52" cy="876.43" r="161.42"/><rect x="0" y="-0" width="1115.04" height="1115.04"/></g></svg>`
   ,RszH:`<svg class="HOV PT" viewBox="0 0 2.62 4.56"><path class="fil0" d="M1.02 1.67l0 1.23 0 0.63 -0.64 -0.63c-0.07,0.05 -0.35,0.32 -0.39,0.37l1.31 1.3 1.3 -1.3 -0.37 -0.38c-0.11,0.08 -0.51,0.5 -0.64,0.63l0 -0.62 0 -1.23 0 -0.62c0.13,0.13 0.53,0.56 0.64,0.63l0.37 -0.38 -1.3 -1.3 -1.31 1.3c0.04,0.05 0.31,0.32 0.39,0.37l0.64 -0.63 0 0.63z"/></svg>`
   ,RszW:`<svg class="HOV PT" viewBox="0 0 8.33 4.78"><path class="fil0" d="M3.04 2.92l2.25 0 1.14 0 -1.15 1.16c0.09,0.13 0.58,0.64 0.68,0.7l2.38 -2.4 -2.37 -2.38 -0.69 0.68c0.14,0.21 0.92,0.94 1.16,1.17l-1.14 0 -2.25 0 -1.14 0c0.24,-0.23 1.01,-0.96 1.16,-1.17l-0.69 -0.68 -2.37 2.38 2.38 2.4c0.1,-0.06 0.59,-0.57 0.68,-0.7l-1.15 -1.16 1.14 0z"/></svg>`
   ,List:`<svg class="HOV PT" viewBox="0 0 6.69 4.74"><path class="fil0" d="M1.58 4.48l5.11 0 0 -0.53 -5.11 0 0 0.53zm-1.58 -0.56l0 0.59c0,0.1 0.13,0.23 0.23,0.23l0.59 0c0.1,0 0.23,-0.13 0.23,-0.23l0 -0.59c0,-0.1 -0.13,-0.23 -0.23,-0.23l-0.59 0c-0.1,0 -0.23,0.13 -0.23,0.23zm0 -1.84l0 0.59c0,0.1 0.13,0.23 0.23,0.23l0.59 0c0.1,0 0.23,-0.13 0.23,-0.23l0 -0.59c0,-0.1 -0.13,-0.23 -0.23,-0.23l-0.59 0c-0.1,0 -0.23,0.13 -0.23,0.23zm0 -1.84l0 0.59c0,0.1 0.13,0.23 0.23,0.23l0.59 0c0.1,0 0.23,-0.13 0.23,-0.23l0 -0.59c0,-0.1 -0.13,-0.23 -0.23,-0.23l-0.59 0c-0.1,0 -0.23,0.13 -0.23,0.23zm1.58 2.4l5.11 0 0 -0.53 -5.11 0 0 0.53zm0 -1.84l5.11 0 0 -0.53 -5.11 0 0 0.53z"/></svg>`
   ,Card:`<svg class="HOV PT" viewBox="0 0  9.9 6.88"><path class="fil0" d="M0.54 5.39l0 -3.86c0,-0.55 0.36,-0.94 0.74,-0.94l7.22 0c0.45,0 0.79,0.34 0.79,0.79l0 4.16c0,0.17 -0.16,0.45 -0.26,0.53 -0.12,0.1 -0.37,0.21 -0.58,0.21l-7.07 0c-0.48,0 -0.84,-0.42 -0.84,-0.89zm0.78 -3.39c0.11,0.11 0.26,0.3 0.57,0.3l6.01 0c0.91,0 0.9,-0.59 -0.1,-0.59l-5.72 0c-0.49,0 -0.59,0.13 -0.76,0.3zm3.97 3.73l2.97 0c0.5,0 0.53,-0.59 0.05,-0.59l-3.12 0c-0.32,0 -0.42,0.59 0.1,0.59zm-0.4 -1.58c0.06,0.11 0.13,0.3 0.3,0.3l3.12 0c0.47,0 0.47,-0.59 -0.05,-0.59l-2.97 0c-0.26,0 -0.31,0.13 -0.4,0.3zm-3.76 -0.64l0 1.98c0,0.19 0.24,0.25 0.45,0.25l1.93 0c0.54,0 0.4,-0.54 0.4,-1.43 0,-0.25 -0.59,-0.49 -0.59,0.2l0 0.64 -1.63 0 0 -1.29c0.67,0 1.43,0.13 1.43,-0.3 0,-0.43 -0.96,-0.3 -1.53,-0.3 -0.2,0 -0.45,0.05 -0.45,0.25zm8.03 -3.34c-0.36,-0.2 -1.16,-0.17 -1.63,-0.17l-6.11 0c-0.78,0 -1.43,0.66 -1.43,1.29l0 4.3c0,0.42 0.3,0.79 0.56,0.98 0.31,0.23 0.71,0.31 1.22,0.31l6.33 0c1.06,0 1.78,-0.46 1.78,-1.58l0 -3.02 0 0c0.01,-0.74 0.03,-1.69 -0.73,-2.11z"/></svg>`
   ,Grid:`<svg class="HOV PT" viewBox="0 0 165.77 165.78"><path class="fil0" d="M71.95 71.95l0 -71.8c-78.71,0 -71.8,-6.9 -71.8,71.8l71.8 0zm21.87 -71.8l0 71.8 71.8 0c0,-78.75 6.93,-71.8 -71.8,-71.8zm0 93.67l0 71.8c78.73,0 71.8,6.93 71.8,-71.8l-71.8 0zm-21.87 71.8l0 -71.8 -71.8 0c0,78.71 -6.9,71.8 71.8,71.8z"/></svg>`
   ,Gris:`<svg class="HOV PT" viewBox="0 0 165.77 165.78"><path class="fil0" d="M71.95 71.95l0 -71.8c-78.71,0 -71.8,-6.9 -71.8,71.8l71.8 0zm21.87 -71.8l0 71.8 71.8 0c0,-78.75 6.93,-71.8 -71.8,-71.8zm0 93.67l0 71.8c78.73,0 71.8,6.93 71.8,-71.8l-71.8 0zm-21.87 71.8l0 -71.8 -71.8 0c0,78.71 -6.9,71.8 71.8,71.8z"/></svg>`
   ,Gemn:`<svg class="HOV PT" viewBox="0 0 192.32 192.32"><path class="fil0" d="M-0 96.16c70.01,-17.75 75.96,-31.07 96.16,-96.16 20.2,65.09 26.15,78.41 96.16,96.16 -70.01,17.75 -75.96,31.07 -96.16,96.16 -20.2,-65.09 -26.15,-78.41 -96.16,-96.16z"/></svg>`
   ,Blok:`<svg class="HOV PT" viewBox="0 0 200.69 203.34"><path class="fil0" d="M117.03 0l73.8 0c5.43,0 9.87,4.44 9.87,9.87l0 73.8c0,5.43 -4.44,9.86 -9.87,9.86l-73.8 0c-5.43,0 -9.86,-4.44 -9.86,-9.86l0 -73.8c0,-5.43 4.44,-9.87 9.86,-9.87zm-107.16 0l73.8 0c5.43,0 9.87,4.44 9.87,9.87l0 73.8c0,5.43 -4.44,9.86 -9.87,9.86l-73.8 0c-5.43,0 -9.87,-4.44 -9.87,-9.86l0 -73.8c0,-5.43 4.44,-9.87 9.87,-9.87zm107.16 109.81l73.8 0c5.43,0 9.87,4.44 9.87,9.87l0 73.8c0,5.43 -4.44,9.87 -9.87,9.87l-73.8 0c-5.43,0 -9.86,-4.44 -9.86,-9.87l0 -73.8c0,-5.43 4.44,-9.87 9.86,-9.87zm-107.16 0l73.8 0c5.43,0 9.87,4.44 9.87,9.87l0 73.8c0,5.43 -4.44,9.87 -9.87,9.87l-73.8 0c-5.43,0 -9.87,-4.44 -9.87,-9.87l0 -73.8c0,-5.43 4.44,-9.87 9.87,-9.87z"/></svg>`
   ,Alvn:`<svg class="HOV PT" viewBox="0 0 142.87 141.84"><path class="fil0" d="M83.27 0l52.57 0c3.87,0 7.03,3.03 7.03,6.74l0 75.96c0,3.71 -3.16,6.74 -7.03,6.74l-52.57 0c-3.87,0 -7.03,-3.03 -7.03,-6.74l0 -75.96c0,-3.71 3.16,-6.74 7.03,-6.74zm-78.97 0l58.02 0c2.37,0 4.3,1.94 4.3,4.3l0 32.19c0,2.37 -1.93,4.3 -4.3,4.3l-58.02 0c-2.37,0 -4.3,-1.94 -4.3,-4.3l0 -32.19c0,-2.37 1.94,-4.3 4.3,-4.3zm76.42 99.41l57.68 0c2.46,0 4.47,2.01 4.47,4.47l0 33.49c0,2.46 -2.01,4.47 -4.47,4.47l-57.68 0c-2.46,0 -4.48,-2.01 -4.48,-4.47l0 -33.49c0,-2.46 2.01,-4.47 4.48,-4.47zm-73.69 -49.03l52.57 0c3.87,0 7.03,3.16 7.03,7.03l0 77.42c0,3.86 -3.16,7.03 -7.03,7.03l-52.57 0c-3.87,0 -7.03,-3.16 -7.03,-7.03l0 -77.42c0,-3.86 3.16,-7.03 7.03,-7.03z"/></svg>`
   ,Past:`<svg class="HOV PT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>`
}



const SynChk=(Eu   )=>{const C=$('input',Eu);C.checked = !C.checked} // isso é uma Gambiarra q precisa ser Removida (ela não precisava a conteceer se eu conseguisse usar label ao invés de div, mas usando label dispara 2 vezes) ai preferir assim, mas div não dar o evento de check, então tive que fazer manualmente
const Tm_th     =(e,arr)=>Inn(e,arr.map(a=>`<th>${a}</th>`).join(''))
const Tm_td     =(e,arr)=>Inn(e,arr.map(a=>`<td>${a}</td>`).join(''))
const Tm_Opt    =(arr,Stg=null)=>arr.map((a,i)=>`<option value="${a}" ${i===0?'disabled':''} ${Stg===a?'selected':i===0?'selected':''}>${a}</option>`).join('')
const Tm_OptFnt =(e,arr)=>Inn(e,arr.map(a=>`<option style="font-family:${a}" value="${a}">${a}</option>`).join(''))
const load_Opts =(e,arr)=>Inn(e,arr.map(a=>`<option value="${a}">${a}</option>`).join(''))
const SrcSVG    =e=>`data:image/svg+xml,${encodeURIComponent(e)}`
const Tm_Interup=(Eu,v1,v2   )=>{Eu.classList.add("Interup","Rltv","Bt","PT");Eu.addEventListener("click",()=>TOV(Eu)   );Inn(Eu,`<a>${v1}</a><a>${v2}</a><i></i>`)}
const Tm_Check  =(Eu,Stg,nome)=>{Eu.classList.add("Chek","Ct")               ;Eu.addEventListener("click",()=>SynChk(Eu));Inn(Eu,`<input class="none" type="checkbox"><a class="Ct">${Stg}</a>${nome ? `<p>${nome}</p>` : ''}`)}
const Tm_Switch =(Eu,Labels=[],Func,Pre)=>{ // <div onload="Tm_Switch(this,['Pedidos','Serviços','Pagamento'],`slideTo(x,'PDDS')`,'PPDS')"></div>
    const X=Labels.length
    Eu.classList.add("Switch","Rltv","Ct","PT")
    Inn(Eu,`<style>${For(X).map(e=>`
        #opt_${Pre}_${e}:checked ~ i {transform:translateX(${e * 100}%)}
        #opt_${Pre}_${e}:checked ~ label[for="opt_${Pre}_${e}"] {color:#fff}
    `).join("")}label[for="opt_${Pre}_0"]{color:#fff}
    </style>
    ${For(X).map(e=>`<input type="radio" onchange="${Func.replace('x',e)}" id="opt_${Pre}_${e}" name="mode" class="none" ${e===0?"checked":""}>`).join("")}
    ${For(X).map(e=>`<label for="opt_${Pre}_${e}">${Labels[e] || "Opção " + e}</label>`).join("")}
    <i style="width: calc(100%/${X})"></i>`)
}
function MyAlert(msg){
    if(!document.querySelector('#alertCSS')){
        const css = `.MyAlert{position:fixed;bottom:20px;right:20px;font-size:14px;opacity:0;transform:translateY(20px);transition:all 0.4s ease;z-index:99999}.MyAlert.Atv{opacity:1;transform:translateY(0)}`
        const style = document.createElement('style')
        style.id = 'alertCSS'
        style.textContent = css
        document.head.appendChild(style)
    }
    const e = document.createElement('div')
    e.className = 'MyAlert'
    e.textContent = msg
    document.body.appendChild(e)
    requestAnimationFrame(()=>ATV(e))
    setTimeout(()=>{DTV(e);e.addEventListener('transitionend',()=>e.remove())},2000)
}



// Criar Modal


// MODAL________________________________________________
function FocoFilho(Pai,Filho){Array.from(Pai.children).forEach(e=>{None(e)});Show([Pai,Filho]);SairModal(Pai)} /*Manter isso aqui só pelo App da Infinity até trocar Tudo*/
function ShowModal(Pai,Filho){Array.from(Pai.children).forEach(e=>{None(e)});Show([Pai,Filho]);SairModal(Pai)}
function SairModal(Fundo){document.addEventListener('keyup',e=>{if(e.key==='Escape'){None(Fundo)}});Fundo.addEventListener('click',e=>{if(e.target===Fundo){None(Fundo)}})}
function ShowBrother(e,pai){var Fi = Filh(pai) ; var x = e===0?0:IdxDe(e);Fi.forEach(e=>None(e)) ; if(x<Fi.length-1){Show(Fi[x+1])}else{Show(Fi[0])}}







// isso é pra Esperar a função terminar pra poder dar o Alert
const ShowTime2=(e,sec)=>{Show(e);requestAnimationFrame(()=>{Add($(e),"show")});setTimeout(()=>{Rmv($(e),"show");setTimeout(()=>{None(e)},400)}, sec*1000)}


const Seguro=v=>(isFinite(v) && !Number.isNaN(v)) ? v : 0  // Provavelmente oq eu Faço aqui já tem em Num() talvez n o Infinity mas é só adicionar lá
const MSRX = stg => Number(stg.replace('ms','').trim())    // isso também só Converte em Numero, eu Poderia testar isso usando Num e provavelmente esse ms, poderia trocar pra remover todas as letras, isso tbm removeria R$ depois eu vejo lá

// DROP Adicionar pra PreScript na aba de Templates, mas usar a idéia do q eu fiz no Jogo de Fitebol
const IptFile=(div)=>// vc Cria a Função Upload(files) lá dentro do seu Index, e dentro execulta as Funções
                      // esta Div, é o Lugar onde as Imanges vão ser inseridas
   `<style>
        .Upld {width:100%;max-width:400px;height:200px;margin: 0px 30%;border: 2px dashed #ccc; transition: border-color 0.3s, background-color 0.3s, transform 0.3s; }
        .Upld:hover    {border-color:#7e7e7e; transform: scale(1.05)}
        .Upld:active   {border-color:#7e7e7e; transform: scale(0.98)}
        .Upld.dragover {border-color:#ff5e00; transform: scale(1.08); background: #af704c1a}
        .Upld span    {font-size: 50px; color: #ccc; transition: color 0.3s; }
        .Upld:hover span,.Upld.dragover span,.Upld.filled span{color:#ff5e00}
        .Upld:hover p,.Upld.dragover p{color:#ff5e00}
        .Upld p        {color:#aaa;margin:0; font-size:16px; transition:color 0.3s}
    </style>
    <div class="Upld rd Cl Ct PT Rltv"
        ondragover="event.preventDefault(); Add(this,'dragover')"
        ondragleave="Rmv(this,'dragover')"
        ondrop="event.preventDefault();Rmv(this,'dragover');Promss_Src(event.dataTransfer.files).then(srcList=>{Upload('${div}',srcList)})">
        <span>+</span><p>Arraste arquivos ou clique aqui</p>
        <input class="Abslt w100 h100 PT Opacy" type="file" id="imagem" accept="image/*" multiple onchange="Rmv(Pai(this),'dragover');Promss_Src(this.files).then(srcList=>{Upload('${div}',srcList)})">
    </div>
`



// Pra analizar_______________________________________________________________________________________________________
  function Delay(sec){return new Promise(r => setTimeout(r, sec*1000))} //NEXBEE
  async function Dellay(Sec,Call){await new Promise(r=>setTimeout(r, Sec* 1000));Call()} //NEXBEE
  function ResizeArea(e){e.style.height = e.scrollHeight + 'px';e.style.width = e.scrollWidth + 'px'} //GABARITO
  function InptsVazio(e){$$(e).forEach(e=>{if(e.value.trim()===""){Add(e,'Error') ; return true}else{Rmv(e,'Error') ; return false}})} //GABARITO
  function CssFont(e,Stg){$(e).style.fontFamily=Stg} //GABARITO
  const Bkg = (e,bg,txt,rd) =>{(e.style.backgroundColor = bg, txt && (e.style.color = txt), rd && (e.style.borderColor = rd))}
  const ArrtoOBJ=(arr,col)=>{return arr.reduce((acc, el) => {acc[el[col]] = el;return acc;}, {})}
  const ArrObj_OrdnCol=(Obj,Ordn)=>{const K = Object.keys(Obj[0]) ; const x = Ordn.map(col=>K.indexOf(col)) ; return [Ordn,...Obj.map(obj => x.map(i => obj[K[i]]))]}
  const Sib     =e=>$(e,Pai(event.target))
  const RxExt   =e=>e.split(".").pop().toLowerCase() // pegar a Extensão do nome de um arquivo tipo .webp
  const Includ=(e,arr)=>arr.some(v=>e.includes(v)) // como usar Includ(e,['BPrint','Grafit'])
  const todosIguais = arr => arr.every(v => v === arr[0])
  const sum=arr=>arr.reduce((acc,el)=>acc+el,0)
  const NAN=e=>isNaN(e) ? 0 : e
  const RmvLinByID=(arr,id)=>{const x = arr.findIndex(e => e.Id === id);if (x !== -1) arr.splice(x, 1)}

  // evita erro de XSS
  function XSS(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;")}