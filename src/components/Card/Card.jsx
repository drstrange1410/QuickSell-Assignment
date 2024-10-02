import React from 'react';
import './Card.css';
import { ReactComponent as UrgentPriorityIcon } from '../../assets/icons_FEtask/SVG - Urgent Priority colour.svg';
import { ReactComponent as NoPriorityIcon } from '../../assets/icons_FEtask/No-priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../assets/icons_FEtask/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../../assets/icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../../assets/icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as InProgressIcon } from '../../assets/icons_FEtask/in-progress.svg';
import { ReactComponent as ToDoIcon } from '../../assets/icons_FEtask/To-do.svg';
import { ReactComponent as BacklogIcon } from '../../assets/icons_FEtask/Backlog.svg';
import { ReactComponent as CancelledIcon } from '../../assets/icons_FEtask/Cancelled.svg';

const Card = ({ id, title, tag, status, priority }) => {
  const renderPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return <UrgentPriorityIcon style={{ marginRight: '5px' }} />;
      case 0:
        return <NoPriorityIcon style={{ marginRight: '5px' }} />;
      case 3:
        return <HighPriorityIcon style={{ marginRight: '5px' }} />;
      case 2:
        return <MediumPriorityIcon style={{ marginRight: '5px' }} />;
      case 1:
        return <LowPriorityIcon style={{ marginRight: '5px' }} />;
      default:
        return null;
    }
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'In progress':
        return <InProgressIcon style={{ marginRight: '5px' }} />;
      case 'Todo':
        return <ToDoIcon style={{ marginRight: '5px' }} />;
      case 'Backlog':
        return <BacklogIcon style={{ marginRight: '5px' }} />;
      case 'Cancelled':
        return <CancelledIcon style={{ marginRight: '5px' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="cardContainer">
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: 'uppercase' }} className="color-grey">
          {id}
        </span>
        <div className="imageContainer relative">
          <img
            className="user-image"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="User"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle">
        <div className="cardStatus">
          {renderStatusIcon(status)}
          <p>{title}</p>
        </div>
      </div>
      <div className="cardTags">
        {renderPriorityIcon(priority)}
        {tag?.map((elem, index) => (
          <div key={index} className="tags color-grey">
            <span>•</span> {elem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
