import { BsPencilFill } from 'react-icons/bs';
import Field from '../components/Field';
import Button from '../components/Button';
import { useState } from 'react';

const MedicalForm = (props) => {
    
    let g = props.user.general;
    let s = props.user.sante;

    // BOUTONS EDIT

    const [editable_1, setEditable_1] = useState(false);
    function handleEditable_1() {
        editable_1 ? setEditable_1(false) : setEditable_1(true);
    }

    const [editable_2, setEditable_2] = useState(false);
    function handleEditable_2() {
        editable_2 ? setEditable_2(false) : setEditable_2(true);
    }

    // OPTIONS

    const tf = [
        {
            value: true,
            name: "oui",
        },
        {
            value: false,
            name: "non",
        }
    ];

    // PARTIE 1

    const [name, setName] = useState(g.name);
    const [surname, setSurname] = useState(g.surname);
    const [gender, setGender] = useState(g.gender);
    const [birthdate, setBirthdate] = useState(g.birthdate);
    const [size, setSize] = useState(g.size);
    const [weight, setWeight] = useState(g.weight);
    const [bloodtype, setBloodtype] = useState(g.bloodtype);
    const [smoker, setSmoker] = useState(g.smoker);
    const [organDonation, setOrganDonation] = useState(g.organDonation);
    const [guidelines, setGuidelines] = useState(g.guidelines);

    // PARTIE 2     

    const [allergy, setAllergy] = useState(s.allergy);
    const [treatments, setTreatments] = useState(s.treatments);
    const [missingVaccines, setMissingVaccines] = useState(s.missingVaccines);
    const [diabetes, setDiabetes] = useState(s.diabetes);
    const [hemophilia, setHemophilia] = useState(s.hemophilia);
    const [epilepsy, setEpilepsy] = useState(s.epilepsy);
    const [pacemaker, setPacemaker] = useState(s.pacemaker);
    

    return (
        <>
            <div className="bg-white mt-[2%] ml-[20%] w-1/3 px-[50px] py-[20px] rounded-3xl drop-shadow-md h-auto">

                <form>
                    {/* PARTIE 1 */}
                    <div className="formRowMedic w-full grid">
                        <h2 className="formRowMedic-item-a">Information générale</h2>
                        <BsPencilFill onClick={handleEditable_1} className="drop-shadow-md hover:drop-shadow-lg fill-SosTagYellow p-1 rounded-md w-8 h-8 bg-white hover:animate-pulse formRowMedic-item-b" />
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setName} editing={editable_1} type="text" label="Nom" mandatory={true} value={name !== null ? name : ""}/>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field onChange={setSurname} editing={editable_1} type="text" label="Prenom" mandatory={true} value={surname !== null ? surname : ""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setGender} editing={editable_1} type="text" label="Sexe" mandatory={true} value={gender !== null ? gender : ""}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field onChange={setBirthdate} editing={editable_1} type="date" label="Date de naissance" mandatory={true} value={birthdate !== null ? birthdate : ""}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setSize} editing={editable_1} type="number" label="Taille (cm)" mandatory={true} value={size !== null ? size : ""}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field onChange={setWeight} editing={editable_1} type="number" label="Poids (kg)" mandatory={true} value={weight !== null ? weight : ""}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setBloodtype} editing={editable_1} type="text" label="Groupe Sanguin" mandatory={true} value={bloodtype !== null ? bloodtype : ""}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field onChange={setSmoker} editing={editable_1} type="select" option={tf} label="Fumeur" mandatory={true} value={smoker !== null ? smoker : ""}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setOrganDonation} editing={editable_1} type="text" label="Don d'organe" mandatory={true} value={organDonation !== null ? organDonation : ""}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field onChange={setGuidelines} editing={editable_1} type="text" label="Directives anticipées" mandatory={true} value={guidelines !== null ? guidelines : ""}></Field>
                        </div>
                    </div>

                    {/* PARTIE 2 */}

                    <div className="formRowMedic w-full grid">
                        <h2 className="formRowMedic-item-a">Information santé</h2>
                        <BsPencilFill onClick={handleEditable_2} className="drop-shadow-md hover:drop-shadow-lg fill-SosTagYellow p-1 rounded-md w-8 h-8 bg-white hover:animate-pulse formRowMedic-item-b" />
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setAllergy} editing={editable_2} type="text" label="Allergie(s) médicamenteuse(s)" mandatory={true} value={allergy !== null ? allergy : ""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setTreatments} editing={editable_2} type="text" label="Antécédent(s) et traitement(s) en cours" mandatory={true} value={treatments !== null ? treatments : ""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setMissingVaccines} editing={editable_2} type="number" label="Vaccins manquants" mandatory={true} value={missingVaccines !== null ? missingVaccines : ""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setDiabetes} editing={editable_2} type="text" label="Diabète ?" mandatory={true} value={diabetes !== null ? diabetes : ""}/>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field onChange={setHemophilia} editing={editable_2} type="text" label="Hémophilie ?" mandatory={true} value={hemophilia !== null ? hemophilia : ""}/>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field onChange={setEpilepsy} editing={editable_2} type="text" label="Épilepsie ?" mandatory={true} value={epilepsy !== null ? epilepsy : ""}/>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field onChange={setPacemaker} editing={editable_2} type="text" label="Port d'un pacemaker ?" mandatory={true} value={pacemaker !== null ? pacemaker : ""}/>
                        </div>
                    </div>

                    <Button box="fill" type="general" buttonText="Valider" />
                </form>
            </div>
        </>
    );
}

export default MedicalForm;