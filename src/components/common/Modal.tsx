import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import useWindowDimensions from '../../utils/useWindowDimentions';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width: string;
  height: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children, width, height }) => {
  const [isVisible, setIsVisible] = useState(show);
  const [animation, setAnimation] = useState('slideIn');
  const { windowWidth } = useWindowDimensions()

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setAnimation('slideIn');
    } else if (!show && isVisible) {
      setAnimation('slideOut');
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [show, isVisible]);

  if (!isVisible) return null;


  return (
    <div className="modal" onClick={onClose}>
      <div 
      className="modal-content" 
      onClick={e => e.stopPropagation()}
      style={ windowWidth > 768 ? { width, height, animation: `${animation} .5s` } : { animation: `${animation} .5s` }}
      >
        <div className="h-full w-full overflow-y-auto">
          {children}
          <X className='h-8 absolute right-4 top-2 cursor-pointer' onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;