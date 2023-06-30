import { GetServerSideProps } from 'next'
import { Path } from '../constants/path'

export default function Home() {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: Path.Day,
      permanent: false,
    },
  }
}
