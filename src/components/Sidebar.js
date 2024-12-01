import React from 'react';
import '../App.css';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { RiFileCheckFill } from 'react-icons/ri';
import { FaLink, FaSitemap, FaUser, FaUsers, FaWrench } from 'react-icons/fa';
import { Bs1CircleFill, Bs2CircleFill, BsBox } from 'react-icons/bs';
import { IoGiftOutline } from 'react-icons/io5';
import { WiStars } from 'react-icons/wi';

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiOutlineFileSearch />,
      label: 'Internal Audit >'
    },
    {
      icon: <RiFileCheckFill />,
      label: 'UAT Testing'
    },
    {
      icon: <FaLink />,
      label: 'Intract'
    },
    {
      icon: <FaUsers/>,
      label: 'Queue'
    },
    {
      icon: <FaSitemap />,
      label: 'Workflow'
    },
    {
      icon: <FaUser />,
      label: 'Admin'
    },
    {
      icon: <BsBox />,
      label: 'Asset'
    },
    {
      icon: <FaUsers/>,
      label: 'Parent'
    },
    {
      icon: <Bs1CircleFill />,
      label: 'Option One'
    },
    {
      icon: <Bs2CircleFill />,
      label: 'Option Two'
    },
    {
      icon: <FaWrench />,
      label: 'All Accessories'
    },
    {
      icon: <AiOutlineFileSearch />,
      label: 'Internal Audit >'
    },
    {
      icon: <WiStars />,
      label: 'Decorating'
    },
    {
      icon: <IoGiftOutline />,
      label: 'Presenting'
    },
  ];

  return (
    <div className="sidebar">
      <img src='https://s3-alpha-sig.figma.com/img/1f36/1ad1/874b4bc5750e73cb7eb286d9fc2f32a9?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJSL4C-d-Xj~0kWjpXjrUDCOtF3J6B4LdSJZgYwfEwMJJwi0QqyYfmj6WE4nATIJYOXce7oKALtla0V3Giud1K274jva~ot1Jd8htj1v84~7TPKpVRMtVSwk244Inb103AHabMK2vtLqneawcy2j1iTt2BPOdCd2Our6-0H0y1CHxtw04Tl0llIYfxkRqQ~JpJ1HHNnwRUPLCdpgkcNLQzNTeqYSQU~AFO12dc47qxAYJcNwM9CjtvrD1mK2bFIgMkrwy-fJf8Px1NMj3~ELwx-jcRJ-0oU7ecPXZWeMTTrlMcSVvKoNysG4O~WmUJ8dVF7dbzMSZ9DLUxDMPXjyyw' alt='logo' className='logo'/>
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item.icon}
            <span className="sidebar-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;