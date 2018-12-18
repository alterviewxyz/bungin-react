import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>پادکست‌ها</a>
    </Link>
    <Link href="/add-podcast">
      <a>افزودن پادکست</a>
    </Link>
    <Link href="/signup">
      <a>ثبت‌نام</a>
    </Link>
    <Link href="/me">
      <a>حساب‌کاربری</a>
    </Link>
  </NavStyles>
);

export default Nav;
