import {/*useCallback,*/useState,useEffect} from 'react';
import { useDataApi } from './dataApi';

export const useMainNavData = ()=>{

    const [mainNav, setMainNav] = useState([]);
    const [{data,isLoading}] = useDataApi({url:'/api/fgetnav',method:'post',initialData:[]});
    useEffect(()=>{
        if (!isLoading&&data.length>0) {
            let nav = data.map(opt=>{
                let path;
                switch(opt.id){
                    case 142:
                        path = `/index`;
                        break;
                    case 143:
                        path = `/market`;
                        break;
                    case 144:
                        path = `/bidding`;
                        break;
                    case 145:
                        path = `/bidhall`;
                        break;
                    case 146:
                        path = `/complex`;
                        break;
                    case 250:
                        path = `/baike`;
                        break;
                    case 251:
                        path = `/download`;
                        break;
                    /*case 149:
                        path = `/error`;
                        break;*/
                    default:
                        path = `/category/${opt.id}`;
                }
                return ({
                    ...opt,
                    path,
                    label:opt.name
                })
            });
            setMainNav(nav);
        };
    },[data,isLoading]);
    return [mainNav];
}