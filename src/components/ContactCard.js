import { BsPencilFill } from 'react-icons/bs';
import Field from './Field';


const ContactCard = () => {
    return (
        <>
            <div className="w-1/4 mt-[25%] bg-SosTagYellow ml-[-22%] z-50 px-[50px] py-[20px] rounded-3xl drop-shadow-md">
                <form>
                    {/* PARTIE 1 */}
                    <div className="formRowMedicCard w-full grid">
                        <h2 className="formRowMedicCard-item-a">Information générale</h2>
                        <BsPencilFill className="drop-shadow-md hover:drop-shadow-lg fill-SosTagYellow p-1 rounded-md w-8 h-8 bg-white hover:animate-pulse formRowMedicCard-item-b" />
                    </div>
                    <div className="formRowMedicCard w-full grid">
                        <div className="formRowMedicCard-item-a">
                            <Field editing={true} type="text" label="Prénom NOM" mandatory={true} />
                        </div>
                        <div className="formRowMedicCard-item-b">
                            <Field editing={true} type="tel" label="Numéro de téléphone" mandatory={true} />
                        </div>
                    </div>

                    {/* PARTIE 2 */}

                    <div className="formRowMedicCard w-full grid">
                        <h2 className="formRowMedicCard-item-a">Laboratoire</h2>
                    </div>
                    <div className="formRowMedicCard w-full grid">
                        <div className="formRowMedicCard-item-a">
                            <Field editing={true} type="text" label="Entreprise" mandatory={true} />
                        </div>
                        <div className="formRowMedicCard-item-b">
                            <Field editing={true} type="tel" label="Numéro de téléphone" mandatory={true} />
                        </div>
                    </div>

                    {/* PARTIE 3 */}

                    <div className="formRowMedicCard w-full grid">
                        <h2 className="formRowMedicCard-item-a">Contact d'urgence</h2>
                    </div>
                    <div className="formRowMedicCard w-full grid">
                        <div className="formRowMedicCard-item-a">
                            <Field editing={true} type="text" label="Prénom NOM" mandatory={true} />
                        </div>
                        <div className="formRowMedicCard-item-b">
                            <Field editing={true} type="tel" label="Numéro de téléphone" mandatory={true} />
                        </div>
                        <div className="formRowMedicCard-item-a">
                            <Field editing={true} type="text" label="Rôle" mandatory={true} />
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}

export default ContactCard;