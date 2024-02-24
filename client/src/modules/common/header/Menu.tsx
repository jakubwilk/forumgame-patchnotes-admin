import { Link } from 'react-router-dom'
import { ActionIcon, Menu as MantineMenu, rem, Tooltip } from '@mantine/core'
import {
  IconDownload,
  IconMenu2,
  IconQuestionMark,
  IconSettings,
} from '@tabler/icons-react'

import { GuestMenu } from '../../user/components'

import '@mantine/core/styles/Button.css'
import '@mantine/core/styles/Menu.css'
import '@mantine/core/styles/ActionIcon.css'

export function Menu() {
  return (
    <nav className={'flex items-center gap-6'}>
      <Link to={'/'} title={'Zerknij na wersję demo projektu'}>
        {'🔥 Demo'}
      </Link>
      <MantineMenu>
        <MantineMenu.Target>
          <Tooltip label={'Otwórz nawigacje'} position={'left'} color={'gray'}>
            <ActionIcon
              variant={'subtle'}
              size={'lg'}
              aria-label={'Nawigacja'}
              title={'Otwórz nawigacje'}
            >
              <IconMenu2 style={{ width: '75%', height: '75%' }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </MantineMenu.Target>
        <MantineMenu.Dropdown>
          <MantineMenu.Item
            component={Link}
            to={'/'}
            leftSection={<IconDownload style={{ width: rem(14), height: rem(14) }} />}
          >
            {'Pobierz'}
          </MantineMenu.Item>
          <MantineMenu.Item
            component={Link}
            to={'/'}
            leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}
          >
            {'Konfigurator'}
          </MantineMenu.Item>
          <MantineMenu.Item
            component={Link}
            to={'/'}
            leftSection={<IconQuestionMark style={{ width: rem(14), height: rem(14) }} />}
          >
            {'FAQ'}
          </MantineMenu.Item>
          <MantineMenu.Divider />
          <GuestMenu />
        </MantineMenu.Dropdown>
      </MantineMenu>
    </nav>
  )
}
