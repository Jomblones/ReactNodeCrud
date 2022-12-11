import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListMhs = () =>{
    const [mahasiswa, setMhs] = useState([]);

    useEffect(() => {
        getMhs();
    },[]);

    const getMhs = async () => {
        const response = await axios.get('http://localhost:5000/mhs');
        setMhs(response.data);
    }

    const deleteMhs = async (id) => {
        await axios.delete(`http://localhost:5000/mhs/${id}`);
        getMhs();
    }

    return (
        <div className="container">
            <Link to={"/add"} className="button is-primary mt-5">Add New</Link>
            <table className="table is-striped is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>NPM</th>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>UTS</th>
                        <th>UAS</th>
                        <th>IPK</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map((mhs, index) => (
                            <tr key={ mhs.id }>
                                <td>{ index+1 }</td>
                                <td>{ mhs.npm } </td>
                                <td>{ mhs.nama }</td>
                                <td>{ mhs.kelas }</td>
                                <td>{ mhs.uts }</td>
                                <td>{ mhs.uas }</td>
                                <td>{ mhs.ipk }</td>
                                <td>{ mhs.grade }</td>
                                <td>
                                    <Link to={`/edit/${mhs.id}`} className="button is-small is-info mr-2">Edit</Link>
                                    <button onClick={ ()=> deleteMhs(mhs.id)} className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )

}

export default ListMhs;