import React from 'react';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface DarkButtonProps {
  icon: IconDefinition;
  title: string;
  active: boolean;
  onClick: () => void;
}

const DarkButton: React.FC<DarkButtonProps> = ({
  icon,
  title,
  active,
  onClick
}) => {
  return (
    <div className="one-button" onClick={onClick}>
      <div className={`container-dark-buttons ${active ? "active" : ""}`}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default DarkButton;

