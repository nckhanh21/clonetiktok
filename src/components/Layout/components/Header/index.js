import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const Header = () => {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="tiktok" />
            </div>
            <div className={cx('search')}>
                <input spellCheck={false} type="text" className={cx('search-input')} placeholder="Search accounts and videos" />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                <button className={cx('search-btn')} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />

                </button>
            </div>
            <div className={cx('action')}></div>
        </div>
    </header >
};

export default Header;
