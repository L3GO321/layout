import React from 'react';
import styles from './styles.module.css';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

export const IconSwitch = ({icon, onSwitch}) => {
  return (
  <div className={styles.icon_block} onClick={onSwitch}>
    {icon === 'view_list' ?  <ViewListIcon /> : <ViewModuleIcon />}
  </div>
  )
}