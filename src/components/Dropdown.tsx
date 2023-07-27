type link = {
  id: number;
  title: string;
  link: string;
};
type Props = {
  title: string;
  links: link[];
};
const Dropdown = ({ title, links }: Props) => {
  return <div>Dropdown</div>;
};

export default Dropdown;
