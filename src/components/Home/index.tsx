import React from 'react';

import styles from './styles.module.scss';

interface IHome {

}

export const Home: React.FC<IHome> = () => {
    return (
        <div className={styles.home}>Это ХОМЭ</div>
    );
};