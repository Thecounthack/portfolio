import React from 'react';
import styles from './styles.module.scss';

interface IContainer {
    children: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                {children}
            </div>
        </div>
    );
};