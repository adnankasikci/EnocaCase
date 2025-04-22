
import { ReactSVG } from 'react-svg';

interface ChangeSVGProps {
    name: string;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const ChangeSVG: React.FC<ChangeSVGProps> = ({ name, width, height, color }) => {

    const pathSVG = `/svg/${name}.svg`;

    if (!pathSVG) {
        return <div>Hata!</div>;
    }

    return (
        <ReactSVG src={pathSVG} style={{ fill: color, width: width, height: height }} />
    );

}

export default ChangeSVG;




