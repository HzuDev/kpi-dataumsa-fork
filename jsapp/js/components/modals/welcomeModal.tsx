import React, { useState, useEffect } from 'react'
import { Modal, Checkbox, Stack } from '@mantine/core'
import { observer } from 'mobx-react'
import { IconBook, IconExternalLink, IconCloudOff, IconShieldCheck, IconChartBar } from '@tabler/icons-react'
import sessionStore from '#/stores/session'
import { currentLang } from '#/utils'
import { DOCS_PATHS, getDocUrl } from '#/docsUrls'
import styles from './welcomeModal.module.scss'

const WelcomeModal = observer(() => {
  const [opened, setOpened] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  const isEs = currentLang() === 'es'
  const tr = (translated: string, esFallback: string) => {
    return isEs ? esFallback : translated
  }

  useEffect(() => {
    const dismissed = localStorage.getItem('dataumsa_welcome_dismissed')
    if (sessionStore.isAuthStateKnown && sessionStore.isLoggedIn && !dismissed) {
      setOpened(true)
    }
  }, [sessionStore.isAuthStateKnown, sessionStore.isLoggedIn])

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('dataumsa_welcome_dismissed', 'true')
    }
    setOpened(false)
  }

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      centered
      size='lg'
      className={styles.modalRoot}
      overlayProps={{ backgroundOpacity: 0.65, color: '#090f1e', blur: 4 }}
      withCloseButton={true}
      title={
        <div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>{tr(t('DATAUMSA INSTITUTIONAL PLATFORM'), 'PLATAFORMA INSTITUCIONAL DATAUMSA')}</span>
          </div>
          <h2 className={styles.title}>{tr(t('Welcome to DATAUMSA!'), '¡Te damos la bienvenida a DATAUMSA!')}</h2>
        </div>
      }
    >
      <Stack gap='md'>
        <p className={styles.leadText}>
          {tr(
            t(
              'Discover all the tools and features we have prepared to help you manage your forms and collect data efficiently.'
            ),
            'Descubre todas las herramientas y características que tenemos preparadas para ayudarte a gestionar tus formularios y recopilación de datos de manera eficiente.'
          )}
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.featurePill}>
            <IconCloudOff size={15} stroke={2.2} />
            <span>{tr(t('100% Offline'), '100% Sin conexión')}</span>
          </div>
          <div className={styles.featurePill}>
            <IconShieldCheck size={15} stroke={2.2} />
            <span>{tr(t('Rigor & Sovereignty'), 'Rigor y Soberanía')}</span>
          </div>
          <div className={styles.featurePill}>
            <IconChartBar size={15} stroke={2.2} />
            <span>{tr(t('Live Monitoring'), 'Monitoreo en vivo')}</span>
          </div>
        </div>

        <div className={styles.docsCard}>
          <div className={styles.docsCardHeader}>
            <div className={styles.docsIconCircle}>
              <IconBook size={20} stroke={2.2} />
            </div>
            <div className={styles.docsCardContent}>
              <div className={styles.docsCardTitle}>
                {tr(
                  t('Getting Started Guides & Official Documentation'),
                  'Guías de Inicio y Documentación Oficial'
                )}
              </div>
              <p className={styles.docsCardDesc}>
                {tr(
                  t(
                    'To learn more about how the platform works and see step-by-step user guides, we recommend checking our official documentation:'
                  ),
                  'Para aprender más sobre el funcionamiento de la plataforma y ver guías de uso paso a paso, te recomendamos revisar nuestra documentación oficial:'
                )}
              </p>
            </div>
          </div>

          <a
            href={getDocUrl(DOCS_PATHS.HOME)}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.docsBtn}
          >
            <span>{tr(t('View Official Documentation'), 'Ver Documentación Oficial')}</span>
            <IconExternalLink size={16} stroke={2.5} />
          </a>
        </div>

        <div className={styles.footerGroup}>
          <Checkbox
            className={styles.bentoCheckbox}
            label={tr(t("Don't show this message again"), 'No volver a mostrar este mensaje')}
            checked={dontShowAgain}
            onChange={(event) => setDontShowAgain(event.currentTarget.checked)}
          />
          <button
            type='button'
            className={styles.primaryCta}
            onClick={handleClose}
          >
            {tr(t('Start'), 'Empezar')}
          </button>
        </div>
      </Stack>
    </Modal>
  )
})

export default WelcomeModal
