interface Props {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props): JSX.Element => {
  const { type, name, placeholder, onChange } = props;
  return (
    <input
      className='mb-1 h-8 w-80 border border-slate-50 bg-white px-3 py-6 text-gray-900 outline-none'
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
