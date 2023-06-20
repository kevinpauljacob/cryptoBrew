// import Image from "next/image"
// import logo from '/public/assets/logo.png'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10">
        <p className="font-bold text-3xl">
          CryptoBrew
        </p>
        <ConnectButton />
    </nav>
  )
}

export default Navbar