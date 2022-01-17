const Header = () => {
    return (  
        <nav className="header">
            <h1> SOS Tag </h1>
            <div className="links">
                <a href="/"> Vue d'ensemble </a>
                <a href="/medicalform"> Fiche personnelle</a>
                <a href="/basket"> Mon panier</a>
                <a href="/account"> Mon compte</a>
            </div>
        </nav>


    );
}
 
export default Header;