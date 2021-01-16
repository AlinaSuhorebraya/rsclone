import React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
  const links = [
    'https://github.com/AlinaSuhorebraya',
    'https://github.com/KLIM-nk01',
    'https://github.com/Senobiot',
    'https://github.com/cup0ra',
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.year}>© 2021 Clone-Wars</div>
      <a href='https://rs.school/js/' className={styles.logo}></a>
      <div className={styles.footerNames}>
        {links.map((link, index) => {
          return (
            <a href={link} key={index} >
              @{link.replace('https://github.com/', '')}
            </a>
          );
        })}
      </div>
    </footer>
  );
}