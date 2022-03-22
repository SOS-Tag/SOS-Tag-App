import React, { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

import { withAuth } from '../guards/auth';
import { Sheet, useSheetsCurrentUserQuery, useUpdateCurrentUserSheetMutation } from '../generated/graphql';

import { cleanGQLinput } from '../utils/cleanGQLinput';
import MedicalForm from '../components/MedicalForm';
import BlockQR from '../components/BlockQR';
import UserSwitch from '../components/UserSwitch';
import { amend } from '../utils/object';
import { useParams } from 'react-router-dom';

type MedicalCardType = {
}

const MedicalCard: React.FC<MedicalCardType> = () => {

  const [updateSheet] = useUpdateCurrentUserSheetMutation();
  const { data, loading, error } = useSheetsCurrentUserQuery({ fetchPolicy: 'network-only' });
  const [allCardsNames, setAllCardsNames] = useState([""]);
  const [sheets, setSheets] = useState<Sheet[]>([]);
  const [sheetIdx, setSheetIdx] = useState<number>(0);
  const [editInfo, setEditInfo] = useState(false);
  const [init, setInit] = useState(true);
  const { userId } = useParams();

  useEffect(() => {
    setEditInfo(false)
  }, [data, sheetIdx]);

  useEffect(() => {
    const sheets = data?.sheetsCurrentUser?.response
    sheets && setSheets(sheets.map(e => ({ ...e })));
    if(init && sheets){
      console.log("LA MEEEEEEEEEEEEEEEEEEEERDE")
      console.log(sheets.length);
      if(sheets.length > 0){
        let temp = 0;
        console.log("😼 ID : "+ userId)
        if(userId !== ":userId" && userId !== undefined && parseInt(userId!)<sheets.length)
          temp = parseInt(userId)
        console.log(temp);
        setSheetIdx(temp);
      }
      setInit(false);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.sheetsCurrentUser && data.sheetsCurrentUser.response) {
      const r = data.sheetsCurrentUser.response.map(e => {
        return e.fname + " " + e.lname;
      })
      setAllCardsNames(r)
    }
  }, [data]);

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
    setEditInfo(false);
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

  const handleChange = (key: string, { e, value }: { e?: ChangeEvent<HTMLInputElement>, value?: any }) => {
    if (value === null || value === undefined) {
      if (!e) return;
      value = e.currentTarget.value;
    }
    if (typeof value === 'string' && ['oui', 'true'].includes(value.toLowerCase().trim()))
      value = true;
    if (typeof value === 'string' && ['non', 'false'].includes(value.toLowerCase().trim()))
      value = false;

    console.log("###### " +key);
    console.log(value);
    
    setSheets(prev => {
      let res: any = [...prev];
      amend(key, value, res[sheetIdx]);
      return res;
    });
  }

  const handleSwitch = (e: number) => {
    console.log("------------------------------");
    console.log("changement d'id")
    window.history.replaceState(null, '', '/users/' + e)
    console.log("------------------------------");
    setSheetIdx(e);
  }

  if (!data || !data.sheetsCurrentUser || !data.sheetsCurrentUser.response || !sheets || !sheets[sheetIdx] || !sheets[sheetIdx]._id) {
    return <>
    </>
  } else {
    return (
      <>
        <div className='noFlex overflow-x-hidden'>
          <div className='MedicAside'>
            <UserSwitch id={sheetIdx} setId={handleSwitch} cardsNames={allCardsNames} />
            <BlockQR id={sheets[sheetIdx]._id} sheetEnabled={sheets[sheetIdx].enabled} />
          </div>
          <MedicalForm userCard={sheets[sheetIdx]} handleSubmit={handleSubmit} editInfo={editInfo} setEditInfo={setEditInfo} handleChange={handleChange} />
        </div>
      </>
    );
  }
}

export default withAuth(MedicalCard);
