import MyList, { type TItem } from "./MyList";

const MyContainer = () => {
  const header: string = "this is list header";
  const items: TItem = [
    { id: "1", text: "This is first task" },
    { id: "2", text: "This is second task" },
  ];

  return <MyList header={header} items={items} />;
};

export default MyContainer;