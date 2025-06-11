export const ucEnv = {
  isProduction: process.env.NEXT_PUBLIC_PRODUCTION || false,
  ucServer: process.env.NEXT_PUBLIC_UC_SERVER || '',
  ucPayments: process.env.NEXT_PUBLIC_PAYMENTS_SLS || '',
  ucStatic: process.env.NEXT_PUBLIC_UC_STATIC || 'https://static.udchalo.com',
  ucStrapi: process.env.NEXT_PUBLIC_STRAPI_HOST || '',
  ucUrl: process.env.NEXT_PUBLIC_UC_URL || 'https://www.udchalo.com',
  envName: process.env.NEXT_PUBLIC_ENV_NAME || '',
  ga4ID: process.env.NEXT_PUBLIC_GA4_ID || '',
  creditCardApi: `${process.env.NEXT_PUBLIC_CREDIT_CARD_BASE}/credit-card`,
  strapiAPI: `${process.env.NEXT_PUBLIC_STRAPI_BASE}/api`,
  supportV2: process.env.NEXT_PUBLIC_SUPPORT_V2_SLS || '',
  nodalManagerEventFormUrl: 'https://forms.udchalo.com/udchalosubscriptionsudc1/form/CreateQRcode/formperma/eUwx0ficDG8z1UF14CWKBvEXWQa9NStFIF7DTxn-2R8',
  cryptoJSKey: '6LdPnaUUAAAAAOGKCahXrh2qOaSlVC2n8M-ofXfV',
  serverAuthKey: process.env.SERVER_AUTH_KEY || '',
  creditCardSearchFeedbackForm: 
  'https://forms.udchalo.com/udchalosubscriptionsudc1/form/CreditCardFeedbackform/formperma/74_XGc0iSdl3o318Cxd_ky2fABzgr36196ph3ccpqw0',
  taxFiling: process.env.NEXT_PUBLIC_TAX_FILING || '',
  primaryGA4ID: process.env.NEXT_PUBLIC_PRIMARY_GA4_ID || '',
  primaryGTMID: process.env.NEXT_PUBLIC_PRIMARY_GTM_ID || ''
}

