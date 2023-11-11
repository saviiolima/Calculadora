import { Main, Button } from "./style.js";
import { useState } from "react";

function Home() {
  const [firstValue, setFirstValue] = useState("");

  const [secondValue, setSecondValue] = useState("");

  const [result, setResult] = useState("");

  const [operador, setOperador] = useState("");

  const CaptureValue = (item) => {
    if (operador === "") {
      setFirstValue(firstValue + item.target.value);
    } else {
      setSecondValue(secondValue + item.target.value);
    }
  };

  const CaptureSinal = (item) => {
    setOperador(item.target.value);
  };

  function Calcular() {}
  function Operations() {}

  const Soma = () => {
    setResult(Number(firstValue) + Number(secondValue));
  };
  const Diminuir = () => {
    setResult(Number(firstValue) + Number(secondValue));
  };
  const Multi = () => {
    setResult(Number(firstValue) + Number(secondValue));
  };
  const Dividir = () => {
    setResult(Number(firstValue) + Number(secondValue));
  };
  const Porcen = () => {
    setResult(Number(firstValue) + Number(secondValue));
  };
  const Zerar = () => {
    setResult("");
    setFirstValue("");
    setSecondValue("");
    setOperador("");
  };

  const Igual = () => {
    switch (operador) {
      case "+":
        return Soma();
      case "-":
    }
  };

  return (
    <Main>
      <h1>Calculadora</h1>
      <h2>{result}</h2>
      <h3>{firstValue}</h3>
      <h3>{operador}</h3>
      <h3>{secondValue}</h3>
      <Button onClick={Zerar}>AC</Button>
      <Button>+/-</Button>
      <Button onClick={CaptureSinal} value="%">
        %
      </Button>
      <Button onClick={CaptureSinal}>/</Button>
      <Button onClick={CaptureValue} value={7}>
        7
      </Button>
      <Button onClick={CaptureValue} value={8}>
        8
      </Button>
      <Button onClick={CaptureValue} value={9}>
        9
      </Button>
      <Button onClick={CaptureSinal} value="*">
        X
      </Button>
      <Button onClick={CaptureValue} value={4}>
        4
      </Button>
      <Button onClick={CaptureValue} value={5}>
        5
      </Button>
      <Button onClick={CaptureValue} value={6}>
        6
      </Button>
      <Button onClick={CaptureSinal}>-</Button>
      <Button onClick={CaptureValue} value={1}>
        1
      </Button>
      <Button onClick={CaptureValue} value={2}>
        2
      </Button>
      <Button onClick={CaptureValue} value={3}>
        3
      </Button>
      <Button onClick={CaptureSinal} value="+">
        +
      </Button>
      <Button onClick={CaptureValue} value={0}>
        0
      </Button>
      <Button>,</Button>
      <Button onClick={Igual}>=</Button>
    </Main>
  );
}

export default Home;
