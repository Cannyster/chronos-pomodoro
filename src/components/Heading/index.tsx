import styles from './styles.module.css';

type HeadingPropos = {
  children: React.ReactNode;
};

export function Heading(props: HeadingPropos) {
  console.log(props);
  const { children } = props;
  return <h1 className={styles.heading}>{children}</h1>;
}
