import ButtonSection from "../buttonSection/ButtonSection";
import './index.scss'
import { data } from '../../mocks/GroupBtnSec'

export default function GroupBtnSec({ setIsOpen }) {
    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className="groupbtnsec">
                <div className="groupbtnsec__btns">
                    {data.map((item) =>(
                        <ButtonSection
                            key={item.id}
                            onClick={handleClick}
                            link={item.link}
                            cor={item.cor}
                            src={item.src}
                            alt={item.src}
                            titulo={item.titulo}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}