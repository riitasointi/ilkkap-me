import { NextRouter, useRouter } from 'next/router';

type Params = {
  text: string;
  href: string;
};

export default function NavLink({ text, href }: Params) {
  const router: NextRouter = useRouter();
  let classes: string = 'px-3 py-2 rounded-md text-sm font-medium no-underline';

  if (router.pathname === href) {
    classes = `${classes} bg-gray-900 text-white`;
  } else {
    classes = `${classes} text-gray-300 hover:bg-gray-700 hover:text-white`;
  }

  return (
    <a href="/" className={classes}>
      {text}
    </a>
  );
}
