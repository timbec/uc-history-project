import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function header() {
    return (
        <header className="main-header">
            <div className="logo">mainlogo</div>
            <h1>
                <Link href="/">
                Uranium City History Project
                </Link>
            </h1>
            <div className="sub-logo">sublogo</div>

            <nav>
                <ul>
                    <li>
                        <Link href="/news">
                            News
                        </Link>
                    </li>
                    <li>
                        <Link href="/places">
                            Places
                        </Link>
                    </li>
                    <li>
                        <Link href="/stories">
                            Stories
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
