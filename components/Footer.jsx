'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import {fadeIn, footerVariants, navVariants, slideIn, staggerContainer, textVariant} from '../utils/motion';
import {ExploreCard, TitleText, TypingText} from '../components';
import {socials} from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
      <div className="footer-gradient"/>
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <div className="flex items-center justify-between flex-wrap gap-5">
              <h4 className="font-bold md:text-[64px] text-[44px] text-white">
                  Enter the Metaverse
              </h4>
              <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
                  <img src="/headset.svg" alt="headset" className="w-[24px h-[24px] object-contain"/>
                  <span className="font-normal text-[16px] text-white">
                      ENTER METAVERSE
                  </span>
              </button>
          </div>

          <div className="flex flex-col">
              <div className="mb-[50px] h-2px bg-white opacity-10"/>
              <div className="flex items-center justify-between flex-wrap gap-4">
                  <h4 className="font-extrabold tetx-[24px] text-white">
                      Metaverse
                  </h4>
                  <p className="font-normal text-[14px] text-white opacity-50">
                      Copyright © 2021 - 2022 Metaversus. All rights reserved.
                  </p>
                  <div className="flex gap-4">
                      {socials.map((social, index) => (
                          <img key={social.name} src={social.url} alt={social.name} className="w-[24px] h-[24px] cursor-pointer object-contain"/>
                      ))}
                  </div>
              </div>
          </div>

      </div>
    footer
  </motion.footer>
);

export default Footer;
