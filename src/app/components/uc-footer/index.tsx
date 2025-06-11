import React from 'react';
import { IFooBarProps } from '@/common/interface';
import Link from 'next/link';
import Image from 'next/image';
import { ucEnv } from '@/constants/envVars';
import {
  companyVal,
  downloadStoreLink,
  ImportantLinksVal,
  OppurtunitiesVal,
  socialHandle
} from './data';
import style from './uc-footer.module.scss';

interface IUCFooterProps {
  whiteBg?: boolean;
}

function FooterInfoBar({ item, whiteBg }: IFooBarProps) {
  return (
    <div
      className={`${whiteBg ? style.white_bg_foobar : style.foobar}`}
      key={item?.id || 0}
    >
      <Link href={item?.link || ''}>{item?.val || ''}</Link>
    </div>
  );
}

function UCFooter({ whiteBg }: IUCFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${style.footer} ${whiteBg && style.white_bg}`}>
      <div className={style.footerCont}>
        <div className={style.footerCont1}>
          <div className={`${style.footerContainerLine1}`}>
            <a className={`${style.footerContainerLineTitle} ${whiteBg && style.dark_mode_footerContainerLineTitle}`} href="/flights" target="_blank" rel="noreferrer">Flights</a>
            <a className={`${style.footerContainerLineTitle} ${whiteBg && style.dark_mode_footerContainerLineTitle}`} href="/udchaloHolidays" target="_blank" rel="noreferrer">Holidays</a>
            <a className={`${style.footerContainerLineTitle} ${whiteBg && style.dark_mode_footerContainerLineTitle}`} href="https://shop.udchalo.com" target="_blank" rel="noreferrer">Shopping</a>
            <a className={`${style.footerContainerLineTitle} ${whiteBg && style.dark_mode_footerContainerLineTitle}`} href="/housing" target="_blank" rel="noreferrer">Housing</a>
            <a className={`${style.footerContainerLineTitle} ${whiteBg && style.dark_mode_footerContainerLineTitle}`} href="/finserv/tax-services" target="_blank" rel="noreferrer">Tax Services</a>
            <a className={`${style.footerContainerLineTitle} ${whiteBg && style.dark_mode_footerContainerLineTitle}`} href="/finserv/credit-card-home" target="_blank" rel="noreferrer">Credit Card</a>
          </div>
          <div className={style.footerContainerLine2}>
            <div className={`${style.footerContainerLine2Title} ${whiteBg && style.white_bg_footerContainerLine2Title}`}>Company</div>
            {companyVal.map((item, index) => (
              <FooterInfoBar key={`company-val-${index}`} item={item} whiteBg={whiteBg} />
            ))}
          </div>
          <div className={style.footerContainerLine2}>
            <div className={`${style.footerContainerLine2Title} ${whiteBg && style.white_bg_footerContainerLine2Title}`}>Important Links</div>
            {ImportantLinksVal.map((item, index) => (
              <FooterInfoBar key={`important-links-${index}`} item={item} whiteBg={whiteBg} />
            ))}
          </div>
          <div className={`${style.footerContainerLine2} ${style.hiddenItem}`}>
            <div className={`${style.footerContainerLine2Title} ${whiteBg && style.white_bg_footerContainerLine2Title}`}>Opportunities</div>
            {OppurtunitiesVal.map((item, index) => (
              <FooterInfoBar key={`opportunities-${index}`} item={item} whiteBg={whiteBg} />
            ))}
          </div>
        </div>

        <div className={style.footerCont2}>
          <div className={`${whiteBg ? style.white_bg_fooCont2DownloadText : style.fooCont2DownloadText}`}>
            Scan this QR code to download udChalo App
          </div>
          <div className={style.fooCont2AppStoreIcon}>
            <div className={style.fooCont2GooglePlayIcon}>
              <div className={style.footerCont3QrLogo}>
                <Image
                  src="/uc-sp/assets/images/playstore-qr-code.png"
                  alt="Google Play QR Code"
                  width={100}
                  height={100}
                />
              </div>
              <Link href={downloadStoreLink[0] || '#'}>
                <Image
                  src={`${ucEnv.ucStatic}/client_assets/img/google-play-icon.png`}
                  alt="Google Play Logo"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
            <div className={style.fooCont2AppleStoreIcon}>
              <div className={style.footerCont3QrLogo}>
                <Image
                  src="/uc-sp/assets/images/appstore-qr-code.png"
                  alt="App Store QR Code"
                  width={100}
                  height={100}
                />
              </div>
              <Link href={downloadStoreLink[1] || '#'}>
                <Image
                  src={`${ucEnv.ucStatic}/IOS.svg`}
                  alt="App Store Logo"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className={style.fooCont2MediaIcon}>
            {socialHandle.map((link, index) => {
              const icons = [
                '/uc-sp/assets/icons/facebook_logo.svg',
                '/uc-sp/assets/icons/x_logo.svg',
                '/uc-sp/assets/icons/youtube_logo.svg',
                '/uc-sp/assets/icons/linked_in_logo.svg',
                '/uc-sp/assets/icons/ig_logo.svg'
              ];
              const altTexts = [
                'Facebook',
                'Twitter',
                'YouTube',
                'LinkedIn',
                'Instagram'
              ];
              return (
                <div key={`social-icon-${index}`}>
                  <Link href={link} target="_blank" rel="noreferrer">
                    <Image
                      src={whiteBg ? 
                        `${ucEnv.ucStatic}/client_assets/icons/whitebg-${['fb','x','yt','linkedin','ig'][index]}-icon.svg` : 
                        icons[index]}
                      alt={altTexts[index]}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={style.footerEnd}>
        <div className={style.footerEnd1}>
          <div className={`${style.footerEnd1Text} ${whiteBg && style.white_bg_footerEnd1Text}`}>
            <div>Made with </div>
            <div>
              <Image
                src="/uc-sp/assets/icons/love_logo.svg"
                alt="Love"
                width={18}
                height={18}
              />
            </div>
            <div> in Pune, India</div>
          </div>
          <div className={`${style.footerEnd1Text} ${whiteBg && style.white_bg_footerEnd1Text}`}>
            &copy; {currentYear} Upcurve Consumer Technologies Pvt. Ltd.
          </div>
        </div>
        <div className={style.footerEnd2}>
          <Image
            src="/uc-sp/assets/icons/ministry_of_tourism_india.svg"
            alt="Ministry of Tourism"
            width={40}
            height={40}
          />
          <Image
            src="/uc-sp/assets/icons/start_up_india_logo.svg"
            alt="Start Up India"
            width={40}
            height={40}
          />
          <Image
            src="/uc-sp/assets/icons/maha_rera.svg"
            alt="Maharashtra RERA"
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className={style.mobileFooter}>
        &copy; {currentYear} Upcurve Consumer Technologies Pvt. Ltd.
      </div>
    </footer>
  );
}

export default UCFooter;
