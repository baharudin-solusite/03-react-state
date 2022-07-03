// 1 import useState
import { useState } from 'react';
// import Couter
import Couter from './component/Couter';
function App() {
  // 2 menuliskan useState hooks
  // fungsi penulisan (setNama) untuk mengubah data (nama)
  const [nama, setNama] = useState("Baharudin")

  return (
    <div>
      {/* memanggil useState */}
      <h2>{nama}</h2>
      {/* bila di tekan akan berubah namanya */}
      <h2 onClick={() => setNama("Fahrul")}>{nama}</h2>
      <Couter />
    </div>
  );
}

export default App;
