import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <div id="normal">
                    <p id="logo">team.flow</p>
                    <div id="page-links">
                        <a href="#">How it Works</a>
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </div>
                    <div id="login">
                        <a href="#">Login</a>
                        <button>Get started free</button>
                    </div>
                </div>
                <div class="dropdown">
                    <p id="logo">team.flow</p>
                    <button>Menu</button>
                    <div class="dropdown-content">
                        <a href="#">How it Works</a>
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                        <a href="#">Login</a>
                        <a href="#" id="start-free">Get started free</a>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;