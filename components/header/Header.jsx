import Link from "next/link"
import GroupBtnSec from "../_ui/groupBtnSec/GroupBtnSec"
import './index.scss'

export default function Header() {
    return(
        <>
            <header className="header">
                <Link href="/">
                    <div className="header__btnvoltar">Home</div>
                </Link>
                <div className="header__groupbtnsec">
                    <GroupBtnSec/>
                </div>
            </header>
        </>
    )
}