import React from 'react';
import { arrayRouterLinks } from '@/src/features/menu/MenuHeader/utils/arrayRouterLinks';
import Link from 'next/link';
import Button from '@/src/components/Button';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

const MenuHeader = (): JSX.Element => {
    const { t } = useTranslation();
    const { route } = useRouter();

    return (
        <nav className={styles.nav}>
            {arrayRouterLinks.map(linkData => (
                <Link
                    className={classNames([styles.link, route === linkData.link && styles.linkActive])}
                    key={linkData.link}
                    href={linkData.link}
                >
                    {t(`navLinksHeader:${linkData.text}`)}
                </Link>
            ))}
            <Button text={t('header:buttonEnter')} />
        </nav>
    );
};

export default MenuHeader;
