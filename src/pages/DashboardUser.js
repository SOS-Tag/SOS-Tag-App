import Button from "../components/Button.js";

const DashboardUser = () => {
    return ( 
        <>
        <h1>Ceci est un dashboard !</h1>
        <Button box="fill" type ="general" buttonText="Clique ici !"/>
        <Button box="fill" type ="secondaire" buttonText="Clique là !"/>
        <Button box="fill" type ="delete" buttonText="Clique pas ici !"/>
        <Button box="stroke" type="general" buttonText="Clique pas ici !"/>
        </>
     );
}
 
export default DashboardUser;