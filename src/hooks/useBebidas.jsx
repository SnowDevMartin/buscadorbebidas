import { useContext } from 'react';
import BebidasContext from '../context/bebidasProvider';

const useBebidas = () => {
	return useContext(BebidasContext);
};

export default useBebidas;
