import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import {
    CoinIcon,
    EllipsisIcon,
    FeedbackIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    NotificationIcon,
    SettingIcon,
    ShortcutIcon,
    UploadIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const handleMenuChange = (menuItem) => {
    console.log(menuItem);
};
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <ShortcutIcon />,
        title: 'Phím tắt trên bàn phím',
    },
];

const userMenu = [
    {
        icon: <UserIcon />,
        title: 'Xem hồ sơ',
        to: '@giangle',
    },
    {
        icon: <CoinIcon />,
        title: 'Nhận Xu',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Cài đặt',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 0]} content="Tải lên Video của bạn" placement="bottom">
                                <Button outline leftIconDefault={<UploadIcon />}>
                                    Tải lên
                                </Button>
                            </Tippy>
                            <Tippy delay={[0, 0]} content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn', 'margin-left')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 0]} content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <NotificationIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline leftIconDefault={<UploadIcon />}>
                                Tải lên
                            </Button>
                            <Button primary className={cx('test')}>
                                Đăng nhập
                            </Button>
                        </>
                    )}
                    <Menu onChange={handleMenuChange} items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                src="https://avatars.githubusercontent.com/u/100833182?v=4"
                                alt=""
                                className={cx('user-avatar')}
                                fallback={images.noImageLogo}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <EllipsisIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
