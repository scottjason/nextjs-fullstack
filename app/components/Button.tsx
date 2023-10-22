interface Props {
  displayText: string;
}

export const Button = (props: Props): JSX.Element => {
  const { displayText } = props;

  return (
    <button className='bg-teal-600 px-4 py-4 font-bold font-semibold uppercase text-white hover:bg-teal-700'>
      {displayText}
    </button>
  );
};
