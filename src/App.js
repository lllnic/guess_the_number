import { useState } from "react";
import "./style.css";

function App() {
    const [value, setValue] = useState(0);
    let [number, setNumber] = useState(0);
    const [message, setMessage] = useState("Введите целое число от 1 до 100");

    function randomNumber() {
        setNumber(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
        setMessage("Введите целое число от 1 до 100");
    }

    function inputNumber(event) {
        setValue(event.target.value);
    }

    function okNumber() {
        if (/^(0|-?[1-9]\d{0,5})$/.test(value)) {
            if (value > number) {
                setMessage("Загаданное число меньше");
            } else if (value < number) {
                setMessage("Загаданное число больше");
            } else if (value == number) {
                setMessage("Вы угадали число");
            }
        } else {
            setMessage("Введите целое число!!!");
        }
    }

    function pressEnter(event) {
        if (event.key === "Enter") {
            okNumber();
            // console.log('press enter');
        }
    }

    return (
        <div>
            <div className="game_area">
                <div className="message">{message}</div>
                <div className="input_wrapper">
                    <input
                        type="number"
                        value={value}
                        onChange={inputNumber}
                        onKeyPress={pressEnter}
                    />
                    <button className="btn_ok" onClick={okNumber}>
                        OK
                    </button>
                </div>
                <div className="button_area">
                    <button className="btn_newNumber" onClick={randomNumber}>
                        Загадать новое число
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
