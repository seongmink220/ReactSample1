import axios from "axios";
import {atom, selectorFamily} from "recoil";

export const TerminalInfoAtom = atom({
    key: "TerminalInfoAtom",
    default: null,
});

export const TerminalInfoSelector = selectorFamily( {
    key: 'TerminalInfoSelector',
        get: (terminalID) => async () => {
        try{
            const response = await axios.get('https://devapi.ubcn.co.kr:17881/vmms/terminals/' + terminalID);
            console.log(response.data);
            return response.data;
        }catch (error){
            throw error;
        }
    },
});