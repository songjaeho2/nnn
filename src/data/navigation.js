import {
  FiClock, FiFilm, FiFlag, FiHelpCircle, FiHome,
  FiMusic, FiSettings, FiUser,
} from 'react-icons/fi'

export const primaryNavigation = [
  { label: 'Home', icon: FiHome, active: true },
]

export const libraryNavigation = [
  { label: 'My channel', icon: FiUser },
  { label: 'History', icon: FiClock },
  { label: 'Playlist', icon: FiFilm },
]

export const exploreNavigation = [
  { label: 'Music', icon: FiMusic },
  { label: 'Videos', icon: FiMusic },
]

export const utilityNavigation = [
  { label: 'Settings', icon: FiSettings },
  { label: 'Report history', icon: FiFlag },
  { label: 'Help', icon: FiHelpCircle },
]
