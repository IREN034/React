/* eslint-disable compat/compat */
import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import Icon from '../../IconsBackstage/Icon';
// import styles from './index.less';

export const buttonSizeEnum = {
    /** 小 */
    SMALL: 'small',
    /** 預設(中) */
    DEFAULT: 'default',
    /** 大 */
    LARGE: 'large',
};

export const buttonTypeEnum = {
    /** 主題色 */
    PRIMARY: 'primary',
    /** 無框透明底 */
    LINK: 'link',
    /** 白底灰框 */
    DEFAULT: 'default',
};

const classNameMap = {
    // type: {
    //     [buttonTypeEnum.PRIMARY]: `ant-btn`,
    //     [buttonTypeEnum.DEFAULT]: `ant-btn ${styles.default}`,
    //     [buttonTypeEnum.LINK]: `ant-btn ${styles.link}`,
    // },
    // size: {
    //     [buttonSizeEnum.DEFAULT]: '', // NOTE: 有預設寬高，不用給 className
    //     [buttonSizeEnum.SMALL]: `ant-btn-sm ${styles.small}`,
    //     [buttonSizeEnum.LARGE]: `ant-btn-lg ${styles.large}`,
    // },
};

function Button(props) {
    const { type, size, className, disabled, loading, children, icon, iconColor, iconClassName, href, target, onClick, ...restProps } = props;
    
    return (
      <button 
        {...restProps}
        type="button" 
       >{children}
      </button>
    );
}

export default Button;