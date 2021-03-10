import { useState } from 'react';
import { useEffectOnce} from 'react-use';
import { ServicesModel } from '../common';

export const useNoticeNumData = ()=>{
    const [data,setData] = useState({});
    const [timer/*,setTimer*/]= useState(null);
    useEffectOnce(()=>{
        const getData = ()=>{
            ServicesModel.getNoticeNum().subscribe({
                next:res=>{
                    setData(res);
                    // let _t = setTimeout(()=>getData(),5000);
                    // setTimer(_t);
                }
            });
        };
        getData();
        return ()=>{
            timer&& clearInterval(timer);
        }
    });
    return [data];
}