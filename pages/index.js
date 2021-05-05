import { useState, useEffect } from 'react'
import Head from 'next/head'
import AppLayout from 'components/AppLayout'
import { colors } from 'styles/theme'
import Button from 'components/Button'
import GitHub from 'components/Icons/GitHub'
import { loginWithGitHub, onAuthStateChange } from '../firebase'
import Avatar from 'components/Avatar/Index'

export default function Home() {

    const [user, setUser] = useState(undefined)
    
    useEffect(() => {
        onAuthStateChange(setUser)
    }, [])

    const handleClick = () => {
        loginWithGitHub()
            .then(user => {
                setUser(user)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return (
        <>
        <Head>
            <title>Devter</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <AppLayout>
            <section>
                <img src="/devter-logo.png" alt="Logo" />
                <h1>Devter</h1>
                <h2>Talk about development<br /> with developers 👨‍💻👩‍💻</h2>
                <div>
                    {
                        user === undefined &&
                        <Button onClick={handleClick}>
                            <GitHub fill={'white'} width={24} height={24} />
                            Login with GitHub
                        </Button>
                    }            
                    {
                        user && user.avatar &&
                        <div>
                            <Avatar src={user.avatar} alt={user.username} text={user.username} />
                        </div>                        
                    }        
                </div>
            </section>
        </AppLayout>

        <style jsx>{`
            img {
                width: 120px;
            }

            section {
                display: grid;
                height: 100%;
                place-content: center;
                place-items: center;
            }

            div {
                margin-top: 16px;
            }

            h1 {
                color: ${colors.primary};
                font-weight: 800;
                margin-bottom: 16px;
            }

            h2 {
                color: ${colors.secondary};
                font-size: 21px;
                margin: 0;
            }
        `}</style>
        </>
    )
}
    