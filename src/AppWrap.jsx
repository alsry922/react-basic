import Navbar from "./components/Navbar";
import AvatarAppWrap from "./basic/components/AvatarAppWrap";

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <AvatarAppWrap
                    image='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
                    name='Bob'
                    size={200}>
                </AvatarAppWrap>
                <p>안녕하세요!</p>
            </Navbar>
        </div>
    )
}