import React, { useEffect, useState } from 'react';
import './TopNav.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../../utils/da';
import { ReactComponent as DisplayIcon } from '../../assets/icons_FEtask/Display.svg';
import { ReactComponent as DownIcon } from '../../assets/icons_FEtask/down.svg';

const getGroup = () => {
  // console.log(localStorage.getItem("group"));

  if (localStorage.getItem('group')) {
    return localStorage.getItem('group');
  } else {
    return 'status';
  }
};

const getOrder = () => {
  if (localStorage.getItem('order')) {
    return localStorage.getItem('order');
  } else {
    return 'priority';
  }
};
const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    if (valueBool) {
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem('group', e.target.value);
    } else {
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem('order', e.target.value);
    }
  };

  useEffect(() => {
    if (groupValue === 'user') {
      dispatch(
        selectData(
          groupValue,
          {
            allTickets,
            allUser,
          },
          orderValue
        )
      );
    } else {
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  return (
    <div className="top-header" style={{ paddingLeft: '10px' }}>
      <div className="displayButton">
        <button
          className="btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            fontSize: '16px',
            gap: '8px', // This will add equal spacing between the elements
          }}
        >
          <DisplayIcon style={{ width: '20px', height: '20px' }} />
          <span style={{ flex: '1' }}>Display</span>
          <DownIcon style={{ width: '20px', height: '20px' }} />
        </button>

        {displayOnClick && (
          <>
            <div className="dropOnClick flex-gap-10 p-10">
              <div className="selectGroup flex-sb">
                <span>Grouping</span>
                <select
                  value={groupValue}
                  onChange={(e) => handleGroupValue(e, true)}
                  className="selectStyle"
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span>Ordering</span>
                <select
                  value={orderValue}
                  onChange={(e) => handleGroupValue(e, false)}
                  className="selectStyle"
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
