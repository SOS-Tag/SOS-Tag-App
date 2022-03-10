import React, { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

import { withAuth } from '../guards/auth';
import { Sheet, SheetDoctorContact, SheetContact, useSheetsCurrentUserQuery, useUpdateCurrentUserSheetMutation } from '../generated/graphql';

import { cleanGQLinput } from '../utils/cleanGQLinput';
import MedicalForm from '../components/MedicalForm';
import BlockQR from '../components/BlockQR';
import UserSwitch from '../components/UserSwitch';
import { amend } from '../utils/object';

type MedicalCardType = {
}

const MedicalCard: React.FC<MedicalCardType> = ({ }) => {

  const [updateSheet] = useUpdateCurrentUserSheetMutation();
  const { data, loading, error } = useSheetsCurrentUserQuery({ fetchPolicy: 'network-only' });
  const [allCardsNames, setAllCardsNames] = useState([""]);
  const [sheets, setSheets] = useState<Sheet[]>([]);
  const [sheetIdx, setSheetIdx] = useState<number>(0);
  const [treatingDoctor, setTreatingDoctor] = useState<SheetDoctorContact>()
  const [emergencyContacts, setEmergencyContacts] = useState<SheetContact[]>([{}])
  const [editInfo, setEditInfo] = useState(false);

  useEffect(() => {
    setEditInfo(false)
  }, [data, sheetIdx]);

  useEffect(() => {
    if (sheets && sheets[sheetIdx] && sheets[sheetIdx].treatingDoctor !== null)
      setTreatingDoctor(sheets[sheetIdx].treatingDoctor!);
  }, [data, sheetIdx]);

  useEffect(() => {
    if (sheets && sheets[sheetIdx] && sheets[sheetIdx].emergencyContacts !== null)
      setEmergencyContacts(sheets[sheetIdx].emergencyContacts! as any);
  }, [data, sheetIdx]);

  useEffect(() => {
    const sheets = data?.sheetsCurrentUser?.response
    sheets && setSheets(sheets.map(e => ({ ...e })));
  }, [data]);

  useEffect(() => {
    if (data && data.sheetsCurrentUser && data.sheetsCurrentUser.response) {
      const r = data.sheetsCurrentUser.response.map(e => {
        return e.fname + " " + e.lname;
      })
      setAllCardsNames(r)
    }
  }, [data]);

  // const modifyDoctorValues = (k: string, v: string | number | undefined) => {
  //   let doc = treatingDoctor;
  //   if (k === "fname") {
  //     if (doc) doc["fname"] = String(v)
  //   }
  //   else if (k === "lname") {
  //     if (doc) doc["lname"] = String(v)
  //   }
  //   else {
  //     if (doc) doc["phone"] = String(v)
  //   }
  //   setTreatingDoctor(doc);
  // }

  // const modifyEmergencyContactsValues = (id: number, k: string, v: string | number | undefined) => {
  //   let contacts = emergencyContacts;
  //   if(!contacts[id]) contacts.push({fname:"",lname:"", phone:"", role:""});
  //   if (k === "fname") {
  //     if (contacts) contacts[id].fname = String(v)
  //   }
  //   else if (k === "lname") {
  //     if (contacts) contacts[id].lname = String(v)
  //   }
  //   else if (k === "phone") {
  //     if (contacts) contacts[id].phone = String(v)
  //   }
  //   else if (contacts) contacts[id].role = String(v)

  //   console.log(contacts);   
  //   setEmergencyContacts(contacts);
  // }

  if (loading) {
    console.log("En attente des informations de l'utilisateur connecté ...")
  }

  if (error) {
    console.log(error.message)
  }

  if (data?.sheetsCurrentUser?.error) {
    console.log(data.sheetsCurrentUser.error?.message as string)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(sheets[sheetIdx]);
    console.log(cleanGQLinput(sheets[sheetIdx]));
    

    updateSheet({
      variables: {
        updateCurrentUserSheetInput: {
          id: sheets[sheetIdx]._id,
          changes: {
            ...cleanGQLinput(sheets[sheetIdx])
          }
        },
      }
    });
  }

  const handleChange = (key: string, { e, value }: { e?: ChangeEvent<HTMLInputElement>, value?: string | boolean }) => {
    console.log(e)
    if (value === null || value === undefined) {
      if (!e) return;
      value = e.currentTarget.value;
    }

    setSheets(prev => {
      let res: any = [...prev];
      amend(key, value, res[sheetIdx]);
      console.log(res)
      return res;
    });
  }

  // const prepareSheetForMutation = (e: any) => {
    
  //   setSheets(prev => {
  //     let res = [...prev];
  //     res[sheetIdx] = cleanGQLinput2(sheets[sheetIdx], e, treatingDoctor, emergencyContacts);
  //     console.log(res);
      
  //     // setSheets(sheets.map(e => ({ ...e })));
  //     // setSheets(res);
  //     // console.log(res);

      
  //     return res
  //   });
  // }

  if (!data || !data.sheetsCurrentUser || !data.sheetsCurrentUser.response || !sheets || !sheets[sheetIdx] || !sheets[sheetIdx]._id) {
    return <>
      <p>samarchpa</p>
    </>
  } else {
    return (
      <>
        <div className='noFlex overflow-x-hidden'>
          <div className='MedicAside'>
            <UserSwitch id={sheetIdx} setId={setSheetIdx} cardsNames={allCardsNames} />
            <BlockQR id={sheets[sheetIdx]._id} />
          </div>
          <MedicalForm userCard={sheets[sheetIdx]} handleSubmit={handleSubmit} editInfo={editInfo} setEditInfo={setEditInfo} handleChange={handleChange} />
        </div>
      </>
    );
  }
}

export default withAuth(MedicalCard);