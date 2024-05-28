import axios from "axios";
import {atom, selectorFamily} from "recoil";

export const TerminalStateAtom = atom({
    key: "TerminalStateAtom",
    default: null,
});

export const TerminalStateSelector = selectorFamily( {
    key: 'TerminalStateSelector',
        get: (terminalID) => async () => {
        try{
            const response = await axios.get('https://devapi.ubcn.co.kr:17881/vmms/terminals/' + terminalID + '/status');
            console.log(response.data);
            return response.data;
        }catch (error){
            throw error;
        }
    },
});