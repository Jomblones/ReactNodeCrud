import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditMhs = () => {
    const [npm, setNpm] = useState('');
    const [nama,setNama] = useState('');
    const [kelas, setKelas] = useState('');
    const [uts, setUts] = useState('');
    const [uas, setUas] = useState('');
    const [ipk, setIpk] = useState('');
    const [grade, setGrade] = useState('A');
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getMhsById();
    },[]);

    const updateMhs = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/mhs/${id}`,{
            npm: npm,
            nama: nama,
            kelas: kelas,
            uts: uts,
            uas: uas,
            ipk: ipk,
            grade: grade
        });
        navigate("/");
        } catch(error) {
            console.log(error)
        }
    }
    
    const getMhsById = async () =>{
        const response = await axios.get(`http://localhost:5000/mhs/${id}`);
        setNpm(response.data.npm);
        setNama(response.data.nama);
        setKelas(response.data.kelas);
        setUts(response.data.uts);
        setUas(response.data.uas);
        setIpk(response.data.ipk);
        setGrade(response.data.grade);
    }
    
    return (
        <div className="container is-centered mt-5">
            <form onSubmit={ updateMhs }>
            <div className="field">
                <label className="label">NPM</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="NPM" 
                    value={ npm } 
                    onChange={ (e) => setNpm(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">Nama Lengkap</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nama" 
                    value={ nama } 
                    onChange={ (e) => setNama(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">Kelas</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Kelas" 
                    value={ kelas } 
                    onChange={ (e) => setKelas(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">Nilai UTS</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nilai UTS" 
                    value={ uts } 
                    onChange={ (e) => setUts(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">Nilai UAS</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nilai UAS" 
                    value={ uas } 
                    onChange={ (e) => setUas(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">IPK</label>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="IPK" 
                    value={ ipk } 
                    onChange={ (e) => setIpk(e.target.value)} />
            </div>

            <div className="field">
                <label className="label">Grade</label>
                <div className="control">
                    <select 
                        value={grade}
                        onChange={(e)=> setGrade(e.target.value)}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>

            </div>

            <div className="field">
                <button type="submit" className="button is-primary">Update</button>
            </div>
            </form>
            <Link to={"/"} className="button is-info mt-2">Back</Link>
        </div>
    )
    
}

export default EditMhs