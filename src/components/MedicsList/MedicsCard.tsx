import React from 'react';

import '../../global/variables.scss';
import './MedicsCard.scss';

interface Props {
    name: string;
    category: string;
    speciality: string;
  }

const MedicsCard: React.FC<Props> = ({name, category, speciality}) => {

    return (
        <div className='medicsCard'>
           <img src={'../../assets/pic2.jpg'} />
           <div className='medicFullname'>{name}</div>
           <div className='medicCallbacks'>Пока нет отзывов</div>
           <div className='medicExperience'>Стаж работы: 15 лет</div>
           <div className='medicCategory'>{category}</div>
           <div className='medicSpecs'>{speciality}</div>
           <button value='Записаться' className='medicAppointmentBtn'>Записаться</button>        
        </div>
    );
};

export default MedicsCard;