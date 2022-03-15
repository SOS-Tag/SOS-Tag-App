export const cleanGQLinput = (obj: any): any => {
  const toRemove = ['__typename', '_id'];
  const res = Object.entries(obj).map(([k, v]: [string, any]) => (
    toRemove.includes(k)
      ? [k, null]
      : (v && v.toString() === '[object Object]')
        ? [k, cleanGQLinput(v)]
        : (v && Array.isArray(v))
          ? [k, v.map((e: any) => cleanGQLinput(e))]
          : [k, v]
  ))
    .filter(([k, v]) => v !== null && v !== undefined)
    
    return Array.isArray(obj)
      ? res.reduce((acc, [k, v]) => ( [ ...acc, v ] ), [])
      : res.reduce((acc, [k, v]) => ( { ...acc, [k]: v } ), {})
};