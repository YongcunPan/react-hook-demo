import { useState, useEffect } from 'react';
import { notification } from 'antd';
import { stringify } from "qs";
import axios from 'axios';
import {store} from '../helps';
// export const CancelToken = axios.CancelToken;


const openNotificationWithIcon = (type, title, message ) => {
    notification[type]({
        message: title,
        description: message,
    });
};


export const useDataApi = (initialArgs = {}) => {
    const [data, setData] = useState(initialArgs.initialData || {});
    const [args, updateParams] = useState(initialArgs || {});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        let { baseURL, url, method, data, params, /* cancelToken,*/ headers, } = args;

        baseURL = baseURL || '';
        method = method || 'get';
        data = stringify(data || {});
        params = params || {};
        // cancelToken = cancelToken || CancelToken;
        headers = headers || {
            'Content-Type': 'application/x-www-form-urlencoded',
            'token': store.get('token') || '',
            'apptype':'pc',
        };


        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            setData(args.initialData || {});
            try {
                const result = await axios({ baseURL, url, method, data, params, /*cancelToken,*/ headers });
                setData(result.data.data);
            } catch (error) {
                openNotificationWithIcon('error','错误信息',error.toString());
                setIsError(true);
            }
            setIsLoading(false);
        };
        if (url) {
            fetchData();
        };
    }, [args]);
    return [{ data, isLoading, isError }, updateParams];
};
