import DotObj from 'dot-object';

/**
 * Convert a object with 'dot notation' properties to a nested object
 * @param obj dot notated object
 * @returns nested object
 */
 export const nest = (obj: any): any => DotObj.object(obj);

 /**
  * Modify the value of a dot notated key of a given object
  * @param key dot notated key
  * @param value value to assign
  * @param target object to apply the modification to
  */
 export const amend = (key: string, value: any, target: object) => { DotObj.str(key, value, target) }