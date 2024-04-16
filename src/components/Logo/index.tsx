import './index.scss';

type Props = {
  url?: string,
};

const Logo = ({ url }: Props): JSX.Element | null => {
  if (!url) {
    return null;
  }

  return (
    <div className='Logo'>
      <img src={url} alt="logo" />
    </div>
  );
};

export default Logo;
