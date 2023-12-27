import { Level } from "@/app/helpers/imc";
import upImage from '@/app/assets/up.png';
import downImage from '@/app/assets/down.png';

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={
                'flex-1 text-white rounded-lg flex justify-center items-center flex-col p-5'} 
                style={{backgroundColor: item.color}}
        >
            <div className="w-16 h-16 border rounded-[50%] flex justify-center items-center">
                {item.icon === 'up' && <img src={upImage.src} width={30}/>}
                {item.icon === 'down' && <img src={downImage.src} width={30}/>}
            </div>
            <div className="text-lg sm:text-2xl font-bold mt-1">{item.title}</div>

            {item.yourImc &&
                <div className="text-base mt-2 mb-2 mx-3">Seu IMC é de {item.yourImc} Kg/m2</div>
            }

            <div className="text-xs mt-3">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}