import IndexScreen from 'src/screen';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
  return {
    props: {
      query,
      params
    }
  };
};

export default IndexScreen;
