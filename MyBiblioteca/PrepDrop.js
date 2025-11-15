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