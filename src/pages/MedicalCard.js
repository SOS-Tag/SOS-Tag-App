import MedicalForm from '../components/MedicalForm';
import BlockQR from '../components/BlockQR';
import ContactCard from '../components/ContactCard'

const MedicalCard = (user) => {
    const user2 = {
        id: 123456,
        isActivated: false,
        general: {
            name: "",
            surname: "",
            gender: "",
            birthdate: "2017/01/01",
            size: "",
            weight: "",
            bloodtype: "",
            smoker: "",
            organDonation: "",
            guidelines: "",
        },
        sante: {
            allergy: "",
            treatments: "",
            missingVaccines: "",
            diabetes: "",
            hemophilia: "",
            epilepsy: "",
            pacemaker: "",
        },
        contact: {
            drName: "",
            drPhone: "",
            labName: "",
            labPhone: "",
            emergencyName: "",
            emergencyPhone: "",
            emergencyRole: "",
        }
    }
    return (
        <>
            <MedicalForm user={user2} />
            <BlockQR user={user2}/>
            <ContactCard user={user2}/>
        </>
    );
}

export default MedicalCard;