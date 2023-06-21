import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import ContractABI from '../../contracts/CryptoBrew.json'

type FormValues = {
  name: string;
  message: string;
  amount: string;
}

const BrewCoffee = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    message: '',
    amount: '0',
  });

  const {name, message, amount} = formValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    console.log(formValues);
  }, [formValues])


  // const { config } = usePrepareContractWrite({
  //   address: "0x855ab7C0bCe75BB9C2A69511Adab4Ef07790E13f",
  //   abi: ContractABI.abi,
  //   functionName: "brewCoffee",
  //   args: [name, message, parseInt(amount === "" ? "0.001" : amount.toString())],    
  //   value: ethers.parseEther(amount === "" ? "0.001" : amount.toString()),
  //   onError(error) {
  //     console.log("Error", error);
  //   },
  // })

  const { config } = usePrepareContractWrite({
    address: "0x930743c473C4AB8FfB83dF63e012e1b03b74AdD5",
    abi: ContractABI.abi,
    functionName: "brewCoffee",
    args: [name, message, amount],    
    value: ethers.parseEther(amount),
    onError(error) {
      console.log("Error", error);
    },
  })

  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  const brewCoffee = () => {
    write?.();
    console.log("Button was clicked!")
  }

  return (
    <form className="bg-accent-1 text-black flex flex-col justify-between rounded-lg lg:w-[30%] md:w-[39%] sm:w-[49%] min-h-[400px] p-10">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold pb-5">
          Brew me a Coffee
        </h2>
        <label className="text-lg font-semibold" htmlFor="name">What is your Name?</label>
        <input className="bg-accent-1 text-black font-md font-semibold focus:outline-none focus:bg-black/10 border border-black placeholder-black/60 rounded-lg p-2" id="name" type="text" name="name" placeholder="Enter your Name" value={name} onChange={handleChange}/>
        <label className="text-lg font-semibold mt-2" htmlFor="message">Any message ?</label>
        <input className="bg-accent-1 text-black font-md font-semibold focus:outline-none focus:bg-black/10 border border-black placeholder-black/60 rounded-lg p-2 mb-2" id="message" type="text" name="message" placeholder='Enter your Message' value={message} onChange={handleChange}/>
        <label className="text-lg font-semibold" htmlFor="amount">Ethers</label>
        <input className="bg-accent-1 text-black font-md font-semibold focus:outline-none focus:bg-black/10 border border-black placeholder-black/60 rounded-lg p-2" id="amount" type="text" name="amount" placeholder='Enter your Amount' value={amount} onChange={handleChange}/>
      </div>
      <button type="button" onClick={brewCoffee} className='bg-black text-white rounded-lg p-2.5 mt-5 sm:mt-0'>Brew Coffee</button>
    </form>
  )
}

export default BrewCoffee;


  // const brewCoffee = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!contract) return;
  //   try {
  //     const value = { value: ethers.parseEther(amount.toString())}
  //     const tx = await contract.brewCoffee(name, message, value);
  //     await tx.wait();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }