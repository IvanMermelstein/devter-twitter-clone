import { useEffect, useState } from 'react'
import AppLayout from 'components/AppLayout'
import styles from './styles.module.css'
import Devit from 'components/Devit'

export default function HomePage () {

    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/statuses/home_timeline')
        .then(res => res.json())
        .then(setTimeline)
    })

    return (
        <>
            <AppLayout>
                <header className={styles.header}>
                    <h2>Inicio</h2>
                </header>

                <section className={styles.section}>
                    {
                        timeline.map(devit => (
                            <Devit
                                key={devit.id}
                                username={devit.username}
                                avatar={devit.avatar}
                                message={devit.message}
                                id={devit.id}
                            />
                        ))
                    }
                </section>

                <nav className={styles.nav}>

                </nav>
            </AppLayout>
        </>
    )
}