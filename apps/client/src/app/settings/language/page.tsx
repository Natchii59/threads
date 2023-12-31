import { Separator } from 'ui'

import { LanguageForm } from './language-form'

export default function LanguageSettingsPage() {
  return (
    <div className='space-y-4'>
      <p className='text-center text-sm text-muted-foreground'>
        Change the language of the app.
      </p>

      <Separator />
      <LanguageForm />
    </div>
  )
}
