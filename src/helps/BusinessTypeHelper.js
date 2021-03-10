import * as R from 'ramda';

export class BusinessType {
    // 工程 贸易 服务 林业 其它
    static types = [
        { code: '工程', label: "工程" },
        { code: '贸易', label: "贸易" },
        { code: '服务', label: "服务" },
        { code: '林业', label: "林业" },
        { code: '其它', label: "其它" }
    ]

    static getTypeByCode(code){
        return R.find(R.propEq('code', code))(this.types) || {};
    }
}