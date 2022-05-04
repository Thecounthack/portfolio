import React from 'react';

import styles from './styles.module.scss';

interface IHeader {}

export const Header: React.FC<IHeader> = () => {
    return (
        <div className={styles.header}>
            {/* <div className={styles.logo}>Sheremetev dev</div> */}

            <ul className={styles.menu}>
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>About</span>
                </li>
                <li>
                    <span>Works</span>
                </li>
                <li>
                    <span>Contacts</span>
                </li>
            </ul>

            <div className={styles.control}>
                <button>
                    <span>Ru</span>
                </button>
                <button>
                    <span>Dark</span>
                </button>
            </div>
        </div>
    );
};
