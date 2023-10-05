import React from "react";
import { IoLogoTwitter, IoLogoVk } from "react-icons/io";
import { ImFacebook, ImYoutube } from "react-icons/im";
import { BsInstagram, BsDiscord } from "react-icons/bs";
import { GrReddit } from "react-icons/gr";
import hoyoverseGray from "../../assets/icon/hoyoverseGray.png";
import styles from "./styled.module.css";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-neutral-900">
        <div className="flex items-center ml-32">
          <ImFacebook className={styles.iconFilter} />
          <IoLogoTwitter className={styles.iconFilter} />
          <ImYoutube className={styles.iconFilter} />
          <BsInstagram className={styles.iconFilter} />
          <BsDiscord className={styles.iconFilter} />
          <GrReddit className={styles.iconFilter} />
          <IoLogoVk className={styles.iconFilter} />
          <img className={styles.iconFilter} src={hoyoverseGray} alt="logo" />
        </div>
      </div>
      <div className="w-full bg-black py-12">
        <div className="flex flex-col items-center justify-center text-neutral-400 text-xs w-1/2 mx-auto">
          <img
            className="mx-auto"
            data-src="https://webstatic.hoyoverse.com/upload/event/2023/07/10/5adaf3c356e577f0659899a8f5a2a06a_863358723360619202.png"
            src="https://webstatic.hoyoverse.com/upload/event/2023/07/10/5adaf3c356e577f0659899a8f5a2a06a_863358723360619202.png"
          />
          <ul className="text-neutral-400  flex flex-wrap justify-center">
            <li className="m-2">Политика конфиденциальности</li>
            <li className="m-2">Условия обслуживания</li>
            <li className="m-2">О разработчике</li>
            <li className="m-2">Служба поддержки</li>
          </ul>
          <p className="text-center mt-4">
            "PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered
            trademarks or trademarks of Sony Interactive Entertainment Inc.
          </p>
          <p className="text-center mt-2">
            Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and
            Epic Online Services are trademarks and/or registered trademarks of
            Epic Games. All other trademarks are the property of their
            respective owners.
          </p>
          <img
            className=" mt-6"
            data-src="https://webstatic.hoyoverse.com/upload/event/2021/12/29/eaa64d81ae6a7318a6afb91cbffd83a4_118924438105936743.png"
            src="https://webstatic.hoyoverse.com/upload/event/2021/12/29/eaa64d81ae6a7318a6afb91cbffd83a4_118924438105936743.png"
          />
          <p className="text-center mt-4">Copyright © COGNOSPHERE. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
