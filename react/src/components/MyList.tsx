
export type Item = { id: string; text: string };
export type TItem = Item[];

export interface ListProps {
  header: string;
  items: TItem;
}

const MyList = ({ header, items }: ListProps) => {
  return (
    <div>
      <h1>{header}</h1>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default MyList;