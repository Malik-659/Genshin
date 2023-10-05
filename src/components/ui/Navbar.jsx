import React, { useState } from "react";
import { Link } from "react-router-dom";
import { btnMusicOff } from "../../helpers/img";
import { btnMusicOn } from "../../helpers/img";
import { navLogo } from "../../helpers/img";
import { logIcon } from "../../helpers/img";

const Navbar = () => {
  const [btnMusic, setBtnMusic] = useState(false);
  function music() {
    setBtnMusic(!btnMusic);
  }
  return (
    <div className="w-full bg-black opacity-80 flex justify-between">
      <div className="flex items-center">
        {!btnMusic ? (
          <img
            className="w-8 h-8 -mr-20 ml-16"
            onClick={() => music()}
            src={btnMusicOff}
          />
        ) : (
          <img
            className="w-8 h-8 -mr-20 ml-16"
            onClick={() => music()}
            src={btnMusicOn}
          />
        )}
              <img className="w-80 h-16 ml-8" src={navLogo} alt="logo" />
      </div>

      <div className="text-neutral-400 flex items-center -ml-28">
        <Link className="mx-4" to={"/"}>
          Главная
        </Link>
        <Link className="mx-4" to={"/"}>
          Новости
        </Link>
        <Link className="mx-4" to={"/"}>
          Персонажи
        </Link>
        <div className="">
          <Link className="mx-4" to={"/"}>
            Информация
          </Link>
        </div>
        <Link className="mx-4" to={"/"}>
          HoYoLAB
        </Link>
        <Link className="mx-4" to={"/"}>
          Пополнения
        </Link>
        <Link className="mx-4" to={"/"}>
          Промокод
        </Link>
      </div>
      <div className="flex">
        <button className="flex items-center text-white brightness-50 hover:brightness-100">
          <span className="trext-sm">Авторизация</span>
          <img className="mx-4" src={logIcon} alt="icon" />
        </button>
        <div className="text-neutral-900 font-medium text-xl tracking-widest bg-yellow-500 flex items-center justify-center w-48">
            Загрузить игру
        </div>
      </div>
    </div>
  );
};

export default Navbar;
