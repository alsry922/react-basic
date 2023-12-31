import './AppTheme.css'
import {DarkModeContext, DarkModeProvider} from "./context/DarkModeContext";
import {useContext} from "react";

export default function AppTheme() {
    return (
        <DarkModeProvider>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </DarkModeProvider>
    );
}

function Header() {
    return <header className='header'>Header</header>;
}

function Main() {
    return (
        <main className='main'>
            Main
            <Profile></Profile>
            <Products></Products>
        </main>
    )
}

function Profile() {
    return (
        <div>
            Profile
            <User></User>
        </div>
    )
}

function User() {
    return <div>User</div>;
}

function Products() {
    return (
        <div>
            Products
            <ProductDetail></ProductDetail>
        </div>
    )
}

function ProductDetail() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    return (
        <div>
            Product Detail
            <p>DarkMode:
                {
                    darkMode ? (
                        <span style={{backgroundColor: 'black', color: 'white'}}>
                            Dark Mode
                        </span>
                    ) : (
                        <span>Light Mode</span>
                    )
                }</p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </div>
    )
}

function Footer() {
    return <footer className='footer'>Footer</footer>
}