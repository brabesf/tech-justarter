import { Button } from '@radix-ui/themes';
import Image from 'next/image'
import { useRouter } from 'next/router';

import image from '@/resources/pix.jpg'

export default function OfferPage(){
    const router = useRouter();

    const handleBack = () => {
        router.push(`/`);
      };

    return <>
            <Image src={image} alt='passa pix'/>
            <Button onClick={handleBack}>Procurar outros processos</Button>
        </>

}