import React from 'react';
import Logo from '@/src/components/Logo';
import logoFooter from '@/public/images/logo-footer.png';
import styles from './styles.module.scss';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import vk from '@/public/images/vk.png';
import youtube from '@/public/images/youtube.png';
import telegram from '@/public/images/telegram.png';
import MenuFooter from '@/src/features/menu/MenuFooter/components/MenuFooter';

const Footer = () => {
    const { t } = useTranslation('footer');

    return (
        <footer className={styles.footer}>
            <div className={styles.containerFooter}>
                <div className={styles.wrapFooterTop}>
                    <Logo style={styles.logo} imageUrl={logoFooter} />

                    <div className={styles.wrapperContacts}>
                        <div>
                            <h3 className={styles.header}>{t('consultation')}:</h3>

                            <Link className={styles.linkPhone} href={'tel:+7 (499) 116-69-63'}>
                                +7 (499) 116-69-63
                            </Link>
                        </div>

                        <div className={styles.wrapperSocialNetwork}>
                            <h3 className={styles.header}>{t('socialNetwork')}:</h3>
                            <div className={styles.wrapperImageGroup}>
                                <Link href={''} className={styles.wrapperImage}>
                                    <Image
                                        src={youtube}
                                        alt={'youtube'}
                                        quality={100}
                                        fill
                                        sizes='(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw'
                                    />
                                </Link>

                                <Link href={''} className={styles.wrapperImage}>
                                    <Image
                                        src={vk}
                                        alt={'vk'}
                                        quality={100}
                                        fill
                                        sizes='(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw'
                                    />
                                </Link>

                                <Link href={''} className={styles.wrapperImage}>
                                    <Image
                                        src={telegram}
                                        alt={'telegram'}
                                        quality={100}
                                        fill
                                        sizes='(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.wrapperInfoContent}>
                        <p className={styles.text}>&copy; &nbsp;{t('rights')}</p>
                        <hr />
                        <p className={styles.text}>{t('license')}</p>
                    </div>

                    <div>
                        <MenuFooter />
                    </div>
                </div>

                <div className={styles.wrapperPolitics}>
                    <p>{t('politics')}</p>
                    <p>{t('technicalPage')}</p>
                    <p>{t('subTechnicalPage')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
