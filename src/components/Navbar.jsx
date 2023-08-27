import AvatarAppWrap from "../basic/components/AvatarAppWrap";

export default function Navbar({children}) {
    return (
        <header style={{backgroundColor: 'yellow'}}>
                {children}
        </header>
    );
}