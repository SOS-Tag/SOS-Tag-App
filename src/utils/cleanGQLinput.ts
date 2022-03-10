import { SheetContact, SheetDoctorContact } from "../generated/graphql";

export const cleanGQLinput = (obj: any): any => {
  const toRemove = ['__typename', '_id'];
  return Object.entries(obj).map(([k, v]: [string, any]) => (
    toRemove.includes(k)
      ? [k, null]
      : (v && v.toString() === '[object Object]')
        ? [k, cleanGQLinput(v)]
        : (v && Array.isArray(v))
          ? [k, v.map((e: any) => cleanGQLinput(e))]
          : [k, v]
  ))
    .filter(([k, v]) => v !== null && v !== undefined)
    .reduce((acc, [k, v]) => (
      { ...acc, [k]: v }
    ), {});
};

// export const cleanGQLinput2 = (obj: any, e:any, treatingDoctor: SheetDoctorContact | undefined, emergencyContacts: SheetContact[]): any => {
//   const toRemove = ['__typename', '_id'];
//   return Object.entries(obj).map(([k, v]: [string, any]) => (
//     toRemove.includes(k)
//       ? [k, null]
//       : (v && v.toString() === '[object Object]')
//         ? [k, treatingDoctor]
//         : (v && Array.isArray(v))
//           ? [k, emergencyContacts]
//           : [k, v]
//   ))
//     .filter(([k, v]) => v !== null && v !== undefined)
//     .reduce((acc, [k, v]) => (
//       { ...acc, [k]: v }
//     ), {});
// };
