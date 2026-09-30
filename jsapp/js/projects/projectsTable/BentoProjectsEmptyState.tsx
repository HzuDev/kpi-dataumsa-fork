import React from 'react'
import { IconFolderPlus, IconExternalLink, IconSparkles } from '@tabler/icons-react'
import pageState from '#/pageState.store'
import { MODAL_TYPES } from '#/constants'
import styles from './BentoProjectsEmptyState.module.scss'

interface BentoProjectsEmptyStateProps {
  emptyMessage?: React.ReactNode
}

export default function BentoProjectsEmptyState({ emptyMessage }: BentoProjectsEmptyStateProps) {
  if (emptyMessage) {
    return <div className={styles.filterMessagePlate}>{emptyMessage}</div>
  }

  const handleOpenNewProject = (e: React.MouseEvent) => {
    e.preventDefault()
    pageState.showModal({
      type: MODAL_TYPES.NEW_FORM,
    })
  }

  return (
    <div className={styles.emptyStateWrapper}>
      <div className={styles.plate}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          <span>ESPACIO DE INVESTIGACIÓN DATAUMSA</span>
        </div>

        <div className={styles.iconCircle}>
          <IconFolderPlus size={32} stroke={2.2} />
        </div>

        <h3 className={styles.title}>Comienza tu primer proyecto</h3>

        <p className={styles.description}>
          Aún no tienes proyectos o formularios creados en tu cuenta. Diseña tu
          primer formulario estructurado, utiliza una plantilla institucional o
          importa un archivo XLSForm para iniciar la recolección de datos.
        </p>

        <div className={styles.actionsGroup}>
          <button
            type='button'
            className={styles.primaryBtn}
            onClick={handleOpenNewProject}
          >
            <IconSparkles size={18} stroke={2.2} />
            <span>Crear nuevo proyecto</span>
          </button>

          <a
            href='https://data.umsa.bo/docs'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.secondaryBtn}
          >
            <span>Ver Documentación</span>
            <IconExternalLink size={16} stroke={2.5} />
          </a>
        </div>
      </div>
    </div>
  )
}
