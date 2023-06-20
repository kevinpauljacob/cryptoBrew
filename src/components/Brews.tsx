import { useState, useEffect } from 'react'
import { useContractRead } from 'wagmi'
import ContractABI from '../../contracts/CryptoBrew.json'
import Image from 'next/image'
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import { uuid } from 'uuidv4';

interface Brew {
  name: string;
  message: string;
  amount: string;
  from: string;
  timestamp: number;
}

const Brews = () => {
  
  const [brews, setBrews] = useState<Brew[]>();

  const { data, isError, isLoading } = useContractRead({
    address: '0x930743c473C4AB8FfB83dF63e012e1b03b74AdD5',
    abi: ContractABI.abi,
    functionName: 'getBrews',
  })
  console.log(data);

  useEffect(() => {
    if (data) {
      setBrews(data as Brew[]);
    }
  }, [data])

  return (
    <div className="flex flex-wrap justify-between mt-4">
      {
        brews?.map((brew: Brew, index:number) => {
          const seed = brew.from + brew.timestamp;
          const avatar = `https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}`;
          return (
          <div key={index} className='bg-secondary text-black font-semibold rounded-lg max-w-[32%] p-4 mt-2 '>
            <div className='flex items-center justify-between'>
              <div className='bg-accent-2 rounded-full p-1'>
                <img className="w-16 h-16" src={avatar} alt="User Profile Pic"/>
              </div>
              <p className='text-xl font-bold'>{brew.amount} ethers</p>
            </div>
            <h3 className='text-xl'>
              <span className='font-bold'>User: </span> 
              {brew.name}
            </h3>
            <p className='text-xl'>
              <span className='font-bold truncate'>Address: </span> 
              {brew.from}
            </p>
            <h1 className='text-xl'>
              <span className='font-bold'>Message: </span> 
              {brew.message}
            </h1>
          </div>
        )})
      }
    </div>
  )
}

export default Brews