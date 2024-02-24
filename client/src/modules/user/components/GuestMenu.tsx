import { Link } from 'react-router-dom'
import { Badge, Menu, rem } from '@mantine/core'
import { IconUser, IconUsersPlus } from '@tabler/icons-react'

export function GuestMenu() {
  return (
    <>
      <Menu.Item
        component={Link}
        to={'/'}
        leftSection={<IconUsersPlus style={{ width: rem(14), height: rem(14) }} />}
        disabled
      >
        {'Utwórz konto'}
        <Badge color={'blue'} size={'xs'} radius={'sm'} className={'ml-2'}>
          {'Wersja Cloud'}
        </Badge>
      </Menu.Item>
      <Menu.Item
        component={Link}
        to={'/'}
        leftSection={<IconUser style={{ width: rem(14), height: rem(14) }} />}
        disabled
      >
        {'Zaloguj się'}
      </Menu.Item>
    </>
  )
}
