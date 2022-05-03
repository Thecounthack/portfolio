import React from 'react';

import styles from './styles.module.scss';

interface IHeader {

}

export const Header: React.FC<IHeader> = () => {
    return (
        <div className={styles.header}>

            <div className={styles.logo}>Sheremetev dev</div>

            <ul className={styles.menu}>
                <li>Home</li>
                <li>About</li>
                <li>Works</li>
                <li>Contacts</li>
            </ul>

            <div className={styles.control}>
                <button>Ru</button>
                <button>Dark</button>
            </div>
        </div>
    );
};

