import Link from "next/link";


export default function Navigation() {


    return (

        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid top-container">
                <Link href="/" className="navbar-brand logo text-white">
                    Threads Symbol
                </Link>
                <div className="navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-0 mt-0 mb-lg-0">
                    <li className="nav-item">
                            <Link href="/">

                              Home

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">

                               About Us

                            </Link>
                        </li>
                   
                        <li className="nav-item">
                            <Link href="/privacy">

                                Privacy Policy

                            </Link>
                        </li>
                      
                        <li className="nav-item">
                            <Link href="mailto:manisharoracode@gmail.com">

                                Contact Us

                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}
