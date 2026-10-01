// eslint-disable-next-line no-restricted-imports -- Theme extensions must import Mantine components directly.
import { Modal } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import KoboIcon from '#/components/common/KoboIcon'
import classes from './Modal.module.css'
import { KOBO_Z_INDEX } from './zIndex'

export const KOBO_MODAL_OVERLAY_PROPS = {
  backgroundOpacity: 0.65,
  color: '#090f1e',
  zIndex: KOBO_Z_INDEX.modalOverlay,
  blur: 4,
} as const

export const KOBO_MODAL_SHARED_PROPS = {
  zIndex: KOBO_Z_INDEX.modal,
  overlayProps: KOBO_MODAL_OVERLAY_PROPS,
  closeButtonProps: {
    icon: <KoboIcon icon={IconX} size={16} stroke={2.5} />,
  },
  padding: 'lg',
  centered: true,
  radius: 28,
} as const

export const ModalThemeKobo = Modal.extend({
  defaultProps: KOBO_MODAL_SHARED_PROPS,
  classNames: classes,
})
