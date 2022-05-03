import React from 'react';

import styles from './styles.module.scss';

interface IFooter {

}

export const Footer: React.FC<IFooter> = () => {
    return (
        <div className={styles.footer}>Это футер</div>
    );
};