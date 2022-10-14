import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

interface PageHeaderProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className='page-header'>
      <div className="top-bar-container">
        <Link to="/">
          <ArrowLeft style={{ fontSize: '50px', color: 'rgb(209, 216, 223)' }} />
        </Link>
        <p className='header-name'>Luiza Monção</p>
      </div>

      <div className="top-bar-content">
        <strong>{props.title}</strong>
      </div>

      {props.children}
    </header>
  );
}

export default PageHeader;