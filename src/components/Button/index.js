import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button(
    {
        to,
        href,
        children,
        onClick,
        primary = false,
        outline = false,
        outlinePrimary = false,
        rounded = false,
        text = false,
        small = false,
        large = false,
        disabled = false,
        className,
        leftIcon,
        leftIconDefault,
        rightIcon,
        rightIconDefault,
        ...passProps
    },
    ref,
) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        outlinePrimary,
        rounded,
        text,
        small,
        large,
        disabled,
        [className]: className,
    });
    const props = { onClick, ...passProps };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp {...props} className={classes} ref={ref}>
            {leftIconDefault && <span className={cx('icon-default')}>{leftIconDefault}</span>}
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            {rightIconDefault && <span className={cx('icon-default')}>{rightIconDefault}</span>}
        </Comp>
    );
}
export default forwardRef(Button);
