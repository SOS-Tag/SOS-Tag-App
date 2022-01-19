import { BsPencilFill } from 'react-icons/bs';
import Field from '../components/Field';
import Button from '../components/Button';

const MedicalForm = () => {
    return (
        <>
            
            <div className="bg-white mt-[2%] ml-[20%] w-1/3 px-[50px] py-[20px] rounded-3xl drop-shadow-md h-auto">

                <form>
                    {/* PARTIE 1 */}
                    <div className="formRowMedic w-full grid">
                        <h2 className="formRowMedic-item-a">Information générale</h2>
                        <BsPencilFill className="drop-shadow-md hover:drop-shadow-lg fill-SosTagYellow p-1 rounded-md w-8 h-8 bg-white hover:animate-pulse formRowMedic-item-b" />
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="text" label="Nom" mandatory={true} />
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={true} type="text" label="Prenom" mandatory={true} />
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="text" label="Sexe" mandatory={true}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={true} type="date" label="Date de naissance" mandatory={true}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="number" label="Taille (cm)" mandatory={true}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={true} type="number" label="Poids (kg)" mandatory={true}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="text" label="Groupe Sanguin" mandatory={true}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={true} type="text" label="Fumeur" mandatory={true}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="text" label="Don d'organe" mandatory={true}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={true} type="text" label="Directives anticipées" mandatory={true}></Field>
                        </div>
                    </div>

                    {/* PARTIE 2 */}

                    <div className="formRowMedic w-full grid">
                        <h2 className="formRowMedic-item-a">Information santé</h2>
                        <BsPencilFill className="drop-shadow-md hover:drop-shadow-lg fill-SosTagYellow p-1 rounded-md w-8 h-8 bg-white hover:animate-pulse formRowMedic-item-b" />
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="text" label="Allergie(s) médicamenteuse(s)" mandatory={true} />
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="text" label="Antécédent(s) et traitement(s) en cours" mandatory={true}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="number" label="Vaccins manquants" mandatory={true}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="text" label="Diabète ?" mandatory={true}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={true} type="text" label="Hémophilie ?" mandatory={true}></Field>
                        </div>
                    </div>
                    <div className="formRowMedic w-full grid">
                        <div className="formRowMedic-item-a">
                            <Field editing={true} type="text" label="Épilepsie ?" mandatory={true}></Field>
                        </div>
                        <div className="formRowMedic-item-b">
                            <Field editing={true} type="text" label="Port d'un pacemaker ?" mandatory={true}></Field>
                        </div>
                    </div>

                    <Button box="fill" type="general" buttonText="Valider" />
                </form>
            </div>
        </>
    );
}

export default MedicalForm;