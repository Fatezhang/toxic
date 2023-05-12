import { extractColorsFromSrc } from 'extract-colors';
import { FinalColor } from 'extract-colors/lib/extract-colors.node.es';
import { useEffect, useState } from 'react';

const ImageColour = () => {
  const [ imageSrc, setImageSrc ] = useState('');
  const [ extractedColors, setExtractedColors ] = useState<FinalColor[]>([]);
  useEffect(() => {
    const options = {
      pixels: 64000,
      distance: 0.2,
      saturationDistance: 0.2,
      lightnessDistance: 0.2,
      hueDistance: 0.083333333,
      crossOrigin: 'anonymous'
    };
    imageSrc && extractColorsFromSrc(imageSrc, options)
      .then((finalColors) => {
        setExtractedColors(finalColors);
      })
      .catch(() => {
        // console.log(e);
      });
  }, []);

  const majorColor = extractedColors.length > 0 ? extractedColors[0].hex : 'black';


  return <div className="p-2 h-full flex flex-col justify-start">
    <div className="my-2 w-full">
      <label htmlFor="my-modal" className="btn">Set image URL</label>
    </div>
    {imageSrc
      ? <div className="flex flex-row h-full card shadow-2xl shadow-gray-500 items-center">
        <div className="w-1/2 h-full flex items-center">
          <div className={`h-[240px] bg-[${majorColor}] rounded-r-lg w-full flex justify-center`}>
            <img className="max-h-[400px] self-center shadow-xl" alt="image"
                 src={imageSrc}/>
          </div>
        </div>
        <div className="w-1/2 h-[240px] flex items-center p-16 justify-between">
          {
            extractedColors.slice(0, 3).map(({ hex, red, blue, green }) => {
              return SingleColorBlock(hex, { red, blue, green });
            })
          }
        </div>
      </div>
      : <div className="alert alert-warning shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
               fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <span>Warning: Please input your image URL!</span>
        </div>
      </div>}

    <input type="checkbox" id="my-modal" className="modal-toggle"/>
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Input a valid image URL!</h3>
        <input type="text" placeholder="Input here!"
               className="input input-sm w-full max-w-xs my-2"
               onChange={(e) => setImageSrc(e.target.value)}
        />
        <div className="modal-action">
          <label htmlFor="my-modal" className="btn">Close Modal 🏞️</label>
        </div>
      </div>
    </div>
  </div>;
};

const SingleColorBlock = (hexColor: string, rgbColor: { red: number, blue: number, green: number }) => {
  return <div className="flex flex-col gap-4">
    <div className={`w-20 h-20 border bg-[${hexColor}] rounded-lg`}/>
    <div className="flex flex-col gap-2 p-2">
      <div>
        <p className="text-accent text-xs">HEX</p>
        <p className="text-accent-content text-sm font-bold">{hexColor}</p>
      </div>
      <div>
        <p className="text-accent text-xs">RGB</p>
        <p
          className="text-accent-content text-sm font-bold">{rgbColor.red}, {rgbColor.blue}, {rgbColor.green}</p>
      </div>
    </div>
  </div>;
};

export { ImageColour };
