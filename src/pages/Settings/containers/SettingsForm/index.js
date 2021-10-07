import { useForm, FormProvider } from 'react-hook-form'

import SettingsFormUi from './SettingsFormUi'

export default function SettingsForm() {
  const methods = useForm()
  const { register, handleSubmit } = methods

  const handleSumbition = (submttedData) => {
    console.log({ submttedData })
  }

  return (
    <FormProvider {...methods}>
      <SettingsFormUi
        onSubmit={handleSumbition}
        handleSubmit={handleSubmit}
        register={register}
      />
    </FormProvider>
  )
}
