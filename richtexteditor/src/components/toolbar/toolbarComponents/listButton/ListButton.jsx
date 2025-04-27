
import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { toggleBulletList } from '../../../editor/EditorUtil';
const ListButton = ({type, ref}) => {
    const onClick = () => toggleBulletList(ref, type);
    return (
        <ButtonWithIcon
            type={type+"List"}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default ListButton;