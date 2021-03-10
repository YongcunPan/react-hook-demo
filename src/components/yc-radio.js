import React,{ useState,useEffect } from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useToggle } from 'react-use';
// import { useDomSize } from '../hook/domSize';
// import * as R from 'ramda';
import css from './yc-radio.module.less';


export const YcRadio = (props)=>{
    const { label,items,value='',onChange,name,className,style } = props;
    const [checkedValue,setValue] = useState(value);



    function handleChange(v){
        const { value } = v;
        setValue(value);
        onChange && onChange({[name]:value});

    }


    const [visible, toggleVisible] = useToggle(false);
    const [more, toggleMore] = useToggle(false);
    // const [wrapSize,setWrapDom] =useDomSize();
    // const [itemSize,setItemDom] = useDomSize();
    const [ innerAllWidth,setInnerAllWidth ] = useState(0);
    const [ wrapWidth,setWrapWidth ] = useState(0);

    useEffect(()=>{
        toggleMore(innerAllWidth>wrapWidth);
    },[innerAllWidth,wrapWidth,toggleMore]);
    // console.log(size);

    const getWrapDom=(dom)=>{
        if (dom) {
            setWrapWidth(dom.clientWidth);
            if (dom.children && dom.children.length>0) {
                let _sum=0;
                for (var i = 0; i < dom.children.length; i++) {
                    _sum +=dom.children[i].clientWidth;
                };
                _sum += dom.children.length*8;
                setInnerAllWidth(_sum);
            }
        }
    }



    return (
        <div className={ classNames(css['yc-radio'],className)  } style={ {...style} } >
            {
                !!label &&
                <div className={ css.label }>{ label }</div>
            }
            <div className={ css.list } ref={ _node=>getWrapDom(_node) } style={ { height:visible?'inherit':20 }}>
                {/*<i className={ classNames(checkedValue === ''?css.active:'',css.item)} onClick={ ()=>handleChange({value:''}) }>不限</i>*/}
                {
                    (items || []).map((opt,index)=>
                        <i className={ classNames(checkedValue === opt.value?css.active:'',css.item)  }
                            onClick={ ()=>handleChange(opt) }
                            key={ index }>{opt.name}</i>
                    )
                }
            </div>
            {
                more &&
                <div className={ css.toggle } onClick={ toggleVisible }><Icon type={ visible?"up":"down" } /></div>
            }
        </div>
    );
}

YcRadio.propTypes = {
    items: PropTypes.array.isRequired,
    name:PropTypes.string.isRequired
};