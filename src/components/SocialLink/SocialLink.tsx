import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  link: string
  icon: any
}

const SocialLink = ({ link, icon }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="underline flex justify-center items-center">
      <FontAwesomeIcon
        icon={icon}
        className="mx-2 h-10 hover:opacity-50 transition-all"
      />
    </a>
  )
};

export default SocialLink;
