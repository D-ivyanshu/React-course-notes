interface CartProps{
    cartItemCount : number;
}

function Navbar({cartItemCount} : CartProps) {
    return (
        <>
        <h1>Nabar : {cartItemCount}</h1>
        </>
    );
}

export default Navbar;