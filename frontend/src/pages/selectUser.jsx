import { useNavigate } from 'react-router-dom';

function SelectUser () {
  const navigate = useNavigate();
  const selectKarl = () => {
    navigate('./12')
  }
  const selectCecilia = () => {
    navigate('./18')
  }
  

  return (
    <div>
      <button onClick={selectKarl}>Karl</button>
      <button onClick={selectCecilia}>Cecilia</button>
    </div>
  );
}

export default SelectUser;
