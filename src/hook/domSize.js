import {/*useCallback,*/useState,useEffect} from 'react';

export const useDomSize = (initDom)=>{

    const [dom,setDom] = useState();
    const [size,setSize] = useState({
            width:dom?dom.clientWidth||0:0,
            hieght:dom?dom.clientHeight||0:0
    })

    /*const onResize = useCallback(()=>{
        setSize({
            width:dom?dom.clientWidth||0:0,
            hieght:dom?dom.clientHeight||0:0
        })
    },[dom])*/

    useEffect(()=>{
        if (dom) {
            setSize({
                width:dom.clientWidth,
                hieght:dom.clientHeight
            });
        }

        /*if (dom) {
            console.log(dom)
            window.addEventListener('resize',onResize);
        };
        return (()=>{
            try{
                window.removeEventListener('resize',onResize)
            }catch(e){
                console.log(e);
            }
        });*/
    },[dom])

    return [size,setDom];
}