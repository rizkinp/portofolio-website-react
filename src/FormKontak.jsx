import React, { useState } from 'react';
import './FormKontak.css'; // Import file CSS untuk gaya FormKontak

const FormKontak = () => {
    const [nama, setNama] = useState('');
    const [pesan, setPesan] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Susun URL dengan inputan dari pengguna
        const waURL = `https://api.whatsapp.com/send?phone=6289515960034&text=Nama: ${encodeURIComponent(nama)}%0APesan: ${encodeURIComponent(pesan)}`;

        // Buka URL WhatsApp menggunakan window.open
        window.open(waURL, '_blank');

        // Kosongkan inputan setelah berhasil membuka URL WhatsApp
        setNama('');
        setPesan('');
    };

    return (
        <div className="container" id='Contact'>
            <h2>Contact Me!</h2>
            <form onSubmit={handleSubmit} className="form-kontak-container">
                <div className="form-group">
                    <label htmlFor="nama">Nama:</label>
                    <input
                        type="text"
                        id="nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pesan">Pesan:</label>
                    <textarea
                        id="pesan"
                        value={pesan}
                        onChange={(e) => setPesan(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Kirim Pesan</button>
            </form>
        </div>


    );
};

export default FormKontak;
