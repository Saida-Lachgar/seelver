import './index.scss';
import allIcons from './assets';
import classnames from 'classnames';

interface Props {
  name: string,
  className?: string,
  title?: string,
}

const Icon = (props: Props): JSX.Element => {
  const { name, className, title } = props;
  const IconSvg = allIcons[name as keyof typeof allIcons];
  const classNames = classnames('Icon', className);

  return (
    <IconSvg className={classNames} title={title} />
  );
};

export default Icon;
