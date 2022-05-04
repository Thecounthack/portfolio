import React from 'react';

import { Container } from '_components/Container';

import styles from './styles.module.scss';

interface IFooter {}

export const Footer: React.FC<IFooter> = () => {
    return (
        <Container>
            <div className={styles.footer}>Это футер</div>
        </Container>
    );
};
