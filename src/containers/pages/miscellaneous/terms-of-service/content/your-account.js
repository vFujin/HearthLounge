import React from 'react';
import {Link} from 'react-router-dom';

const YourAccount = () => {
  return (
    <li>
      <h3 id="your-account">Your Account</h3>
      <p>
        Use of some of our Services requires an account. You agree that any and all personal information you provide to us
        is complete and accurate, both at the time of registration and during continued use of our Services. You will be
        solely responsible and liable for any activity that occurs on your account and/or under your username. You are
        responsible for keeping your account secure; including, but not limited to, your password should you choose to
        set one.
      </p>
      <p>
        You are responsible for maintaining the security of your account, and you are fully responsible for all activities
        that occur under the account. You must immediately notify us of any unauthorized uses of your account, by contacting
        one of the admins on <Link target="_blank" to="https://discordapp.com/invite/fZgdKhV">discord</Link>. HearthLounge
        will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of
        such acts or omissions.
      </p>
    </li>
  )
};

export default YourAccount;