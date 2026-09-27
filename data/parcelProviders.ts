import type { ParcelProvider } from '~/types'

export const parcelProviders: ParcelProvider[] = [
  { id: 'dpd', name: 'DPD', color: '#dc0032', logoIcon: 'i-simple-icons-dpd', servicesKeys: ['paketshop.services.dropOff', 'paketshop.services.returns', 'paketshop.services.pickup'] },
  { id: 'hermes', name: 'Hermes', color: '#0d2340', logoIcon: 'i-heroicons-truck', servicesKeys: ['paketshop.services.dropOff', 'paketshop.services.returns', 'paketshop.services.pickup'] },
  { id: 'gls', name: 'GLS', color: '#003057', logoIcon: 'i-heroicons-truck', servicesKeys: ['paketshop.services.dropOff', 'paketshop.services.pickup'] },
  { id: 'ups', name: 'UPS', color: '#3b1f0f', logoIcon: 'i-simple-icons-ups', servicesKeys: ['paketshop.services.dropOff', 'paketshop.services.returns', 'paketshop.services.pickup'] }
]
