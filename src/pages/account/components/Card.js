import React from 'react';
import css from './Card.module.less';

export const Card = (props)=>{
    const { title } = props;
    return(
        <div className={ css.card }>
            {
                !!title &&
                <div className={ css.title }>{title}</div>
            }
            <div className={ css.cardBody }>
                {props.children }
            </div>
        </div>
    );
}