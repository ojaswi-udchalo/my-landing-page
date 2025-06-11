// app/components/uc-header/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ucEnv } from '@/constants/envVars';
import { headerCategory, headerNavigation } from './data';
import style from './uc-header.module.scss';

function UCHeader() {
  return (
    <header className={style.headerBox}>
      {/* Promo Header */}
      <div className={style.promoHeader}>
        <div className={style.promHeaderDiscounts}>
          <div className={style.promDiscountIcon}>
            <Image
              src="/uc-sp/assets/icons/promo_discount.svg"
              alt="Offers & Discounts"
              width={24}
              height={24}
            />
          </div>
          <div className={style.promDiscountText}>Offers & Discounts</div>
        </div>
        <div className={style.promHeaderFaujiFamily}>
          <div className={style.promFaujiFamilyIcon}>
            <Image
              src="/uc-sp/assets/icons/fauji_family.svg"
              alt="Join udChalo Fauji Family"
              width={24}
              height={24}
            />
          </div>
          <div className={style.promFaujiFamilyCont}>
            <div className={style.promFaujiFamilyTitle}>Join</div>
            <div className={style.promFaujiFamilyText}>
              udChalo Fauji Family
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={style.header}>
        <div className={style.headerStart}>
          <div className={style.headerLogo}>
            <Image
              src={`${ucEnv.ucStatic}/client_assets/img/logo/logo.png`}
              alt="udChalo Logo"
              width={120}
              height={50}
              style={{ width: '70%', height: 'auto' }}
            />
          </div>
          <div className={style.headerContainer}>
            {headerCategory.map((categoryItem) => (
              <div key={`header-category-${categoryItem.id}`}>
                <Link href={categoryItem.link || '#'}>
                  {categoryItem.val}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={style.headerEnd}>
          <div className={style.headerEndLogo}>
            <Image
              src="/uc-sp/assets/icons/circular_gear.svg"
              alt="Support"
              width={24}
              height={24}
            />
            <div className={style.headerEndSupportLogoText}>
              <Link href={headerNavigation[0] || '#'}>Support</Link>
            </div>
            <Image
              src="/uc-sp/assets/icons/black_arrow_down.svg"
              alt=""
              width={16}
              height={16}
            />
          </div>
          <div className={style.headerEndLogo}>
            <Image
              src="/uc-sp/assets/icons/user.svg"
              alt="User"
              width={31}
              height={31}
            />
            <div className={style.headerEndUserLogoText}>
              <Link href={headerNavigation[1] || '#'}>Log In</Link>
            </div>
            <Image
              src="/uc-sp/assets/icons/blue_arrow_down.svg"
              alt=""
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default UCHeader;
