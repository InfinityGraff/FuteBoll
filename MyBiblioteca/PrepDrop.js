let VarDropImg = {} // uma Váriavel Global q talvez possa ficar dentro do PreScript Destinada a Receber os Files pra serem usados Depois
function PrepDrop(Eu,nome,Call=null){
    Inn(Eu,'<a>Adicionar Imagem</a><input type="file" accept="image/*" class="none">')
    const f=$('input',Eu),d=$('a',Eu)
    const Import=F=>{if (!F) return
        const ext  = F.name.split('.').pop()
        const Nome = `${nome}.${ext}`
        Inn(d,`<img Name="${Nome}" src="${URL.createObjectURL(F)}">`)
        VarDropImg[Nome]=F
    }
    Eu.onclick    =()=> f.click(),f.onchange=e=>Import(e.target.files[0]),
    Eu.ondragover =e=>(Prvn2(e),Add(Eu,'hover')),
    Eu.ondragleave=_=> Rmv(Eu,'hover'),
    Eu.ondrop     =e=>(Prvn2(e),Rmv(Eu,'hover'),Import(e.dataTransfer.files[0]))
}

const AGORA2 =()=>`${new Date().toLocaleTimeString('pt-BR')}`
const ToSec=e=>e.split(':').map(Number).reduce((s,v)=>s*60+v,0)

const Timer=(e,m,L,Reg,CB)=>{
  const F=s=>`${(s/60|0).toString().padStart(2,'0')}:${(s%60|0).toString().padStart(2,'0')}`
  e.Seg??=ToSec(Inn(e)); e.C??=0; e.Ini??=0; e.R??=0
  const V =()=>Reg?(L-e.Seg-((Date.now()-e.Ini)/1e3|0)):(e.Seg+((Date.now()-e.Ini)/1e3|0))
  const End=()=>{clearInterval(e.C); e.Ini=e.Seg=e.R=0; let Tm=Reg?F(L):'00:00'; Inn(e,Tm); CB&&CB({acao:'End',tempo:Tm}); return {acao:'End',tempo:Tm}}
  const T =()=>{let v=V(); if(L&&((Reg&&v<=0)||(!Reg&&v>=L))) return End(); Inn(e,F(v))}
  if(m==='End') return End()
  if(m==='Ply'){
    if(e.R) return {acao:'Ply',erro:'já está rodando'}
    e.Ini=Date.now(); e.C=setInterval(T,250); e.R=1
    let Tm=F(Reg?(L-e.Seg):e.Seg); CB&&CB({acao:'Ply',tempo:Tm})
    return {acao:'Ply',tempo:Tm}
  }
  if(m==='Stp'){
    if(!e.R) return {acao:'Stp',erro:'já está pausado'}
    clearInterval(e.C); e.Seg+=((Date.now()-e.Ini)/1e3|0); e.R=0
    let v=Reg?(L-e.Seg):e.Seg, Tm=F(v); Inn(e,Tm); CB&&CB({acao:'Stp',tempo:Tm})
    return {acao:'Stp',tempo:Tm}
  }
}

const MaskMin=e=>{
    const I = IsInp(e)
    let v = ( I ? Vll(e) : Inn(e)).replace(/\D/g,'').replace(/^0+(?=[1-9])/,'')
    if (!v) { I ? Vll(e,'') : Inn(e,'') ; if (!I) CurEnd(e); return }
    const n = v.length
    let m = n < 3 ? '0:' + v.padStart(2,'0'):v.slice(0,Math.min(2,n-2))+':'+v.slice(-2)
    if (n > 5) m = m.slice(0,5)
      I ? Vll(e,m) : Inn(e,m)
    if (!I) CurEnd(e)
  }





