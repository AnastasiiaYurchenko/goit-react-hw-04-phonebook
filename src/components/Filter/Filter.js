import { FieldFind, LabelFind } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <LabelFind>
      Find contacts by name
      <FieldFind type="text" value={value} onChange={onChange}></FieldFind>
    </LabelFind>
  );
};
