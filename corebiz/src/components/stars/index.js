import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Stars(props) {
    let { stars } = props;
    return (
        <div className="row mhauto">
            <FontAwesomeIcon icon={faStar} className={`mr8 ${(stars < 1) ? 'tc-grey' : 'tc-red'} fs-smaller`} />
            <FontAwesomeIcon icon={faStar} className={`mr8 ${(stars < 2) ? 'tc-grey' : 'tc-red'} fs-smaller`} />
            <FontAwesomeIcon icon={faStar} className={`mr8 ${(stars < 3) ? 'tc-grey' : 'tc-red'} fs-smaller`} />
            <FontAwesomeIcon icon={faStar} className={`mr8 ${(stars < 4) ? 'tc-grey' : 'tc-red'} fs-smaller`} />
            <FontAwesomeIcon icon={faStar} className={`mr8 ${(stars < 5) ? 'tc-grey' : 'tc-red'} fs-smaller`} />
        </div>
    );
}

export default Stars;