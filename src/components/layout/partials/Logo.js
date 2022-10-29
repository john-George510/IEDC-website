import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import "./Logo.css";

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./iedc (1).png')}
            alt="Open"
            width={70}
            height={70} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;