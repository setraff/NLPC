type AnyObject = { [key: string]: any };

function filterTruthyKeys(obj: AnyObject): AnyObject {
  const result: AnyObject = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]) {
      result[key] = obj[key];
    }
  }

  return result;
}

export default filterTruthyKeys;
