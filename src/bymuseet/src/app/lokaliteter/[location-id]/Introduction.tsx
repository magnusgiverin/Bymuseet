import Button from '@/app/Components/Button';
import { Title } from '@/app/Components/Title';
import Image from 'next/image';
import { Location } from '@/app/Utils/data/locations';

interface IntroductionProps {
    location: Location;
}

const Introduction: React.FC<IntroductionProps> = ({ location }) => {
    return (
        <div className="flex flex-col md:flex-row mb-10">
            <div className="bg-white py-8 px-4 md:p-8 shadow-md lg:w-2/3 w-full md:rounded-s-md">
                <Title text={location.name} />
                <p className="whitespace-pre-wrap">{location.description}</p>
                <Button icon={'ArrowLeft_sm'} text={'tilbake'} iconPosition='left' />
            </div>
            <div className="md:h-auto h-60 lg:w-1/3 w-full relative shadow-md">
                <Image
                    src={location.image}
                    alt="Fasade Levanger"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-e-md"
                />
            </div>
        </div>
    )
};

export default Introduction;