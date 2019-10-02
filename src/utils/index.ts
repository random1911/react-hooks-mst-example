export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const dashToCamel = (str: string) => {
  if (str === "_id") return str;
  return str
    .split("_")
    .map((part, i) => (i === 0 ? part : capitalize(part)))
    .join("");
};

export const camelToDash = (str: string) =>
  str.replace(/([A-Z])/g, g => {
    return `_${g[0].toLowerCase()}`;
  });

export const formatKeys = (data: any, getFromApi: boolean = true): any => {
  let value;
  const build: any = {};
  if (Array.isArray(data))
    return data.map(innerData => formatKeys(innerData, getFromApi));
  if (typeof data === "string" || typeof data === "number" || data === null)
    return data;

  Object.keys(data).forEach(key => {
    const destKey = getFromApi ? dashToCamel(key) : camelToDash(key);
    value = data[key];
    if (Array.isArray(value)) {
      value = value.map(item => formatKeys(item, getFromApi));
    } else if (typeof value === "object" && value !== null) {
      value = formatKeys(value, getFromApi);
    }
    build[destKey] = value === null ? undefined : value;
  });

  return build;
};

export const isNumber = (value: any) => !Number.isNaN(parseFloat(value));

export const jsonCopy = (src: any) => {
  return JSON.parse(JSON.stringify(src));
};

export const formatParams = (params: any) => {
  return Object.keys(params)
    .filter(key => params[key] !== undefined)
    .map(key => {
      const formattedKey = camelToDash(key);
      const param = params[key];
      return Array.isArray(param)
        ? `${param
            .map(string => `${encodeURIComponent(formattedKey)}[]=${string}`)
            .join("&")}`
        : `${encodeURIComponent(formattedKey)}=${encodeURIComponent(param)}`;
    })
    .join("&");
};

export const getBemClassName = (baseClass: string, modifiers: any = {}) => {
  const keys: string[] = Object.keys(modifiers);
  const existingModifiers = keys.filter(key => modifiers[key]);
  const modifiersString = existingModifiers
    .map(item => `${baseClass}_${camelToDash(item)}`)
    .join(" ");
  return `${baseClass} ${modifiersString}`.trim();
};

export const isElementInsideParent = (
  targetNode: HTMLElement,
  parentNode: HTMLElement
) => {
  if (targetNode === parentNode) {
    return true;
  }
  while (targetNode.parentElement && targetNode !== document.body) {
    targetNode = targetNode.parentElement;
    if (targetNode === parentNode) {
      return true;
    }
  }
  return false;
};

export const searchStringIgnoreCase = (substr: string, source: string) => {
  if (!substr) return false;
  const re = new RegExp(substr, "i");
  return re.test(source);
};

export const renameCustomKeysFromApi = (responseBody: any, customKeys: any) => {
  const copy = { ...responseBody };
  const keys: string[] = Object.keys(customKeys);
  keys.forEach(key => {
    copy[key] = copy[customKeys[key]];
  });
  return copy;
};

export const renameCustomKeysToApi = (requestBody: any, customKeys: any) => {
  const copy = { ...requestBody };
  const keys: string[] = Object.keys(customKeys);
  keys.forEach(key => {
    const value = copy[key];
    delete copy[key];
    copy[customKeys[key]] = value;
  });
  return copy;
};
