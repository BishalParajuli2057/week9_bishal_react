
export type Item = { id: string; text: string; clicked?: boolean };
export type TItem = Item[];

export interface ListProps {
  header: string;
  items: TItem;
  onItemClick?: (id: string) => void; // optional (won’t break earlier tasks)
}

const MyList = ({ header, items, onItemClick }: ListProps) => {
  return (
    <div>
      <h1>{header}</h1>
      <ol>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => onItemClick?.(item.id)}
            style={{ textDecoration: item.clicked ? "line-through" : "" }}
          >
            {item.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyList;
