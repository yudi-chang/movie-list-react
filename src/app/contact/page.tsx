import React from 'react';
import styles from './page.module.scss';

const ContactPage: React.FC = () => {
  return (
    <div className={styles['contact-page']}>
      <div className={`${styles['contact-container']} animate enter`}>
        <div className={styles['image-wrapper']}>
          <img src="/images/profile-picture.png" alt="Cart" />
        </div>
        <div className={styles['contact-info']}>
          <h1 className="text-3xl fw-bold">M. Yudi Chang</h1>
          <h3 className="text-xl fw-bold">Frontend Developer</h3>
          <p className="text-sm">
            <a href="mailto:m.yudi.chang@gmail.com">m.yudi.chang@gmail.com</a>
          </p>
          <p className="text-sm">
            <a href="https://www.linkedin.com/in/yudi-chang/" target="_blank" rel="noopener noreferrer">
              https://www.linkedin.com/in/yudi-chang/
            </a>
          </p>
          <p className="text-sm">
            <a href="tel:+6289686211228">+6289686211228</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
