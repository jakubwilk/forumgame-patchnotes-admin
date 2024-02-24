import { Link } from 'react-router-dom'
import { Menu, rem } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'

export function GuestMenu() {
  return (
    <Menu.Item
      component={Link}
      to={'/'}
      leftSection={<IconUser style={{ width: rem(14), height: rem(14) }} />}
    >
      {'Zaloguj się'}
    </Menu.Item>
  )
}
