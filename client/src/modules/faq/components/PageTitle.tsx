import { Link } from 'react-router-dom'
import { Text, Title, Tooltip } from '@mantine/core'

import '@mantine/core/styles/Title.layer.css'
import '@mantine/core/styles/Text.layer.css'
import classes from './Components.module.css'

export function PageTitle() {
  return (
    <header className={'mb-8'}>
      <Title order={2} className={classes.pageTitle}>
        {'FAQ: Najczęściej zadawane pytania'}
      </Title>
      <Text className={classes.pateTitleText}>
        {
          'W przypadku kwestii technicznych dotyczących konfiguracji aplikacji, należy przejrzeć '
        }
        <Tooltip
          label={'Przejdź do sekcji dokumentacja na stronie głównej'}
          color={'gray'}
          position={'bottom'}
        >
          <Link
            to={'/'}
            className={classes.pageTitleLink}
            title={'Przejdź do sekcji dokumentacja na stronie głównej'}
          >
            {'dokumentacje'}
          </Link>
        </Tooltip>
      </Text>
    </header>
  )
}
