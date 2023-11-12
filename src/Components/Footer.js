const Footer = () => {
    return (
        <footer className="container">
            <p className="float-right"><a href="/">Volver al inicio</a></p>
            <p>&copy; {(new Date().getFullYear())} UNITEC. &middot; <img src="https://fundahrse.org/wp-content/uploads/2022/08/Logo-35-an%CC%83os-full-color-3.png" width="100" /> </p>
        </footer>
    );
}

export default Footer;