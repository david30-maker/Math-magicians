import React, { useState } from 'react';
import classes from './Calculator.module.css';
import calculate from './logic/calculate';
import Quote from './quotes/Quote';

const Calculator = () => {
  const [calculatorValue, setCalculatorValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newValue = calculate(calculatorValue, buttonName);
    setCalculatorValue(newValue);
  };

  const displayValue = calculatorValue.next || calculatorValue.total || '0';

  return (
    <>
      <div className={classes.quoteBox}>
        <div className={classes.quote}>
          <Quote />
        </div>
      </div>
      <div className={classes.calculator}>
        <div className={classes.data}>{displayValue}</div>
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" className={classes.opera} onClick={() => handleClick('÷')}>÷</button>
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" className={classes.opera} onClick={() => handleClick('x')}>x</button>
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" className={classes.opera} onClick={() => handleClick('-')}>-</button>
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" className={classes.opera} onClick={() => handleClick('+')}>+</button>
        <button type="button" className={classes.zeros} onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" className={classes.equals} onClick={() => handleClick('=')}>=</button>
      </div>
    </>
  );
};

export default Calculator;
