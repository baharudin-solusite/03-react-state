// import useState
import { useState } from 'react';
// import Cartitem
import Cartitem from './component/Cartitem';
function App() {
  // menuliskan useState hooks
  // fungsi penulisan (setNama) untuk mengubah data (nama)
  const [nama, setNama] = useState("Baharudin")
  // membuat data menjadi array agar mudah dibaca
  const [hewan, setHewan] = useState([
    "Monyet", "Srigala", "Kura-Kura", "Hiu", "kucing"
  ])

  return (
    <div>
      {/* memanggil useState */}
      {/* bila di tekan akan berubah namanya */}
      <h2 onClick={() => setNama("Fahrul")}>{nama}</h2>

      {/* loping data dengan map colback */}
      {hewan.map((item, index) => (
        <Cartitem key={index} hewan={item} />
      ))}

      {/* perbanyak sebuah data manual */}
      <Cartitem hewan="Monyet" />
      <Cartitem hewan="Srigala" />
      <Cartitem hewan="Kura-Kura" />
    </div>
  );
}

export default App;
