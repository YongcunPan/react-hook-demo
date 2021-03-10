import React from 'react';
import css from './userauth.module.less';
import classNames from 'classnames';

export const UserAuthSteps = (props)=>{
    const { currentStep=0,children,setStep } = props;
    let steps = '填写信息,等待审批,完成认证';
    steps = steps.split(',');
    return (
        <div className={ css.stepWrap }>
            <div className={ css.steps }>
                {
                    steps.map((o,i)=>
                        <div key={i} className={ classNames(css.step,{ [css.active]:currentStep===i}) }
                            onClick={ ()=>setStep&&setStep(i) }>{i+1}、{o}</div>
                    )
                }
            </div>
            <div>{children[currentStep]||children}</div>
        </div>
    );
}