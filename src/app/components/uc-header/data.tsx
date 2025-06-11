// app/components/uc-header/data.tsx
import type { IFooBar } from '@/common/interface';
import { ucEnv } from '@/constants/envVars';

export const headerCategory: IFooBar[] = [
  { id: 1, val: 'Flights', link: `${ucEnv.ucUrl}/flights` },
  { id: 2, val: 'Holidays', link: `${ucEnv.ucUrl}/udchaloHolidays` },
  { id: 3, val: 'Shopping', link: `${ucEnv.ucUrl}/defense/shopping` },
  { id: 4, val: 'Housing', link: `${ucEnv.ucUrl}/housing` },
  { id: 5, val: 'Finance', link: `${ucEnv.ucUrl}/itrFiling` },
];

export const headerNavigation: string[] = [
  `${ucEnv.ucUrl}/support`,
  `${ucEnv.ucUrl}`
];
