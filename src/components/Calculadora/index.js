import './Calculadora.css';
import { useState } from "react";

function Calculadora() {
  const [ resultado, setResultado ] = useState('');
  const operadores= ['-','+','*','/'];
  const [ ultimoCaractere, setUltimoCaractere ] = useState('');
  const [ ultimoOperador, setUltimoOperador ] = useState('');

  function  capturarClick({ target }) {
        if(target.classList.contains('resultado')) return;
        const caractere = target.innerHTML;
        if(operadores.some(operador => operador === caractere)) {
              setUltimoOperador(caractere);
        }
        if(operadores.some(operador => operador === caractere) && ultimoOperador != '') return;

        if(caractere === ultimoCaractere && operadores.some(operador => operador === ultimoCaractere)) {
            return;
        }
        if(caractere === 'AC') return setResultado('');
        if(caractere === '=') {
              const resultadoString = resultado.toString()
              const ultimoCaractereResultado = resultadoString.charAt(resultado.length - 1);
              if(operadores.some(operador => operador === ultimoCaractereResultado) || resultadoString.length <= 1) return;
              return setResultado(eval(resultadoString.replace(/^0+/, '')));
        }
        setResultado(resultado + caractere);
        setUltimoOperador('');
        setUltimoCaractere(caractere);
  }

  return (
      <div className="calculadora" onClick={ capturarClick }>
        <div className="resultado">{resultado}</div>
        <button className="sete">7</button>
        <button className="oito">8</button>
        <button className="nove">9</button>
        <button className="divisao">/</button>
        <button className="quatro">4</button>
        <button className="cinco">5</button>
        <button className="seis">6</button>
        <button className="multiplicacao">*</button>
        <button className="um">1</button>
        <button className="dois">2</button>
        <button className="tres">3</button>
        <button className="subtracao">-</button>
        <button className="ac">AC</button>
        <button className="zero">0</button>
        <button className="igual">=</button>
        <button className="soma">+</button>
      </div>
  );
}

export default Calculadora;
