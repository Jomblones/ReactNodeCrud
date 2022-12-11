import Mahasiswa from "../model/modelMhs.js";

export const getMhs = async (req,res)=>{
    try{
        const mhs = await Mahasiswa.findAll();
        res.json(mhs);
    } catch(error){
        res.json({message:error.message});
    }
}

export const getMhsById = async(req,res)=>{
    try{
        const mhs = await Mahasiswa.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(mhs[0]);
    }catch(error){
        res.json({message:error.message})
    }
}


export const createMhs = async (req,res)=>{
    try{
        await Mahasiswa.create(req.body);
        res.json({
            "message":"Mahasiswa Ditambahkan"
        });
    } catch(error){
        res.json({message:error.message});
    }
}

export const updateMhs = async (req,res)=>{
    try{
        await Mahasiswa.update(req.body, {
            where :{
                id:req.params.id
            }
        })
        res.json({
            "message":"Mahasiswa updated"
        })
    }catch(error){
        res.json({message:error.message});
    }
}

export const deleteMhs = async (req,res)=>{
    try{
        await Mahasiswa.destroy({
            where :{
                id:req.params.id
            }
        })
        res.json({
            "message":"Mahasiswa deleted"
        })
    }catch(error){
        res.json({message:error.message});
    }
}