import { GetStaticProps } from 'next'

export default function Home() {
  return <></>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/day',
      permanent: false,
    },
  }
}
