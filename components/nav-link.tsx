import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

type Params = {
  text: string;
  href: string;
  mobile: boolean;
};

export default function NavLink({ text, href, mobile }: Params) {
  const router: NextRouter = useRouter();
  let classes: string = 'px-3 py-2 rounded-md text-sm font-medium no-underline font-bold';

  if (mobile) {
    classes = `${classes} block`;
  }

  if (href === '/') {
    if (router.pathname === '/') {
      classes = `${classes} bg-gray-900 text-white`;
    } else {
      classes = `${classes} text-gray-300 hover:bg-gray-700 hover:text-white`;
    }
  } else if (router.pathname.includes(href)) {
    classes = `${classes} bg-gray-900 text-white`;
  } else {
    classes = `${classes} text-gray-300 hover:bg-gray-700 hover:text-white`;
  }

  return (
    <Link href={href} passHref>
      <a href={href} className={classes}>
        {text}
      </a>
    </Link>
  );
}
