import React from 'react';
import { useSelector } from 'react-redux';
import './DashView.css';
import Card from '../Card/Card';
import { ReactComponent as UrgentPriorityIcon } from '../../assets/icons_FEtask/SVG - Urgent Priority colour.svg';
import { ReactComponent as NoPriorityIcon } from '../../assets/icons_FEtask/No-priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../assets/icons_FEtask/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../../assets/icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../../assets/icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as AddIcon } from '../../assets/icons_FEtask/add.svg';
import { ReactComponent as DotIcon } from '../../assets/icons_FEtask/3 dot menu.svg';
import { ReactComponent as InProgressIcon } from '../../assets/icons_FEtask/in-progress.svg';
import { ReactComponent as ToDoIcon } from '../../assets/icons_FEtask/To-do.svg';
import { ReactComponent as BacklogIcon } from '../../assets/icons_FEtask/Backlog.svg';
import { ReactComponent as CancelledIcon } from '../../assets/icons_FEtask/Cancelled.svg';

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  const renderPriorityIcon = (priority) => {
    switch (priority) {
      case 'Urgent':
        return (
          <UrgentPriorityIcon
            style={{ marginLeft: '20px', marginRight: '5px ' }}
          />
        );
      case 'No priority':
        return (
          <NoPriorityIcon style={{ marginLeft: '10px', marginRight: '5px' }} />
        );
      case 'High':
        return (
          <HighPriorityIcon
            style={{ marginLeft: '10px', marginRight: '5px' }}
          />
        );
      case 'Medium':
        return (
          <MediumPriorityIcon
            style={{ marginLeft: '10px', marginRight: '5px' }}
          />
        );
      case 'Low':
        return (
          <LowPriorityIcon style={{ marginLeft: '10px', marginRight: '5px' }} />
        );
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
    selectedData && (
      <div className="dashContainer">
        {selectedData.map((elem, index) => {
          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {renderPriorityIcon(elem[index]?.title)}
                  {renderStatusIcon(elem[index]?.title)}
                  {/* User Image or Default Icon */}
                  {!user ? null : (
                    <div
                      className="imageContainer relative"
                      style={{
                        width: '15px',
                        height: '15px',
                        display: 'inline-block',
                      }}
                    >
                      <img
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                        }}
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                        alt="UserImage"
                      />
                    </div>
                  )}

                  <span>{elem[index]?.title}</span>
                </div>

                <div className="rightView">
                  <AddIcon style={{ marginRight: '5px' }} />
                  <DotIcon style={{ marginRight: '5px' }} />
                  {/* <span style={{ letterSpacing: '2px' }}>...</span> */}
                </div>
              </div>

              <div className="dashList flex-gap-10">
                {elem[index]?.value?.map((item, ind) => {
                  return (
                    <div key={ind}>
                      <Card
                        id={item.id}
                        title={item.title}
                        tag={item.tag}
                        status={item.status}
                        priority={item.priority}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashView;
