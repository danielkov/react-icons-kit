import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from './SvgIcon';

export const Icon = React.forwardRef(({ style, className, icon, size, ...others }, ref) => {

    return (
        <div {...others}
             style={{display: 'inline-block',...style}}
             className={className}
             ref={ref}>
            <SvgIcon size={props.size} icon={props.icon} title={props.title} />
        </div>
    );
});

export const withBaseIcon = (defaultProps) => props => {
    const propsToUse = {...defaultProps};

    return <Icon {...propsToUse} {...props}/>;
};


Icon.defaultProps = {
    size: 16,
    fill: 'currentColor'
};

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    className: PropTypes.string
};

export default Icon;
