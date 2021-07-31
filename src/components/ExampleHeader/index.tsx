import * as React from 'react';
import styles from './index.module.css';

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => (
  <h1 className={styles.uglyHeader}>{text}</h1>
);

export default Header;
