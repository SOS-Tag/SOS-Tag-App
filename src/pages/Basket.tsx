import React from "react";
import { withAuth } from "../guards/auth";

type BasketType = {}

const Basket: React.FC<BasketType> = ({}) => {
    return ( 
        <h1>Panier de commande !</h1>
     );
}
 
export default withAuth(Basket);