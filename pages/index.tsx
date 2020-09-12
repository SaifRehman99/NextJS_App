import Head from 'next/head';

// for component css
import styles from './index.module.css';

// if you use sass, npm i sass --save-dev (production me ik file me compile hujata islea save dev)
import styles2 from './index2.module.scss';

// the style jsx only aplicable to this component only
// if we use global keyword on the style tag tou component me sb me add krdeyga wo

function Heading(props) {
  const variables = 'red';
  return (
    <div>
      <h1>{props.heading}</h1>
      <style jsx>
        {`
          h1 {
            color: ${variables};
          }
        `}
      </style>
    </div>
  );
}

export default () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Heading heading='Heading' />

      <h1 className='title red'>okay</h1>
      <p className={styles.new}>NEW</p>
      <p className={styles2.ok}>NEW2</p>
    </div>
  );
};
