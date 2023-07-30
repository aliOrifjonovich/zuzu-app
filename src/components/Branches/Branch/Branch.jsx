import React from 'react';
import cls from "./branch.module.scss"
import { BranchIcon } from '../../icons';

const Branch = ({item}) => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.branch_name}>
                <div className={cls.name}>
                    <div className={cls.n}>
                        {item.name}
                    </div>
                    <BranchIcon/>
                </div>
                <p className={cls.location}>{item.address}</p>
            </div>
            <div className={cls.times}>
                <p className={cls.time_text}>Часы работы</p>
                <h1 className={cls.time}>Ежедневно: {item.from} - {item.to}</h1>
            </div>
        </div>
    );
}

export default Branch;
