import { useState } from "react";
import "animate.css";

import Logo from "./assets/card-logo.svg";
import IconComplete from "./assets/icon-complete.svg";
import cardFront from "./assets/bg-card-front.png";
import cardBack from "./assets/bg-card-back.png";

function ThankYou() {
  return (
    <div className="w-[400px] p-5 ml-80 mt-52 flex flex-col justify-center items-center max-md:ml-36 max-md:mt-36 max-mobile:w-[300px] max-mobile:ml-5 animate__animated animate__backInDown">
      <img src={IconComplete} alt="IconComplete" className="w-16" />
      <h1 className="uppercase mt-5 font-mono text-4xl">Thank you!</h1>
      <p className="mt-5 text-base font-mono text-gray-400 max-mobile:text-center">
        We've added your card details
      </p>
      <button
        className="bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-3 px-4 rounded mt-9 w-full"
        onClick={() => location.reload()}
      >
        Continue
      </button>
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  const handleCardNumber = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const maxLength = 16;
    let inputValue = e.currentTarget.value;

    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength); // Limita el valor al máximo de caracteres permitidos
    }
    setCardNumber(inputValue);
  };

  const handleMonth = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const maxLength = 2;
    let inputValue = e.currentTarget.value;

    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength); // Limita el valor al máximo de caracteres permitidos
    }
    setMonth(inputValue);
  };

  const hanldeYear = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const maxLength = 2;
    let inputValue = e.currentTarget.value;

    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength); // Limita el valor al máximo de caracteres permitidos
    }
    setYear(inputValue);
  };

  const handleSecurityCode = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const maxLength = 3;
    let inputValue = e.currentTarget.value;

    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength); // Limita el valor al máximo de caracteres permitidos
    }
    setSecurityCode(inputValue);
  };

  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <main className="flex max-w-screen-xl m-auto min-h-screen max-md:flex-col max-mobile:flex-col">
      <section className="w-[483px] bg-[url('./assets/bg-main-desktop.png')] max-mobile:bg-[url('./assets/bg-main-mobile.png')] max-md:w-[768px] max-mobile:w-full max-md:bg-cover">
        <div className="w-[448px] relative left-36 top-4 max-md:left-10 max-md:top-28 max-md:z-20 max-mobile:w-[300px] max-mobile:top-24 max-mobile:left-2">
          <img
            src={Logo}
            alt="logo"
            className="relative top-28 left-7 z-10 max-mobile:w-10 max-mobile:top-20 max-mobile:left-4"
          />
          <div className="relative top-44 left-7 z-10 h-4 max-mobile:top-32 max-mobile:left-5">
            {cardNumber ? (
              <p className="text-white text-3xl tracking-widest max-mobile:text-xl">
                {cardNumber[0]}
                {cardNumber[1]}
                {cardNumber[2]}
                {cardNumber[3]} {cardNumber[4]}
                {cardNumber[5]}
                {cardNumber[6]}
                {cardNumber[7]} {cardNumber[8]}
                {cardNumber[9]}
                {cardNumber[10]}
                {cardNumber[11]} {cardNumber[12]}
                {cardNumber[13]}
                {cardNumber[14]}
                {cardNumber[15]}
              </p>
            ) : (
              <p className="text-white text-3xl tracking-widest max-mobile:text-xl">
                0000 0000 0000 0000
              </p>
            )}
          </div>
          <div className="flex flex-row justify-between">
            <div className="left-8 relative top-56 z-10 h-6 max-mobile:top-36 max-mobile:left-5 max-mobile:pt-4">
              <p className="text-white text-sm uppercase tracking-widest max-mobile:text-xs">
                {name ? name : "martin lopez"}
              </p>
            </div>
            <div className="relative top-56 right-12 z-10 h-6 max-mobile:top-36 max-mobile:right-6">
              <p className="text-white text-sm tracking-widest max-mobile:text-xs max-mobile:pt-4 ">
                {month ? `${month}/${year}` : "00/00"}
              </p>
            </div>
          </div>
          <img src={cardFront} alt="card-front" />
        </div>
        <div className="w-[448px] absolute left-64 top-[380px] mt-5 max-md:left-40 max-md:top-4 max-mobile:w-[300px] max-mobile:left-12">
          <div className="left-80 relative top-[132px] z-10 h-6 max-mobile:left-48 max-mobile:top-24">
            <p className="text-black text-sm font-mono">
              **** {securityCode ? securityCode : "000"}
            </p>
          </div>
          <img src={cardBack} alt="card-back" />
        </div>
      </section>
      <section className="w-full bg-white">
        {submit ? (
          <ThankYou />
        ) : (
          <form
            onSubmit={handleSubmit}
            className=" w-[400px] p-5 ml-80 mt-36 max-md:ml-28 max-mobile:w-[300px] max-mobile:ml-3"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2 uppercase font-mono">
                cardholder name
              </label>
              <input
                className="border-2 border-purple-700	rounded w-full py-2 px-3 text-gray-700"
                name="name"
                type="text"
                placeholder="e.g. Martín Lopez"
                required
                maxLength={24}
                onChange={(e) => handleName(e)}
              />
            </div>
            <div className="mt-7">
              <label className="block text-gray-700 text-sm mb-2 uppercase font-mono">
               tghtdfgf
              </label>
              <input
                className="border-2 border-purple-700	rounded w-full py-2 px-3 text-gray-700"
                name="cardnumber"
                type="number"
                required
                value={cardNumber}
                placeholder="e.g. 1234 5678 1234 4567"
                onChange={(e) => handleCardNumber(e)}
              />
            </div>
            <div className="mt-12 flex flex-row p-1 max-mobile:flex-col max-mobile:mt-4 max-mobile:ml-8">
              <div>
                <label className="block text-gray-700 text-sm mb-2 uppercase font-mono">
                  exp. date (mm/yy)
                </label>
                <div className="flex flex-row">
                  <input
                    className="border-2 border-purple-700	rounded py-2 px-3 text-gray-700 w-20 mr-4"
                    id="month"
                    type="number"
                    required
                    min={1}
                    max={12}
                    placeholder="MM"
                    value={month}
                    onChange={(e) => handleMonth(e)}
                  />
                  <input
                    className="border-2 border-purple-700	rounded py-2 px-3 text-gray-700 w-20"
                    id="year"
                    type="number"
                    required
                    value={year}
                    placeholder="YY"
                    min={23}
                    max={30}
                    onChange={(e) => hanldeYear(e)}
                  />
                </div>
              </div>
              <div className="ml-4 w-auto font-mono max-mobile:mt-7">
                <label className="block text-gray-700 text-sm mb-2 uppercase">
                  security code
                </label>
                <input
                  className="border-2 border-purple-700	rounded py-2 px-3 text-gray-700 w-40"
                  id="securityCode"
                  type="number"
                  placeholder="e.g. 123"
                  required
                  min={0}
                  max={999}
                  value={securityCode}
                  onChange={(e) => handleSecurityCode(e)}
                />
              </div>
            </div>
            <button
              className="bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-3 px-4 rounded mt-9 w-full"
              type="submit"
            >
              Confirm
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default App;
