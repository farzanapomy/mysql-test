import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Delete from '../img/delete.png';
import Edit from '../img/edit.png';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
          necessitatibus!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          cupiditate excepturi vitae, voluptatem impedit perferendis. Id maiores
          nihil molestiae! Ex omnis laboriosam praesentium blanditiis atque,
          magnam error dolore assumenda, nesciunt tempore ipsam. Illo eos
          voluptatem, obcaecati eius, expedita ut corporis, quasi reiciendis
          repellendus ab provident voluptates consequatur totam distinctio
          quisquam.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
