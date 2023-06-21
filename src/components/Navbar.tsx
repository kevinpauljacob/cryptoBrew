import { FiCoffee } from 'react-icons/fi'
import { ConnectButton  } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10">
        <p className="flex font-bold text-3xl">
          CryptoBrew&nbsp;
          <FiCoffee />
        </p>
        <ConnectButton 
          accountStatus={"avatar"}
        />
    </nav>
  )
}

export default Navbar