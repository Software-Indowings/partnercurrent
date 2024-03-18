import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import background from '../images/3.png';

function EditStatus(props) {
    const { order_id } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        status: ''
    });

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3307/edistatus/${order_id}`, values)
            .then(res => {
                console.log(res);
                navigate('/orders');
            })
            .catch(err => console.log(err));
    };

    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '20px',
                    borderRadius: '10px'
                }}
            >
                <form onSubmit={handleUpdate}>
                    <h2>Update Status</h2>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="status">Change Status</label>
                        <input
                            type="text"
                            id="status"
                            placeholder="Update Status"
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '5px'
                            }}
                            value={values.status}
                            onChange={e => setValues({ ...values, status: e.target.value })}
                        />
                    </div>
                    
                    <Link
                        to="/orders"
                        style={{
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            marginRight: '10px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Back
                    </Link>
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            backgroundColor: '#28a745',
                            color: '#fff'
                        }}
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditStatus;



   