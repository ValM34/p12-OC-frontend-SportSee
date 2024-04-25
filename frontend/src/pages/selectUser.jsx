import { useNavigate } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout.jsx";

function SelectUser () {
  const navigate = useNavigate();
  const selectKarl = () => {
    navigate('./12')
  }
  const selectCecilia = () => {
    navigate('./18')
  }
  

  return (
    <MainLayout>
      <div>
        <button onClick={selectKarl}>Karl</button>
        <button onClick={selectCecilia}>Cecilia</button>
      </div>
    </MainLayout>
  );
}

export default SelectUser;
