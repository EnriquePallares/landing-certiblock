import { Button } from '@/components';
import {
  faArrowDown,
  faHeart,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons/faHeart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { Countdown } from './CountdownTimer/CountdownTimer';
import buttonIcon from '@/assets/images/Grupo201.svg';
export interface DocumentCardInterface {
  document: Document;
}

interface Document {
  title: string;
  validity: string;
  claimed: boolean;
  favorite: boolean;
  isForEver: boolean;
  user: string;
}

const DocumentCard: React.FC<DocumentCardInterface> = props => {
  const distance = new Date(props.document.validity).getTime() - Date.now();
  const [document, setDocument] = useState<Document>(props.document);
  const [timer] = useState<Countdown>({
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  });

  const favoriteHanddler = () => {
    setDocument({
      ...document,
      favorite: !document.favorite,
    });
  };

  const claimedHanddler = () => {
    setDocument({
      ...document,
      claimed: !document.claimed,
    });
  };

  return (
    <div className="flex flex-col space-y-4 rounded-xl bg-white p-4">
      <Button
        text={document.claimed ? 'RECLAMADO' : 'RECLAMAR'}
        disabled={document.claimed}
        type={document.claimed ? 'ligth-gray' : 'primary'}
        onClick={claimedHanddler}
      />
      <div className="relative text-center text-2xl">
        <button className="absolute right-[5%] bottom-[5%] rounded-full bg-primary p-2 text-white">
          <img src={buttonIcon} alt="" />
        </button>
        <img
          className="rounded-xl border border-gray-400"
          src="https://via.placeholder.com/350/FFFFFF/C3D22D/?text=Preview"
          alt=""
        />
      </div>
      <div className="flex justify-between text-dark-gray">
        <p className="font-medium">{document.title}</p>
        <button
          className="rounded-lg bg-dark-gray py-1 px-2"
          onClick={favoriteHanddler}
        >
          <FontAwesomeIcon
            icon={document.favorite ? faHeart : faHeartRegular}
            className="text-primary"
          />
        </button>
      </div>
      <div className="rounded-lg bg-dark-gray p-4 text-center">
        <h3 className="text-3xl font-semibold text-primary">
          {document.isForEver ? (
            'Forever'
          ) : (
            <CountdownTimer
              hours={timer.hours}
              minutes={timer.minutes}
              seconds={timer.seconds}
            ></CountdownTimer>
          )}
        </h3>
      </div>
      <div className="flex">
        <Button
          text="DESCARGAR"
          className=""
          disabled={!document.claimed}
          type={!document.claimed ? 'ligth-gray' : 'primary'}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </Button>
        <Button
          text="COMPARTIR"
          className=""
          disabled={!document.claimed}
          type={!document.claimed ? 'ligth-gray' : 'primary'}
        >
          <FontAwesomeIcon icon={faShareNodes} />
        </Button>
      </div>
    </div>
  );
};

export default DocumentCard;
