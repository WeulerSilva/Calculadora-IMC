"use client"

import { useState } from 'react';
import powerdImage from './assets/powered.png';
import { levels, calculateImc, Level } from './helpers/imc';
import leftArrowImage from '@/app/assets/leftarrow.png';
import { GridItem } from '@/components/GridItem';


const Page = () => {
  const [heightFied, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if(heightFied && weightField) {
      setToShow(calculateImc(heightFied, weightField))
    }else {
      alert('Digite todos os campos');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div>
      <header>
        <div className='max-w-4xl my-10 mx-auto pl-6 sm:pl-0 md:pl-6 lg:pl-0 '>
          <img src={powerdImage.src} width={150}/>
        </div>
      </header>
      <div className='container flex flex-col pl-6 sm:flex-row sm:pl-0 md:pl-6 lg:pl-0 max-w-4xl m-auto'>
        <div className='flex-1 mr-4'>
          <h1 className='text-4xl text-gray-800 mb-6 font-bold'>Calcule seu IMC.</h1>
          <p className='text-base mb-10 text-gray-600'>IMC é a sigle para índice de Massa Corpórea, parámetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
        
          <input 
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em métros)'
            className='w-full border-0 border-b-2 border-gray-600 py-3 px-1 mb-5 text-base outline-0'
            value={heightFied > 0 ? heightFied : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input 
            type="number"
            placeholder='Digite 0 seu peso. Ex: 60 (em Kg)'
            className='w-full border-0 border-b-2 border-gray-600 py-3 px-1 mb-5 text-base outline-0'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button 
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
            className='
            bg-blue-500 text-white text-[15px] border-0 
              rounded-xl py-3 px-0 w-full cursor-pointer my-10 
              hover:opacity-80 transition-all duration-3000 ease-in-out
              disabled:opacity-50'  
          >
            Calcular
          </button>
        </div>
        <div className='flex-1 sm:m-0 flex mb-10'>
          {!toShow &&
            <div className='flex-1 grid grid-cols-2 gap-5 mr-6'>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShow && 
            <div className='flex-1 flex mr-4 md:mr-4 md:ml-8'>
              <div 
                className='absolute bg-[#227C9D] w-16 h-16 rounded-[50%] flex justify-center 
                           items-center cursor-pointer ml-[-10px] mt-[-10px] md:ml-[-35px] md:mt-[165px]
                           hover:opacity-80 transition-all duration-3000 ease-in-out'
               onClick={handleBackButton}
              >
                <img src={leftArrowImage.src} width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }       
        </div>
      </div>
    </div>
  )
}

export default Page;