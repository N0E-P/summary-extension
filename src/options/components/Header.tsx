import logo from '@/assets/img/logo.png'
import { AppName, getExtensionVersion } from '@/utils/utils'

function Header() {
  return (
    <>
      <nav className="glarity--flex glarity--flex-row glarity--justify-between glarity--items-center glarity--mt-5 glarity--px-2">
        <div className="glarity--flex glarity--flex-row glarity--items-center glarity--gap-2">
          <a href="https://glarity.app/" target="_blank" rel="noreferrer">
            <img
              src={logo}
              className="glarity--w-10 glarity--h-10 glarity--rounded-lg"
              style={{ 'vertical-align': 'middle' }}
            />
            <span className="font-semibold">
              {AppName} (v
              {getExtensionVersion()})
            </span>{' '}
          </a>
        </div>
        <div className="glarity--flex glarity--flex-row glarity--gap-3">
          <a href="https://noe-pecci.com/" target="_blank" rel="noreferrer">
            {'Made by Noé <3'}
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
