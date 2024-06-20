import coreMuscles from '~/datas/muscles/coreMuscles'

export function useMuscles() {
  const { t } = useI18n()

  const muscleListSorts = coreMuscles
    .map(muscle => ({ id: muscle, libelle: t(`muscles.${muscle}`) }))
    .sort((a, b) => a.libelle.localeCompare(b.libelle))

  return {
    muscleListSorts
  }
}