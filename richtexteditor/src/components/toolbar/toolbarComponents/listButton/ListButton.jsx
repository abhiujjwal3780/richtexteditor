
import React from 'react';
import ButtonWithIcon from '../../../commonComponents/buttonWithIcon/ButtonWithIcon';
import { toggleBulletList } from '../../../editor/EditorUtil';
import { LIST } from '../../../../constants/constants';
const ListButton = ({type, ref}) => {
    const onClick = () => toggleBulletList(ref, type);
    return (
        <ButtonWithIcon
            type={type+LIST}
            onClick={onClick}
            isActive={false}
        />
    );
};

export default ListButton;