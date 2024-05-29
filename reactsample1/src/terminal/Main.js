import TerminalInfo from "./components/terminalInfo";
import axios from "axios";
import {useRecoilState, useRecoilValueLoadable} from "recoil";
import {TerminalInfoAtom, TerminalInfoSelector} from "./atom/terminalInfoAtom";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import TerminalState from "./components/terminalState";
import {TerminalStateAtom, TerminalStateSelector} from "./atom/terminalStateAtom";

function Main(){
    //라우터
    const navigate = useNavigate();

    //정상 TID로 검색했는데 이력이 없는 경우 빈 테이블 출력하는 플래그
    const [termFlag, setTermFlag] = useState(false);

    //검색할 TID 설정
    const [terminalID, setTerminalId] = useState("");
    const searchTerminalId = (e) => {
        setTerminalId(e.target.value);
    }

    //단말기 정보 기본 데이터(atom) 및 검색 - useRecoilValueLoadable는 비동기 작업 단계를 성공/로딩중/에러로 관리함
    const [terminalData, setTerminalData] = useRecoilState(TerminalInfoAtom)
    const terminalLoadable = useRecoilValueLoadable(TerminalInfoSelector(terminalID))

    //단말기 상태 기본 데이터(atom) 및 검색 - useRecoilValueLoadable는 비동기 작업 단계를 성공/로딩중/에러로 관리함
    const [terminalStateData, setStateTerminalData] = useRecoilState(TerminalStateAtom)
    const terminalStateLoadable = useRecoilValueLoadable(TerminalStateSelector(terminalID))

    //통신 상태를 보임
    const handleClick = async () => {
        //단말기 정보
        if (terminalLoadable.state === 'hasValue') {
            console.log("terminalLoadable.contents)==" + terminalLoadable.contents);
            setTerminalData(terminalLoadable.contents);
        } else if (terminalLoadable.state === 'loading') {
            console.log('Loading...');
        } else if (terminalLoadable.state === 'hasError') {
            alert("올바른 단말기ID를 입력 해주세요.")
            console.error(terminalLoadable.contents);
        }

        //단말기 상태
        if (terminalStateLoadable.state === 'hasValue') {
            console.log("terminalStateLoadable.contents)==" + terminalStateLoadable.contents);
            setStateTerminalData(terminalStateLoadable.contents);
            if(terminalStateLoadable.contents != ""){
                setTermFlag(true);
            }
        } else if (terminalStateLoadable.state === 'loading') {
            console.log('Loading...');
        } else if (terminalStateLoadable.state === 'hasError') {
            console.error(terminalStateLoadable.contents);
        }
    };

    //index 페이지로 이동
    const goIndex = () => {
        navigate('/');
    };

    return(
        <section>
            <h2>TerminalMain 입니다.</h2>

            단말기 번호 : <input type="text" onChange={searchTerminalId}/>
            <button onClick={handleClick}>검색</button>

            <div>
                {terminalData != null && <TerminalInfo key={terminalData.code} terminalData={terminalData}/>}
            </div>

            <div>
                {/*검색 하면 빈 테이블은 생성되게 조건을 2개 설정*/}
                {terminalStateData != null && termFlag && (
                    <TerminalState key={terminalData.code} terminalStateData={terminalStateData} />
                )}
            </div>

            <div className='buttonBox'>
                <button onClick={goIndex}>첫 화면으로</button>

            </div>
        </section>
    )
}

export default Main;