export function downloadContactClick(
  name: string,
  phone: string,
  email: string
) {
  const vcfContent = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${name}`,
    'ORG:udChalo',
    `TEL;TYPE=WORK,VOICE:${phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${email}`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcfContent], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'contact.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export const formatNumber = (val: string | number): string => {
  let processedValue: string = '';

  if (typeof val === 'number' || typeof val === 'string') {
    let parsedValue: number = 0;
    const value = val.toString();
    parsedValue = parseInt(value, 10);
    if (parsedValue) {
      if (parsedValue >= 100000000) {
        processedValue = `${(parsedValue / 10000000).toFixed(0)} Cr+`;
      } else if (parsedValue >= 10000000) {
        processedValue = `${(parsedValue / 10000000).toFixed(1)} Cr+`;
      } else if (parsedValue >= 100000) {
        processedValue = `${(parsedValue / 100000).toFixed(0)} Lakh+`;
      }
    }
  }
  return `${processedValue}`;
};

export const dateFormatter = (dateString: string) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  const date = new Date(dateString);
  const newDate = date.toLocaleDateString('en-GB', dateOptions);
  const formattedDate =  newDate.replace(/(\w+)\s(\d+)/, '$1, $2');
  return formattedDate;
};

export const upsaleConfigNames: { [key in 'COMMONINSURANCE' | 'SURAKSHA' | 'SECURETRAVEL' | 'BUTTONSCONTENT']: string } = {
  COMMONINSURANCE: "common-insurance",
  SURAKSHA: "suraksha",
  SECURETRAVEL: "securetravel",
  BUTTONSCONTENT: "buttonsContent"
}

export const priceStringReplace = (priceString: string, priceVal: number) => {
  const startIdx = priceString.indexOf('{{');
  const endIdx = priceString.indexOf('}}');
  return priceString.substring(0, startIdx) + priceVal + priceString.substring(endIdx+2);
}

export const deepClone = (obj: any): any => {
  // Handle null or primitive values
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle Map objects
  if (obj instanceof Map) {
    return new Map(
      Array.from(obj.entries()).map(([key, value]) => [key, deepClone(value)])
    );
  }

  // Handle Set objects
  if (obj instanceof Set) {
    return new Set(Array.from(obj).map(deepClone));
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  // Handle plain objects
  const clonedObj: any = {};
  Object.keys(obj).forEach((key: string) => {
    clonedObj[key] = deepClone(obj[key]);
  });

  return clonedObj;
};

export const haveDifference = (arr1 : string[], arr2: string[]) : boolean => {
  // Convert arrays to sets for easier comparison
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Compare sizes first for quick exit if they are different
  if (set1.size !== set2.size) {
    return true; // Difference found
  }

  // Check if all elements in set1 are present in set2
  return arr1.some(item => !set2.has(item));
}

export const updateUrl = (user: any, url: string = ""): string => {
  let modifiedUrl: string = '';

  const replacePlaceholders = () =>
    url.replace(/{{(user_[a-zA-Z0-9_.]+)}}/g, (val1, key) => {
      const [val2, storeKey, ...path] = key.split('_');
      const store = user?.[storeKey];

      if (!store) return '';

      const value = path.reduce((acc: { [x: string]: any; }, curr: string | number) => acc && acc[curr] !== undefined ? acc[curr] : undefined, store);
      return value !== undefined ? value : '';
    });

  if (user) {
    modifiedUrl = replacePlaceholders();
  } else {
    const [baseUrl, queryString] = url.split('?');
    if (!queryString) return url;

    const newQuery = queryString
      .split('&')
      .filter((param) => {
        const value = param.split('=')[1];
        return !/^\{\{.*\}\}$/.test(value);
      })
      .join('&');

    modifiedUrl = newQuery ? `${baseUrl}?${newQuery}` : baseUrl;
  }

  return modifiedUrl;
};
