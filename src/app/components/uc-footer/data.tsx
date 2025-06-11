import { IFooBar } from "@/common/interface";
import { ucEnv } from "@/constants/envVars";

export const companyVal: IFooBar[] = [
  { id: 1, val: "About Us", link: 'https://www.corporate.udchalo.com/' },
  { id: 2, val: "LeaderShip", link: 'https://www.corporate.udchalo.com/theteam' },
  { id: 3, val: "Booking Offices", link: `${ucEnv.ucUrl}/locations` },
  { id: 4, val: "Blogs", link: 'https://stories.udchalo.com/' },
  { id: 5, val: "Terms of Use", link: `${ucEnv.ucUrl}/policies/terms-of-use` },
  { id: 6, val: "Privacy Policy", link: `${ucEnv.ucUrl}/policies/privacy-policy` },
];

export const ImportantLinksVal: IFooBar[] = [
  { id: 1, val: "Contact Us", link: `${ucEnv.ucUrl}/contactus` },
  { id: 2, val: "FAQ'S", link: 'https://support.udchalo.com/support/home' },
  { id: 3, val: "LTC Claim", link: '/claimable-tickets' },
  { id: 4, val: "Forever Fauji", link: `${ucEnv.ucStatic}/ForeverFauji/index.html` },
];

export const OppurtunitiesVal: IFooBar[] = [
  { id: 1, val: "जुड़Chalo", link: '' },
  { id: 2, val: "#FamilyForLIFE", link: '' },
  { id: 3, val: "Careers", link: 'https://www.corporate.udchalo.com/udchalo-careers' },
  { id: 4, val: "Partner with Us", link: '' },
];

export const socialHandle: string[] = [
  'https://www.facebook.com/udchalo',
  'https://x.com/udchalo',
  'https://www.youtube.com/channel/UCa2XfSNuWwE5ryqLPp48t7w',
  'https://www.linkedin.com/company/udchalo/mycompany/',
  'https://www.instagram.com/udchalo_official/'
];

export const downloadStoreLink: string[] = [
  'https://play.google.com/store/apps/details?id=app.udChalo.flights&ah=wIu69aquTqbCHd50dPhX-lfg_M0&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1',
  'https://apps.apple.com/in/app/udchalo-super-app-for-soldiers/id1454639734'
];
