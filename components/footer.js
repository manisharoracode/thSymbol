import Link from "next/link";
export default function Footer() {

    return (
        <div className="footer">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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

                        </li>
                        <li className="nav-item">
                            <Link href="/privacy">

                                Privacy Policy

                            </Link>
                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">
                            <Link href="mailto:manisharoracode@gmail.com">

                                Contact Us

                            </Link>
                        </li>
                    </ul>

        </div>
    );
}
