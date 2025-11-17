async function GetSB(){
    let {data,error} = await supabase.from('placar').select('*').order('id',{ascending:false}).limit(1).maybeSingle()
    if(error){ERR(error)}
    return data
}

async function LRowSB(){
    let {data,error}=await supabase.from('placar').select('*').order('id',{ascending:false}).limit(1).maybeSingle()
    if(error) ERR(error) ; if(!data) ERR('Nenhuma linha encontrada')
    return data
}

async function EditLrSB(obj,Stg){
    let Ult=await LRowSB(),{error}=await supabase.from('placar').update(obj).eq('id',Ult.id)
    if(error){ERR(error)}else{MyAlert(Stg) ; LOG('Ultima Linha')}
}

async function NewLinSB(obj,Stg){
    const {data,error}=await supabase.from('placar').insert([obj]).select().maybeSingle()
    if(error){ERR(error)}else{MyAlert(Stg), LOG('Nova linha:')}
}

