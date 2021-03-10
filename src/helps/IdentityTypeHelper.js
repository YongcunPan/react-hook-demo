import * as R from 'ramda';

export class IdentityType {
    // 会员类别:1=供应商,2=采购方,3=两者都是,4=招标代理人,5=内部员工
    static types = [
        { code: '1', label: "供应商" },
        { code: '2', label: "采购方" },
        { code: '3', label: "两者都是" },
        { code: '4', label: "招标代理人" },
        { code: '5', label: "内部员工" }
    ]

    static getTypeByCode(code){
        return R.find(R.propEq('code', code))(this.types) || {};
    }
}