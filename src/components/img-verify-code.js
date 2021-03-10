import React,{ useState } from 'react';

export const ImgVerifyCode =(props)=>{
    const { className,type='recover' } =props;
    const [captchaUrl,setImgUrl] = useState('/api/getCaptcha');
    const updateImg = ()=>{
        const _src = `/api/getCaptcha?type=${type}&imageW=110&imageH=38&tm=` + (new Date().getTime());
        setImgUrl(_src);
    }

    return (
        <div className={ className }>
            <img src={ captchaUrl } onClick={ updateImg } type={ type } alt="验证码"/>
        </div>
    );
}