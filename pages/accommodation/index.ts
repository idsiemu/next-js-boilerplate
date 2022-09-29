import CalendarScreen from 'src/screen/accommodation';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
  return {
    props: {
      query,
      params
    }
  };
};

export default CalendarScreen;
