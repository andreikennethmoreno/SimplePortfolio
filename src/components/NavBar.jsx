
function NavBar() {
    return (
        <>  
            {/* ++ Sticky Nav and text center  */}
            <nav className="navbar text-center navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    {/* ++ fw-bold */}
                    {/* -- nav title */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* ++ justify content-center */}
                    {/* ++ fw-bold */}
                    
                    <div className="justify-content-center collapse navbar-collapse fw-bold" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* -- remove active tag */}
                                {/* ++ add the proper href #*/}
                                <a className="nav-link" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            {/* ++ replace drop down with nav-item */}
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            
                        </ul>
                        {/* -- Buttons */}

                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
