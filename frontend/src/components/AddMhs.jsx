import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddMhs = () => {
    const [npm, setNpm] = useState('');
    const [nama,setNama] = useState('');
    const [kelas, setKelas] = useState('');
    const [uts, setUts] = useState('');
    const [uas, setUas] = useState('');
    const [ipk, setIpk] = useState('');
    const [grade, setGrade] = useState('A');
    const navigate = useNavigate();

    const saveMhs = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/mhs',{
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

    return (
        <div className="container is-centered mt-5">
            <form onSubmit={ saveMhs }>
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
                <button type="submit" className="button is-primary">Save</button>
            </div>
            </form>
        </div>
    )
    
}
export default AddMhs